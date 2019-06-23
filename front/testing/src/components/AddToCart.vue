<template>
    <div class="cart-button">
        <button type="button" v-if="!productAlreadyInCart()" class="btn btn-success" @click="addToCart()">
            <i class="fal fa-shopping-cart"></i> Add to cart
        </button>

        <button type="button" v-if="productAlreadyInCart()" class="btn btn-danger" @click="removeFromCart()">
            <i class="fal fa-shopping-cart"></i> Remove from cart
        </button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";

    @Component({
        components: {}
    })

    export default class AddToCart extends Vue {
        @Prop(Object) readonly product!: object;

        public addToCart() {
            if (this.productAlreadyInCart()) {
                return;
            }

            this.$store.commit('AddProduct', this.product)
        }

        public removeFromCart() {
            this.$store.commit('removeProduct', this.product)
        }

        public productAlreadyInCart() {
            return this.getCartIds().indexOf(this.product.id) >= 0;
        }

        public getCartIds() {
            return this.$store.state.cart.itemsIds;
        }
    }
</script>

<style lang="scss">

    .cart-button {

        button {
            font-size: 1.25em;
        }

    }
</style>
