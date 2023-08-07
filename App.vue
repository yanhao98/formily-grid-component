<template>
  <div id="app">
    <v-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { VComponent } from './src';

export default defineComponent({
  name: 'App',
  components: {
    VComponent,
  },
});
</script>
