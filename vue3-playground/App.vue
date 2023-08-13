<template>
  <div>
    <div>Vue 3 Playground</div>

    <!-- <button @click="show = !show">{{ { show } }}</button> -->

    <!-- <div v-if="show"> -->
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
    </FormilyGridComponent>
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";
import { FormilyGridComponent } from "../src";

// const show = ref(false);
</script>
