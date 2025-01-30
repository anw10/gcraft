<script setup></script>

<template>
  <v-col
    ><v-container style="width: 500px; align-items: center; margin-top: 17%; margin-left: 12%"
      ><h1>M.Guitar Craft Works</h1></v-container
    ></v-col
  >
  <v-col
    ><v-carousel
      style="width: 500px; align-items: center; margin-top: 17%"
      hide-delimiters
      :show-arrows="false"
      :cycle="true"
    >
      <v-carousel-item height="400" src="/src/assets/products/picks.jpg" cover></v-carousel-item>
      <v-carousel-item height="400" src="/src/assets/products/wax.jpg" cover></v-carousel-item>
      <v-carousel-item
        height="400"
        src="/src/assets/repair/repair1.jpg"
        cover
      ></v-carousel-item> </v-carousel
  ></v-col>
</template>

<style></style>
