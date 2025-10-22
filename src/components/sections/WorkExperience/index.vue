<template lang="pug">
section#workExperience
  v-container
    h2.section-title.mb-10 Experience

    v-row.experience-wrapper(no-gutters)
      //- LEFT COLUMN: Job Tabs
      v-col(cols="12" md="4" class="tab-list")
        v-list(nav density="comfortable" class="job-list")
          v-list-item(
            v-for="(job, index) in experiences"
            :key="index"
            :value="job"
            class="job-tab"
            @click="activeIndex = index"
            :class="{ active: activeIndex === index }"
          )
            v-list-item-title.text-body-1.font-weight-medium
              template(v-if="job.link")
                a(
                  :href="job.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="company-link"
                  @click.stop
                ) {{ job.company }}
              template(v-else) {{ job.company }}

      //- RIGHT COLUMN: Job Details
      v-col(cols="12" md="8" class="job-details")
        transition(name="fade" mode="out-in")
          div(:key="activeIndex")
            h3.job-title
              | {{ experiences[activeIndex].title }}
              span.company
                template(v-if="experiences[activeIndex].link")
                  a(
                    :href="experiences[activeIndex].link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="company-link"
                  ) {{ experiences[activeIndex].company }}
                template(v-else) {{ experiences[activeIndex].company }}
            p.job-duration {{ experiences[activeIndex].duration }}
            p.job-location {{ experiences[activeIndex].location }}

            ul.responsibilities
              li(v-for="(item, i) in experiences[activeIndex].details" :key="i") {{ item }}

            //- SKILLS SECTION
            .skills-container.mt-4
              v-chip(
                v-for="(skill, sIndex) in experiences[activeIndex].skills"
                :key="sIndex"
                class="skill-chip"
                color="grey-lighten-3"
                text-color="black"
                variant="flat"
              ) {{ skill }}
</template>

<script setup lang="ts">
import { experiences, activeIndex } from './index.ts'
</script>

<style scoped src="./index.sass"></style>
