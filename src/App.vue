<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/music">Music</RouterLink>
  <header class="mb-5">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <RouterLink to="/">
          <img
            src="https://cdn.icon-icons.com/icons2/3041/PNG/512/spotify_logo_icon_189218.png"
            alt="Logo"
            width="50"
            height="50"
          />
        </RouterLink>
        <RouterLink to="/search" class="btn btn-success">Search Artist</RouterLink>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <RouterLink to="/login" class="btn btn-outline-success mx-2">Login</RouterLink>
          <RouterLink to="/register" class="btn btn-success">Register</RouterLink>
        </form>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
