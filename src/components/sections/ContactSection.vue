<template lang="pug">
section#contact.py-12
  h2.text-h4.font-weight-bold.mb-4 Get in touch
  p.text-body-1.mb-6
    | Send me a message. I'll respond within 1–2 business days.
  ContactForm
</template>

<script setup lang="ts">
import ContactForm from '../ui/ContactForm.vue';
</script>
