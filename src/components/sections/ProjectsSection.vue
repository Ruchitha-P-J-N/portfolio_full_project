<template lang="pug">
section#projects.py-12
  h2.text-h4.font-weight-bold.mb-6 Featured Projects
  v-row(dense)
    v-col(
      v-for="p in projects" 
      :key="p.id" 
      cols="12" 
      md="6" 
      lg="4" 
      class="mb-4"
    )
      ProjectCard(:project="p")
</template>

<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';
import type { Project } from '@/types';

defineProps<{
  projects: Project[];
}>();
</script>

