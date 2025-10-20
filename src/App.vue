<template>
  <v-app>
    <AppLayout>
      <template #main>
        <HeroSection />
        <WorkExperience />
        <ProjectsSection :projects="projects" />
        <Certification />
        <ContactSection />
      </template>
    </AppLayout>
  </v-app>
</template>

<script setup lang="ts">
import AppLayout from './components/layout/AppLayout.vue';
import HeroSection from './components/sections/HeroSection.vue';
import WorkExperience from './components/sections/WorkExperience.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import Certification from './components/sections/Certification.vue';
import type { Project } from './types';

const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'AI Resume Tailor',
    description: 'Customizes resumes based on job descriptions.',
    tech: ['Vue', 'TypeScript', 'Vite', 'Vuetify'],
    repoUrl: 'https://github.com/yourname/ai-resume-tailor',
    liveUrl: 'https://example.com'
  },
  {
    id: 'proj-2',
    title: 'Serverless Contact API',
    description: 'Contact form via serverless functions.',
    tech: ['Lambda', 'API Gateway', 'DynamoDB'],
    repoUrl: 'https://github.com/yourname/serverless-contact',
    liveUrl: ''
  }
];
</script>