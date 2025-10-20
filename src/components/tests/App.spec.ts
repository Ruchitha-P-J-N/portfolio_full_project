import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from '@/App.vue';
import { vuetify } from '@/plugins/vuetify';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = mount(App, {
      global: { plugins: [vuetify] }
    });
    expect(wrapper.text()).toContain('Featured Projects');
  });
});
