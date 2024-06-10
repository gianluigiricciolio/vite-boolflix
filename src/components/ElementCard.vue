<script>
import { store } from '../store';
export default {
    name: 'ElementCard',
    data() {
        return {
            store
        }
    },

    props: ['element'],

    methods: {

    }
}

</script>

<template>
    <div class="element-card">
        <img :src="this.store.imageUrl + element.poster_path" alt="">
        <div v-if="element.original_title">
            <h4>{{ element.original_title }}</h4>
            <p>{{ element.title }}</p>
        </div>
        <div v-if="element.original_name">
            <h4>{{ element.original_name }}</h4>
            <p>{{ element.name }}</p>
        </div>
        <p>{{ element.original_language }}</p>
        <p>{{ element.vote_average }}</p>
        <p>{{ element.overview }}</p>

    </div>
</template>

<style scoped>
.element-card {
    border: 1px solid black;
}
</style>
