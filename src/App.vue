<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer expand-on-hover rail class="ml-1">
      <v-list>
        <v-list-item
          prepend-avatar="/src/assets/logo.jpg"
          title="GCraft"
          subtitle="example@test.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" :lines="false" nav>
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Home"
          @click="$router.push({ path: 'repairCustom' })"
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
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: -1rem;
  }
}
</style>
