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
import { Grid } from "@formily/grid";
import { observer } from "@formily/reactive-vue";
import { defineComponent } from "vue-demi";

let dispose = () => {};

// let cmptTemplateColumnsCount = 0;

export default observer(
  defineComponent({
    name: "FormilyGridComponent",
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
        // console.group("cmptTemplateColumns");
        // console.debug(`this.grid.minColumns :>> `, this.grid.minColumns);
        // console.debug(`this.grid.maxColumns :>> `, this.grid.maxColumns);
        // console.debug(`this.grid.columns :>> `, this.grid.columns);
        // console.debug(`this.grid.width :>> `, this.grid.width);
        // console.debug(`this.grid.templateColumns :>> `, this.grid.templateColumns);
        // console.debug(`++cmptTemplateColumnsCount :>> `, ++cmptTemplateColumnsCount);
        // console.groupEnd();

        if (!this.grid.templateColumns) {
          const columns = this.grid.minColumns || this.grid.maxColumns;
          const min = `${this.grid.minWidth}px`;
          const max = this.grid.maxWidth === Infinity ? "1fr" : `${this.grid.maxWidth}px`;
          return `repeat(${columns},minmax(${min},${max}))`;
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
    mounted() {
      dispose = this.grid.connect(this.$refs.rootRef as HTMLElement);
    },
    destroyed() {
      dispose();
    },
  })
);
</script>
