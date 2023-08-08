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
import { Grid } from '@formily/grid';
import { defineComponent } from 'vue-demi';

let dispose = () => {};

export default defineComponent({
  name: 'FormilyGridComponent',
  props: {
    columns: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      grid: new Grid(),
    };
  },
  created() {
    if (this.columns) {
      this.grid.maxColumns = this.columns;
      this.grid.minColumns = this.columns;
    }
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
