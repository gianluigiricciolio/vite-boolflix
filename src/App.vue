<script>
// import store
import { store } from './store';
// import axios
import axios from 'axios';
// import components
import ElementCard from './components/ElementCard.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  data() {
    return {
      store
    }
  },

  components: {
    ElementCard,
    SearchBar,
  },

  methods: {
    apiCall() {
      const params = {
        api_key: this.store.apiKey,
        query: this.store.query,
        language: this.store.selectedLanguage,
      }
      axios
        .get(this.store.baseUrl + this.store.endpoints.selectedType, { params })
        .then(response => {
          console.log(response.data.results);
          this.store.results = response.data.results;
        })
        .catch(error => {
          console.log(error);
        })
    }
  },

  created() {
    this.apiCall();
  }
}
</script>

<template>
  <header>
    <h1>Movies</h1>
    <SearchBar @search="apiCall"></SearchBar>
    <hr>
  </header>

  <ElementCard v-for="element in this.store.results" :element="element"></ElementCard>
</template>

<style scoped></style>
