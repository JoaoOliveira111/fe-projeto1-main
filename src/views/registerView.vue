<template>
  <form @submit.prevent="register">
    <div class="container">
      <h1>Register</h1>
      <hr />
      <label for="email"><b>Email</b></label>
      <input
        type="text"
        v-model="email"
        placeholder="Enter Email"
        name="email"
        id="email"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        v-model="password"
        placeholder="Enter Password"
        name="psw"
        id="psw"
        required
      />

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input
        type="password"
        v-model="repeatPassword"
        placeholder="Repeat Password"
        name="psw-repeat"
        id="psw-repeat"
        required
      />
      <hr />

      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      <button type="submit" class="registerbtn">Register</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { collection } from 'firebase/firestore'
import db from '../../firebase/init'

const email = ref('')
const password = ref('')
const repeatPassword = ref('')
const auth = getAuth()

async function register() {
  if (password.value !== repeatPassword.value) {
    alert('Passwords do not match')
    return
  }

  try {
    const { user } = await createUserWithEmailAndPassword(auth, email.value, password.value)

    // Crie uma referência para a coleção 'users' no Firestore
    const usersCollectionRef = collection(db, 'users')

    // Adicione os dados do usuário à coleção 'users' usando o UID como identificador
    await setDoc(doc(usersCollectionRef, user.uid), {
      email: user.email
    })

    alert('Registration successful!')
  } catch (error) {
    console.error('Error registering user:', error.message)
    alert('Registration failed. Please try again.')
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.form-signin {
  margin-top: 0px;
}
.text-danger {
  color: red;
}
</style>
