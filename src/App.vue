<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item
          prepend-avatar="/src/assets/logo.jpg"
          title="GCraft"
          subtitle="example@test.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list lines="two" nav>
        <v-list-item to="/" prepend-avatar="/src/assets/logo.jpg">Home</v-list-item>
        <v-list-item to="/repairCustom" prepend-icon="mdi-wrench">Repair Custom</v-list-item>
        <v-list-item to="/craftWork" prepend-icon="mdi-guitar-acoustic">Craft Work</v-list-item>
        <v-list-item to="/eqList" prepend-icon="mdi-list-box">Equipment List</v-list-item>
        <v-list-item to="/support" prepend-icon="mdi-lifebuoy">Support</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <RouterView />
  </v-app>
</template>

<style scoped>
/* header {
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
    margin-top: 1rem;
  }
} */
</style>
