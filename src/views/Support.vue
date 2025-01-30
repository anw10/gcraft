<script>
// import L from 'leaflet'
// import type { LatLng, LatLngBounds, LatLngTuple } from 'leaflet'
// import { ref } from 'vue'

// L.Icon.Default.imagePath =

// const center = ref<LatLngTuple | LatLng>([0, 0])
</script>

<template>
  <v-row style="width: 30em; align-items: center">
    <v-card style="margin: 4%"
      ><v-btn :size="'100px'" :href="'https://x.com/mguitar_craft'"
        ><v-icon icon="mdi-twitter" :size="'100px'"></v-icon
      ></v-btn>
    </v-card>
    <!-- <v-card style="margin: 4%"
      ><v-btn :size="'100px'"><v-icon icon="mdi-mail" :size="'100px'"></v-icon></v-btn
    ></v-card> -->
    <v-card style="margin: 4%"
      ><v-btn :size="'100px'" :href="'https://www.instagram.com/m.guitar.craft/'"
        ><v-icon :size="'100px'" icon="mdi-instagram"></v-icon></v-btn
    ></v-card>
  </v-row>
  <!-- <div class="flex flex-col w-full h-full">
    <div class="flex-grow basis-full">
      <VMap :center="center">
        <VMapOsmTileLayer />
        <VMapZoomControl />
        <VMapAttributionControl />
      </VMap>
    </div>
    <div class="px-1 pt-3 flex-shrink-0 text-sm overflow-hidden">center: {{ center }}</div>
  </div> -->
</template>

<style></style>
