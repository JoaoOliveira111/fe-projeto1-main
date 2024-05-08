<template>
    <!--HTTP GET -->
    <div>
        <button @click="getmusic">Make call</button>
        <div v-for="element in music" :key="element.country_key">
            <p>{{ element.country_key }}</p>
            <p>{{ element.country_name }}</p> 
            <p>{{ element.country_genre }}</p> 
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const music = ref([]);

const getMusic = async () => {
    try {
        const response = await axios.get('URL_DA_API');
        music.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

// Chama a função getMusic para buscar os dados quando o componente for montado
getMusic();
</script>
