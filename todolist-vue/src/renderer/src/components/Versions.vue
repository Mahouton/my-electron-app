<script setup>
import { reactive } from 'vue'

const versions = reactive({ ...window.electron.process.versions })
</script>

<template>
  <ul class="versions">
    <li class="text-info">Version v{{ versions.app }}</li>
  </ul>
</template>
