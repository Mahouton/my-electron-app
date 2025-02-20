<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); // Simulation d'un chargement de 3s
});
</script>

<template>
  <div v-if="isLoading" class="loader-container">
    <div class="pageLoader">
      <span class="spinner-border text-primary" role="status"></span>
      <p>Chargement en cours...</p>
    </div>
  </div>
</template>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.pageLoader {
  text-align: center;
  font-size: 1.2rem;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
}
</style>
