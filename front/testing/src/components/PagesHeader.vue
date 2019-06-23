<template>
    <div class="row pages-header">
        <div class="col-2 text-left site-name">
            <router-link :to="{path: '/'}">Yakar po</router-link>
        </div>

        <div class="col-8 text-left">
            <div class="form-group">
                <input type="text" class="product-search" placeholder="Search for products" v-model="productSearch" />
                <div class="search"><i class="fal fa-search"></i></div>
                <SearchResultItem mode="innerPage" v-if="mode === 'innerPage'"></SearchResultItem>
            </div>
        </div>

        <div class="col-2 cart-container">
            <div class="cart-wrapper">
                <div class="info">
                    <router-link :to="{name: 'cart'}">
                        <span class="text">{{getCartItems().length}} items</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch, Prop} from "vue-property-decorator";
    import SearchResultItem from "@/components/Home/SearchResultItem"


    @Component({
        components: {SearchResultItem}
    })

    export default class PagesHeader extends Vue {
        @Prop(String) readonly mode!: string;


        data() {
            return {
                productSearch: '',
            }
        }

        @Watch("productSearch")
        public pingSearch(search: string) {
            this.$store.commit('fireSearch', search);
        }

        public getCartItems() {
            return this.$store.state.cart.items;
        }
    }
</script>

<style lang="scss">
    .pages-header {
        background: #ecf5ff;
        border-bottom: black solid 1px;
        padding-top: 1em;
        padding-bottom: 1em;

        .site-name {
            font-size: 2em;
            letter-spacing: .5em;

            a {
                color: black;

                &:hover {
                    text-decoration: none;
                    color: #0067cd;
                }
            }
        }

        .form-group {
            position: relative;

            .product-search {
                border: #0067cd solid 1px;
                height: 3em;
                width: 100%;
                background: #b6d9ff;
                color: black;
                border-radius: 0;
                padding-left: .75em;

                &::placeholder {
                    color: #0095ff;
                }
            }

            .search {
                position: absolute;
                bottom: 0.25em;
                right: 1em;
                font-size: 1.5em;
                color: white;
            }
        }

        .cart-container {
            text-align: left;
            padding-top: .25em;
            font-size: 1.5em;
        }
    }
</style>
