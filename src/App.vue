<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>
    <v-navigation-drawer expand-on-hover rail class="ml-1">
      <v-list>
        <v-list-item
          density="compact"
          prepend-avatar="/src/assets/logo.jpg"
          title="GCraft"
          subtitle="m.guitar.craft@gmail.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" :lines="false" nav>
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Home"
          @click="$router.push({ path: '/' })"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-tools"
          title="Repair Custom"
          @click="$router.push({ path: '/repair' })"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-pencil-ruler"
          title="Craft Work"
          @click="$router.push({ path: '/craft' })"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-record-rec"
          title="Rec & Tech"
          @click="$router.push({ path: '/recTech' })"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-clipboard-list"
          title="Equipment List"
          @click="$router.push({ path: '/equipment' })"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-shopping"
          title="Product List"
          @click="$router.push({ path: '/products' })"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-lifebuoy"
          title="Support"
          @click="$router.push({ path: '/support' })"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <RouterView />
  </v-layout>
</template>

<style scoped>
.v-layout {
  /* background-color: red; */
  width: 100%;
}

nav {
  text-align: left;
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: -1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
