<template>
  <div>
    <div>Vue 2 Naruto Playground</div>

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
  </div>
</template>

<script setup lang="ts">
import { FormilyGridComponent } from "../src";
</script>

<style scoped></style>
