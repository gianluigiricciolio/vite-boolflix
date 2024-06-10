import { reactive } from 'vue'

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3',
    imageUrl: 'https://image.tmdb.org/t/p/w342',
    apiKey: 'c22514794bf6de906adff15dcf3a9991',
    results: [],
    selectedLanguage: 'it-IT',
    query: '',
    endpoints: {
        selectedGenre: '',
        selectedType: '',
    }
})