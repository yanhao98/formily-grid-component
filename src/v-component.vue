<template>
  <div class="v-component">
    <div>{{ version }}</div>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, version } from 'vue-demi';

export default defineComponent({
  name: 'VComponent',
  setup() {
    const count = ref(0);
    return { count, version };
  },
});
</script>
