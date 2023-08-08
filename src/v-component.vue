<template>
  <div
    class="formily-grid-component"
    :style="{
      display: 'grid',
      gridTemplateColumns: grid.templateColumns,
      gap: grid.gap,
    }"
    ref="rootRef"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, version } from 'vue-demi';
import { Grid } from '@formily/grid';

let dispose = () => {};

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
      grid: new Grid(),
    };
  },
  created() {
    // this.grid.minWidth = 200;
  },
  mounted() {
    setTimeout(() => {
      dispose = this.grid.connect(this.$refs.rootRef as HTMLElement);
    });
  },
  destroyed() {
    dispose();
  },
});
</script>
