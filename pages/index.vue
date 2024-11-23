<template>
  <h1>Actus</h1>
  <div class="row align-items-start">
    <div v-for="actu in data.data" class="card col" style="width: 18rem">
      <img :src="actu.image_url" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ actu.title.slice(0, 100) }}</h5>
        <p class="card-text">{{ actu.description.slice(0, 300) }}</p>
        <a :href="actu.url" class="btn btn-primary">Lire la suite</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

const { data } = await useFetch(runtimeConfig.public.apiBase);
</script>
