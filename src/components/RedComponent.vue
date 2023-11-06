<template>
    <div class="bg-red-100 border-black text-current p-4 w-full h-full  overflow-y-auto h-300">
      <h1 class="text-4xl text-red-300 font-semibold">Red Component</h1>
      <p class="text-2xl pt-4 pb-4">Grid Component</p>
      <GridComponent></GridComponent>
      <h2 class="text-2xl pt-4 pb-4">Image Component</h2>
      <ImgComponent></ImgComponent>
    </div>
  </template>
  <script>
  
import GridComponent from './GridComponent.vue';
  
  import ImgComponent from './ImgComponent.vue';
  export default { components: { GridComponent ,ImgComponent} };
  </script> 