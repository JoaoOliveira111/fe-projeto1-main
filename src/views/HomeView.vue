<script setup>
import spotifyApi from '@/api/spotify'
console.log(spotifyApi)
if(!("spotify_access_token" in localStorage)) {
    console.log('No access token, redirecting to login')

     window.open(
       'http://localhost:8000/credentials',
       '_blank'
     ).focus();

  fetch('http://localhost:8000/login').then(
    response => response.json()
  ).then(
    data => {
      const access_token = String(data.access_token)
      const refresh_token = String(data.refresh_token)
      localStorage.setItem('spotify_access_token', access_token)
      localStorage.setItem('spotify_refresh_token', refresh_token)
    }
  )
}


//spotifyApi.setAccessToken(localStorage.getItem('spotify_access_token'))
//spotifyApi.setRefreshToken(localStorage.getItem('spotify_refresh_token')) 

// Get Elvis' albums
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
  function (data) {
    console.log('Artist albums', data.body)
  },
  function (err) {
    console.error(err)
  }
)
</script>

<template>
  <h1 class="mb-0" style="color: #1db954">Músicas Novas</h1>
  <hr class="mb-4 mt-0" />
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="https://static.fnac-static.com/multimedia/Images/PT/NR/7b/ed/0e/978299/1507-1/tsp20160915184551/Reflexo.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Dillaz</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="https://i.scdn.co/image/ab6761610000517433c9b5dcc05194199aa68410"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Boris Brejcha</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/31/c7/d8/31c7d8f6-48a5-fd9f-9d9c-fd249c165035/7321170225172.png/400x400bb.webp"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Hozho</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            class="card-img-top"
            src="https://i.ebayimg.com/images/g/10kAAOSwZDledDvM/s-l400.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Rüfüs Du Sol</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <hr class="mb-5 mt-0" />
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <img
              class="card-img-top"
              src="https://static.fnac-static.com/multimedia/Images/FR/NR/64/e5/a8/11068772/1507-1/tsp20200219113126/After-Hours.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">The Weekend</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              class="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwf3RJjIYz2fGscEoCjaW-LImK6i1VF8N5VYbPGskYLg&s"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Talamasca</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              class="card-img-top"
              src="https://d1e9ycqe323hkh.cloudfront.net/items/401609505784.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Mathame</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              class="card-img-top"
              src="https://rovimusic.rovicorp.com/image.jpg?c=-g_uRYwlzzfUEKGxWrUvMA4Q1ghY8VaPylnm7PwcKNY=&f=4"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Boris Brejcha</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
