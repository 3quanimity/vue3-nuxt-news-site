<template>
  <div class="container">
    <h1 class="mb-4">Actus</h1>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="actu in data.data" :key="actu.id" class="col">
        <div class="card h-100">
          <!-- Image with fixed height -->
          <div class="card-img-wrapper" style="height: 200px">
            <img
              :src="actu.image_url"
              class="card-img-top"
              :alt="actu.title"
              style="height: 100%; object-fit: cover; width: 100%"
            />
          </div>

          <!-- Card content with flex layout -->
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate-2">{{ actu.title }}</h5>
            <p class="card-text flex-grow-1 text-truncate-3">
              {{ actu.description }}
            </p>
            <a
              :href="actu.url"
              class="btn btn-primary mt-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lire la suite
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch(runtimeConfig.public.apiBase);
</script>

<style scoped>
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .card-img-wrapper {
    height: 150px !important;
  }
}
</style>
