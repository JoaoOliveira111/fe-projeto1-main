
import SpotifyWebApi from 'spotify-web-api-node'

var spotifyApi = new SpotifyWebApi({
    clientId: '7d6b37dfb5c440349fb449ddcf8e1af0',
    clientSecret: '32266d5e4d8d44cf91d0bed7a87eac75',
    redirectUri: 'http://localhost:8000/callback'
  })



  spotifyApi.setAccessToken(localStorage.getItem('access_token'))
  spotifyApi.setRefreshToken(localStorage.getItem('refresh_token'))

  export default spotifyApi
