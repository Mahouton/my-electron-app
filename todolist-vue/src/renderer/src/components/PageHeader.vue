<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
});
</script>

<template>
  <!-- Page header -->
  <div class="page-header d-print-none">
    <div class="container-xl">
      <div class="row g-2 align-items-center">
        <div class="col">
          <!-- Page pre-title (optionnelle) -->
          <div v-if="subtitle" class="page-pretitle">{{ subtitle }}</div>
          <h2 class="page-title">{{ title }}</h2>
        </div>
        <!-- Actions (slot) -->
        <div class="col-auto ms-auto d-print-none" v-if="$slots.actions">
          <div class="btn-list">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
