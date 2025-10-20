<template>
  <section id="projects" class="py-12">
    <h2 class="text-h4 font-weight-bold mb-6">Featured Projects</h2>
    <v-row dense>
      <v-col v-for="p in projects" :key="p.id" cols="12" md="6" lg="4" class="mb-4">
        <ProjectCard :project="p" />
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';
import type { Project } from '@/types';

defineProps<{
  projects: Project[];
}>();
</script>

