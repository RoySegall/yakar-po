import products from "@/mockups/products.js";

export default class ProductsService {

    async getProductsByString(term: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
    }
}
