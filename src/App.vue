<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { defineModel } from 'vue'
import { useRouter } from 'vue-router'

const searchterm = defineModel('searchterm')

const router = useRouter()
function isLoggedIn() {
  if ("isLoggedIn" in localStorage) {
    console.log("login!!")
    return true;
  }

  return false;
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("email");
  location.reload();
  router.push('/');
}

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

       
        <form class="d-flex">
          
          <input class="form-control me-2" type="search"  v-model="searchterm" placeholder="Search" aria-label="Search" />
          <RouterLink :to="'/search/' + searchterm" class="btn btn-success icon icon-search">Search</RouterLink>
          <RouterLink to="/login" class="btn btn-outline-success mx-2" v-if="!isLoggedIn()">Login</RouterLink>
          <button class="btn btn-outline-danger mx-2" @click="logout" v-if="isLoggedIn()">Logout</button>

          <RouterLink to="/register" class="btn btn-success">Register</RouterLink>
        </form>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
