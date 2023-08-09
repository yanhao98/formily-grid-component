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
    columnGap: {
      type: Number,
      required: false,
    },
    rowGap: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      grid: new Grid({
        rowGap: this.rowGap,
        columnGap: this.columnGap,
        maxColumns: this.columns,
        minColumns: this.columns,
        strictAutoFit: !!this.columns,
      }),
    };
  },
  created() {
    /* if (this.columns) {
      this.grid.maxColumns = this.columns;
      this.grid.minColumns = this.columns;
      this.grid.options.strictAutoFit = true;
    } */
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
