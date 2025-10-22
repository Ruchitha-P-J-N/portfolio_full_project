<script setup lang="ts">
import { awsBadge } from './index.ts'
</script>

<template lang="pug">
section#certifications.certifications-section.py-16
  v-container
    h2.text-h4.text-h3-md.font-weight-bold.text-center.mb-8
      | Certifications & Publications

    //- CERTIFICATION CARD
    v-row(align="center" justify="center" class="mb-12")
      v-col(cols="12" md="4" class="text-center")
        v-card(elevation="3" class="pa-6 rounded-xl")
          v-img(
            :src="awsBadge"
            alt="AWS Certified Cloud Practitioner"
            class="mx-auto mb-4 aws-badge"
            contain
          )
          h3.text-h6.font-weight-medium.mb-2
            | AWS Certified Cloud Practitioner
          p.text-body-2.mb-3
            | Credential ID: 
            strong ABC123XYZ
          //- ✅ Updated AWS link + text
          v-btn(
            variant="outlined"
            color="primary"
            href="https://drive.google.com/file/d/1pFVbsSwObXL12ohxHlPc1o_rThnJg49_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            class="text-none"
          )
            | View My Certificate

    //- DIVIDER
    v-divider.my-10

    //- PUBLICATIONS
    h3.text-h5.font-weight-bold.text-center.mb-6 Research Publications

    v-row(justify="center" class="text-center")
      //- Publication 1
      v-col(cols="12" md="6")
        v-card(elevation="2" class="pa-6 rounded-xl")
          h4.text-h6.font-weight-medium.mb-2
            | "Automated Medical Image Segmentation using Deep Learning"
          p.text-body-2.mb-4
            | Published in IEEE Xplore, 2024.
          //- ✅ Updated link
          v-btn(
            variant="outlined"
            color="primary"
            href="https://drive.google.com/file/d/1s0VPH5lnjHZcRzaCg17dFcv069ieO1HR/view"
            target="_blank"
            rel="noopener noreferrer"
            class="text-none"
          )
            | View Publication

      //- Publication 2
      v-col(cols="12" md="6")
        v-card(elevation="2" class="pa-6 rounded-xl")
          h4.text-h6.font-weight-medium.mb-2
            | "IoT-based Smart Agriculture Monitoring System"
          p.text-body-2.mb-4
            | Published in Springer Journal of Emerging Technologies, 2023.
          //- ✅ Updated link
          v-btn(
            variant="outlined"
            color="primary"
            href="https://drive.google.com/file/d/1zqtoDYaoYAgYOQHFHvUd20KYkJWosc0K/view"
            target="_blank"
            rel="noopener noreferrer"
            class="text-none"
          )
            | View Publication
</template>

<style scoped src="./index.sass"></style>
