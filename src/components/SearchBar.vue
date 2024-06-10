<script>
import { store } from '../store';
export default {
    name: 'SearchBar',
    data() {
        return {
            store
        }
    },

    props: [''],

    methods: {
        search() {
            this.$emit('search');
        }
    }
}

</script>

<template>
    <input @keyup.enter="search" type="text" v-model="this.store.query">
    <select name="" id="" v-model="this.store.endpoints.selectedType">
        <option value="/search/movie">Movies</option>
        <option value="/search/tv">TV Shows</option>
    </select>
</template>

<style scoped></style>
