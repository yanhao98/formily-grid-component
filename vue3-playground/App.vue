<template>
  <div>
    <div>Vue 3 Playground</div>

    <FormilyGridComponent :columns="2">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </FormilyGridComponent>
  </div>
</template>

<script setup lang="ts">
import { FormilyGridComponent } from '../src';
</script>
