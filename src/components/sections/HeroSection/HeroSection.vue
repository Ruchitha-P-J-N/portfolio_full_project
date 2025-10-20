<script setup lang="ts">
import { heroImage } from './HeroSection.ts'
</script>

<template>
  <section class="full-page-section">
    <v-row align="center" justify="center">
      <!-- IMAGE COLUMN -->
      <v-col cols="12" md="5" class="d-flex justify-center">
        <div class="profile-wrapper">
          <v-img
            :src="heroImage"
            alt="Profile photo of Ruchitha"
            class="profile-image"
            cover
          />
        </div>
      </v-col>

      <!-- TEXT COLUMN -->
      <v-col cols="12" md="7" class="d-flex flex-column justify-center">
        <h1 class="text-h3 text-h2-md font-weight-bold mb-4 text-center">
          Hi, I’m Ruchitha 
        </h1>

        <!-- SUMMARY -->
        <p class="text-body-1 mb-6 summary-text">
          Passionate and skilled Full-Stack Developer with experience in building and maintaining web applications using TypeScript, Vue.js, Node.js, Vuetify, and PostgreSQL, along with cloud technologies like AWS and Azure. Strong background in software development, algorithms, data structures, AI/ML, and blockchain. Hands-on experience with IoT projects, smart contracts, and research in medical image segmentation. Proven ability to work collaboratively in global teams and deliver scalable, reliable solutions. Eager to leverage technical skills and creativity to develop impactful web applications and innovative solutions.
        </p>

        <div class="d-flex flex-wrap ga-3 justify-center">
          <v-btn color="primary" class="text-none" href="#projects">
            <v-icon start icon="mdi-rocket-launch" /> View Projects
          </v-btn>
          <v-btn variant="outlined" class="text-none" href="#workExperience">
            <v-icon start icon="work-history" /> Work Experience
          </v-btn>
          <v-btn variant="outlined" class="text-none" href="#certifications">
            <v-icon start icon="work-history" /> Certifications
          </v-btn>
          <v-btn variant="outlined" class="text-none" href="#contact">
            <v-icon start icon="mdi-email" /> Contact Me
          </v-btn>
          <v-btn
            variant="outlined"
            color="primary"
            class="text-none"
            href="https://www.linkedin.com/in/ruchitha-p-j-763b781a2"
            target="_blank"
          >
            <v-icon start icon="mdi-linkedin" /> LinkedIn
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped src="./HeroSection.sass"></style>
