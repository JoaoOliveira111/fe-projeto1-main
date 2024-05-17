import SpotifyWebApi from 'spotify-web-api-node'

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '7d6b37dfb5c440349fb449ddcf8e1af0',
  clientSecret: '32266d5e4d8d44cf91d0bed7a87eac75',
  redirectUri: 'http://localhost:8000/callback'
})

spotifyApi.setAccessToken(
  'BQCgbxLkw8RrojYssADZgrLMvIxKU43_A9nRK8qSlP0POgKKTbQzq6U8qtgThOfk8pwT3ThMXp-TTU71pbVoi0mSkrnq1toSAyOv1pkujRQnXEGa6cb5VIMGnh7gQ5DPrwWyewsFsdK-gVeBRVWGwtxwbR99UCxV5DtwSCfpeLMDxtIFG86KN0uyCvwgktrJLceNMed1HNOWdhRns3FkwtbRk-66XiF8EpEhS8Y8Hyhobc-aDquNGIN7yTqSGc4Us8g7QAU3QPN8JwO-vqMeA5DOI-EfcCPPosOqzZ_EIX82wWKquN9657G4_f5jtvhaytJeqJPKobsAEIhqQ1yh'
)
spotifyApi.setRefreshToken(
  'AQBqQqwJocMkXzT380deK7wLnCjuvHleHgNwad_Q29dY1xE3QVzxGil8FDWxVD_HOTAMSRP6PJPGDf_ppZ7QB6N_HqNDHmC-huk-vDl60zoqR7NC_vJNx03lacdK0f'
)

export default spotifyApi
