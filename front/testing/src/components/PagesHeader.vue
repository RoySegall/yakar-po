<template>
    <div class="row pages-header">
        <div class="col-2 text-left site-name">
            <router-link :to="{path: '/'}">Yakar po</router-link>
        </div>

        <div class="col-8 text-left">
            <input type="text" class="product-search" placeholder="Search for products"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {}
    })

    export default class PagesHeader extends Vue {
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

        .product-search {
            border: #0067cd solid 1px;
            height: 3em;
            width: 100%;
            background: #b6d9ff;
            color: black;
            border-radius: .25em;
            padding-left: .75em;

            &::placeholder {
                color: #0095ff;
            }
        }
    }

</style>
