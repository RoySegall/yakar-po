import products from "@/mockups/products.js";

export default class ProductsService {

    async getProductsByString(term: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
    }

    async getProductById(id: any) {
        return new Promise(resolve => {
            setTimeout(() => {

                if (Object.keys(products).indexOf(id) === 1) {
                    resolve(null);
                    return;
                }

                resolve(products[id]);
            }, 500);
        });
    }
}
