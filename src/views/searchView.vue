<template>
  <div>
    <div v-if="artists">
        <div class="container">
          <div class="container">
            <div class="row">
              <div  v-for="artist in artists" :key="artist.id" class="col-md-3">
              <div class="card mb-5">
              
                  <img
                    class="card-img-top"
                    :src="artist.images[0]?.url ?? 'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h3 class="card-title">{{ artist.name }}</h3>
                    <p class="card-text">
                      Followers Total: <b>{{ artist.followers.total ?? 'unknown' }}</b>
                    </p>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import spotifyApi from '@/api/spotify'
import { ref } from 'vue'

import { useRoute, onBeforeRouteUpdate } from 'vue-router'

const route = useRoute()

const artists = ref([])


function callapi() {
  const searchTerm = route.params.searchterm

  if(!("spotify_access_token" in localStorage)) {
    console.log('No access token, redirecting to login')

     window.open(
       'http://localhost:8000/credentials',
       '_blank'
     ).focus();

  setTimeout(fetch('http://localhost:8000/login').then(
    response => response.json()
  ).then(
    data => {
      const access_token = String(data.access_token)
      const refresh_token = String(data.refresh_token)
      localStorage.setItem('spotify_access_token', access_token)
      localStorage.setItem('spotify_refresh_token', refresh_token)
    }
  ), 1000)
}


//spotifyApi.setAccessToken(localStorage.getItem('spotify_access_token'))
//spotifyApi.setRefreshToken(localStorage.getItem('spotify_refresh_token')) 

spotifyApi.searchArtists(searchTerm).then(
  function (data) {
    artists.value = data.body.artists.items

    console.log(artists.value)
  },
  function (err) {
    console.error(err)
  }
)


}
onBeforeRouteUpdate(() => callapi())
callapi()

</script>
