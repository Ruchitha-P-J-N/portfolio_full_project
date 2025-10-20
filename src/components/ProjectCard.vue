<template>
  <v-card height="100%">
    <v-card-item>
      <div class="d-flex align-center">
        <v-icon icon="mdi-folder-outline" class="mr-2" />
        <v-card-title class="text-h6">{{ project.title }}</v-card-title>
      </div>
      <v-card-subtitle>{{ techList }}</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      {{ project.description }}
    </v-card-text>
    <v-card-actions class="pt-0">
      <v-btn
        v-if="project.repoUrl"
        :href="project.repoUrl"
        target="_blank"
        variant="text"
        class="text-none"
      >
        <v-icon start icon="mdi-github" /> Repo
      </v-btn>
      <v-btn
        v-if="project.liveUrl"
        :href="project.liveUrl"
        target="_blank"
        variant="text"
        class="text-none"
      >
        <v-icon start icon="mdi-open-in-new" /> Live
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { Project } from '@/types';

const props = defineProps<{
  project: Project
}>();

const techList = props.project.tech.join(' • ');
</script>
