<script setup>
import PageLoader from '../components/PageLoader.vue'
import { ref, onMounted } from 'vue'
import router from '../router'
import {useRoute} from "vue-router";

const headers = ref([
  { title: 'Nom', key: 'name' },
  { title: 'Description', key: 'Entreprise' },
  { title: 'Adresse', key: 'address' },
  { title: 'Menu', key: 'menu', sortable: false }
])

const items = ref([])
const search = ref('') // Champ de recherche
const route = useRoute()

// Fonction pour naviguer vers une page en fonction de l'action et du partenaire
const goTo = (partner, action) => {
  router.push(`/partenaires/${partner.acronym}/${action}`)
}

onMounted(async () => {
  try {
    items.value = await window.api.invoke('get-companie-annexes', route.params.id)
    console.log(items.value)
  } catch (error) {
    console.error("Erreur lors de la récupération des annexe de l'entreprise :", error)
  }
})
</script>

<template>
  <page-loader> </page-loader>
  <div class="card">
    <div class="card-body p-0">
      <!-- Barre de recherche -->
      <v-text-field
        v-model="search"
        label="Rechercher..."
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        clearable
      ></v-text-field>
      <!-- DataTable -->
      <v-data-table show-select :search="search" :headers="headers" :items="items">
        <template #item.menu="{ item }">
          <v-menu>
            <template #activator="{ props }">
              <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
            </template>
            <v-list>
              <v-list-item @click="goTo(item, 'factures')">
                <v-list-item-title>Factures</v-list-item-title>
              </v-list-item>
              <v-list-item @click="goTo(item, 'agents')">
                <v-list-item-title>Agents</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<style scoped></style>
