<template>
  <v-app-bar density="comfortable" elevation="1">
    <v-container class="d-flex align-center">
      <v-btn variant="text" to="/" class="text-none px-0">
        <v-icon icon="mdi-briefcase" class="mr-2" />
        <span class="font-weight-medium">Ruchitha Podhili Jayachandra Naidu</span>
      </v-btn>
      <v-spacer />
      <v-btn variant="text" href="#workExperience" class="text-none">Work Experince</v-btn>
      <v-btn variant="text" href="#certifications" class="text-none">Certifications</v-btn>
      <v-btn variant="text" href="#projects" class="text-none">Projects</v-btn>
      <v-btn variant="text" href="#contact" class="text-none">Contact</v-btn>
      <v-btn
        variant="tonal"
        class="ml-2 text-none"
        href="https://github.com/yourname"
        target="_blank"
      >
        <v-icon start icon="mdi-github" /> GitHub
      </v-btn>
    </v-container>
  </v-app-bar>

  <v-main>
    <v-container class="py-12">
      <slot name="main" />
    </v-container>
  </v-main>

  <v-footer app elevation="0" class="justify-center">
    <v-container class="text-center">
      <div class="text-body-2">
        © {{ new Date().getFullYear() }} Your Name — All rights reserved.
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
</script>