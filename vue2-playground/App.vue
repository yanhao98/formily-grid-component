<template>
  <div id="app">
    <FormilyGridComponent>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <!-- <div>{{ fn() }}</div> -->
    </FormilyGridComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { FormilyGridComponent } from '../src';

export default defineComponent({
  name: 'App',
  components: {
    FormilyGridComponent,
  },
  methods: {
    fn() {
      console.debug('fn');
      return 'fn';
    },
  },
});
</script>
