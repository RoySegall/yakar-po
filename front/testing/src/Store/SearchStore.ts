import ProductsService from "@/services/ProductsService";

export default {
    state: {
        searching: false,
        searchResults: [],
    },
    mutations: {
        setSearching(state: any, mode: boolean) {
            state.searching = mode;
        },

        async fireSearch(state: any, text: string) {
            const productService = new ProductsService();

            state.searching = true;
            state.searchResults = [];

            state.searchResults = await productService.getProductsByString(text);
            state.searching = false;
        },
        resetSearchResults(state: any) {
            state.searchResults = [];
        }
    },
    getters: {
        isSearchProgress(state: any) {
            return state.searching || state.searchResults.length !== 0;

        }
    },
    actions: {}
}
