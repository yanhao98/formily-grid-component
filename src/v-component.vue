<template>
  <div
    class="formily-grid-component"
    :style="{
      display: 'grid',
      gridTemplateColumns: cmptTemplateColumns(),
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
  methods: {
    cmptTemplateColumns() {
      if (!this.grid.templateColumns) {
        return this.grid.maxWidth === Infinity
          ? `repeat(${this.grid.columns},minmax(0,1fr))`
          : `repeat(${this.grid.columns},minmax(${this.grid.minWidth}px,${this.grid.maxWidth}px))`;
      }

      return this.grid.templateColumns;
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
  // created() {},
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
