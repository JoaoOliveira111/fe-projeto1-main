<template>
  <div>
    <input type="text" v-model="searchterm" placeholder="Search artist" />
    <button @click="searchArtist">Search</button>
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
import spotifyApi from '@/api/spotfy'
import { ref } from 'vue'
const artists = ref([])
const searchterm = ref('')

const searchArtist = async () => {
  spotifyApi.searchArtists(searchterm.value).then(
    function (data) {
      artists.value = data.body.artists.items

      console.log(artists.value)
    },
    function (err) {
      console.error(err)
    }
  )
}
</script>
