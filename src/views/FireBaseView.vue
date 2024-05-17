<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div>
        <input type="text" v-model="userData.firstName" /> </br>
        <input type="text" v-model="userData.lastName" /> </br>
        <input type="text" v-model="userData.email" /> </br>
        <button @click="handleCreateUser">Create user</button>
    </div>
</template>

<script>
// Import createUser function from '../script/dbscripts'
import { createUser } from '../script/dbscripts';

export default {
    data() {
        return {
            userData: {
                firstName: '',
                lastName: '',
                email: '', 
                birthdate: ''
            }
        }
    },
    methods: {
        async handleCreateUser() {
            try {
                const docRef = await createUser(this.userData)
                console.log('Created DB with ref ' + docRef.id)
            } catch (error) {
                console.error('Error in creating DB', error)
            }
        }
    }
}
</script>
