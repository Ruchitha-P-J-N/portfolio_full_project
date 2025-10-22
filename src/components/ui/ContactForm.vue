<template lang="pug">
v-form(@submit.prevent="onSubmit" v-model="isValid")
  v-row
    v-col(cols="12" md="6")
      v-text-field(
        v-model="form.name"
        label="Name"
        :rules="[rules.required('Name')]"
        variant="outlined"
        density="comfortable"
        prepend-inner-icon="mdi-account"
      )
    v-col(cols="12" md="6")
      v-text-field(
        v-model="form.email"
        label="Email"
        :rules="[rules.required('Email'), rules.email]"
        variant="outlined"
        density="comfortable"
        prepend-inner-icon="mdi-email"
      )
    v-col(cols="12")
      v-textarea(
        v-model="form.message"
        label="Message"
        :rules="[rules.required('Message'), rules.min(10)]"
        variant="outlined"
        density="comfortable"
        auto-grow
        prepend-inner-icon="mdi-message-text-outline"
      )
    v-col(cols="12" class="d-flex align-center ga-3")
      v-btn(
        :loading="loading"
        :disabled="!isValid || loading"
        type="submit"
        color="primary"
        class="text-none"
      )
        v-icon(start icon="mdi-send")
        | Send
      div(v-if="status.message")
        v-chip(
          :color="status.error ? 'error' : 'success'"
          variant="flat"
          size="small"
          class="text-white"
        ) {{ status.message }}
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const API_URL = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';

const form = reactive<ContactFormData>({
  name: '',
  email: '',
  message: ''
});

const loading = ref(false);
const isValid = ref(false);
const status = reactive<{ message: string; error: boolean }>({ message: '', error: false });

const rules = {
  required: (label: string) => (v: string) => (!!v && v.trim().length > 0) || `${label} is required`,
  min: (n: number) => (v: string) => (!v || v.length >= n) || `Minimum ${n} characters`,
  email: (v: string) =>
    (!v || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) || 'Must be a valid email'
};

async function onSubmit() {
  status.message = '';
  status.error = false;

  // API_URL is now always available with fallback

  loading.value = true;
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(text || `Request failed (${res.status})`);
    }

    status.message = 'Message sent successfully!';
    status.error = false;

    form.name = '';
    form.email = '';
    form.message = '';
  } catch (err: unknown) {
    status.message = err instanceof Error ? err.message : 'Failed to send message';
    status.error = true;
  } finally {
    loading.value = false;
  }
}
</script>
