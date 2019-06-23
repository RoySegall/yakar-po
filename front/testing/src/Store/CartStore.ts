export default {
    state: {
        items: [],
        itemsIds: []
    },
    mutations: {
        AddProduct(state: any, product: object) {
            state.items.push(product);
            state.itemsIds.push(product.id);
        },

        removeProduct(state: any, product: object) {
            state.itemsIds = state.itemsIds.filter((item:any) => {
                return item !== product.id;
            });

            state.items = state.items.filter((item:any) => {
                return item.id !== product.id;
            });
        }
    },
    getters: {
        getItemsNumber(state: any) {
            return Object.keys(state.items).length;
        }
    },
    actions: {}
}
