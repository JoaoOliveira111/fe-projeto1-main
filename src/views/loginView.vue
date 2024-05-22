<template>
  <section class="vh-80 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">Please enter your login and password!</p>

                <div data-mdb-input-init class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                    v-model="email"
                    @blur="validateEmail"
                  />
                  <label class="form-label" for="typeEmailX">Email</label>
                  <span class="text-danger">{{ emailError }}</span>
                </div>

                <div data-mdb-input-init class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                    v-model="password"
                    @blur="validatePassword"
                  />
                  <label class="form-label" for="typePasswordX">Password</label>
                  <span class="text-danger">{{ passwordError }}</span>
                </div>

                <p class="small mb-5 pb-lg-2">
                  <a class="text-white-50" href="#!">Forgot password?</a>
                </p>

                <button
                  data-mdb-button-init
                  data-mdb-ripple-init
                  class="btn btn-outline-light btn-lg px-5"
                  type="submit"
                  @click="login"
                >
                  Login
                </button>

                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                  <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                </div>
              </div>

              <div>
                <p class="mb-0">
                  Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { getDocs, collection, setDoc, doc } from 'firebase/firestore'
import db from '../../firebase/init'



const email = ref('')
const password = ref('')
const auth = getAuth()
const router = useRouter()
if ("isLoggedIn" in localStorage) {
  router.push('/')

}



async function validateLogin(email, password) {
  const querySnapshot = await getDocs(collection(db, 'users'))

  const data = querySnapshot.docs.map((doc) => doc.data())

  for (let i = 0; i < data.length; i++) {
    if (email == data[i].email && password == data[i].password) {
      console.log('Logged in')
      return true
    }
  }
  console.log('Not logged in')
  return false
}

async function login() {
  if (await validateLogin(email.value, password.value)) {
    localStorage.setItem('isLoggedIn', true)
    localStorage.setItem('email', email.value)
    router.push('/') && window.location.reload()
    
    return
  }
  console.error('Error logging in: ')
  alert('Login failed. Please check your email and password.')
}
</script>

<style scoped>
/* Your scoped styles here */
</style>
