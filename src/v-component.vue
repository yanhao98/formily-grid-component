<template>
  <div>
    <div>{{ version }}</div>
    <button type="button" @click="count++">count is: {{ count }}</button>
    <input type="text" v-model="count" />
    <div>{{ msg }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, version } from 'vue-demi';

export default defineComponent({
  name: 'FormilyGridComponent',
  props: {
    msg: {
      type: String,
      default: 'Hello World',
    },
  },
  data() {
    return {
      count: 0,
      version,
    };
  },
});
</script>
