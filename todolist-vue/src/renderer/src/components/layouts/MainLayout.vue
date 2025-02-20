<script setup>
import NavBar from '../NavBar.vue'
import PageHeader from '../PageHeader.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

// Récupérer la route actuelle
const route = useRoute()

// Extraire le titre défini dans meta.title
const pageTitle = computed(() => route.meta.title)
</script>

<template>
  <div class="page">
    <NavBar></NavBar>
    <div class="page-wrapper">
      <PageHeader :title="pageTitle" />
      <!-- Page body -->
      <div class="page-body">
        <div class="container-xl">
          <router-view>

          </router-view>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
