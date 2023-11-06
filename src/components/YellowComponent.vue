<template>
    <div class="bg-yellow-100 p-4 w-1/4 text-green-800 ">
      <h1 class=" pb-4 text-4xl">Yellow Component</h1>
  
      <!-- <ul class="pl-7 list-disc list-inside">
        <li>h</li>
        <li>e</li>
      </ul> -->
  
      <ul v-for="carName in carNames" :key="carName" class="pl-7 list-disc list-inside">
        <li class="pb-2">{{ carName }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  const carNames = [
    "Toyota Camry",
    "Honda Accord",
    "Ford F-150",
    "Chevrolet Silverado",
    "Dodge Ram 1500",
    "Tesla Model 3",
    "Honda Civic",
    "Toyota Corolla",
    "Nissan Sentra",
    "Hyundai Elantra",
    "Kia Forte",
  ];
  
  export default {
    data() {
      return {
        carNames,
      };
    },
  };
  </script>
  