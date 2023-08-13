<template>
  <div id="app">
    <!-- <button @click="show = !show">{{ { show } }}</button> -->

    <FormilyGridComponent :columns="2">
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
import { defineComponent } from "@vue/composition-api";
import { FormilyGridComponent } from "../src";

let fnCount = 0;

export default defineComponent({
  name: "App",
  components: {
    FormilyGridComponent,
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    fn() {
      console.debug(`++fnCount :>> `, ++fnCount);
      return "fnRtn";
    },
  },
});
</script>
