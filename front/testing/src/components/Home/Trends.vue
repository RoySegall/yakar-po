<template>
    <section class="trending">
        <h2 class="text-left">Trending</h2>
        <hr />

        <table class="table table-bordered table-striped">
            <thead>
            <tr>
                <th scope="col">Product</th>
                <th scope="col">Number of searches</th>
                <th scope="col">Trending since</th>
                <th scope="col">Average price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="trend in trends" v-bind:key="trend.id">
                <td>{{ trend["product"] }}</td>
                <td>{{ trend["number_of_searches"] }}</td>
                <td>{{ trend["trend_since"] }}</td>
                <td>{{ trend["average_price"] }}</td>
            </tr>

            <tr v-if="Object.keys(trends).length === 0">
                <td colspan="4" class="text-center loading"><i class="fal fa-spinner fa-spin"></i></td>
            </tr>

            <tr>
                <td colspan="4" class="text-center load-more">
                    <i class="fal fa-layer-plus"></i> Load more
                </td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class SearchResultItem extends Vue {
        @Prop(Object) readonly trends!: any;
    }

</script>

<style lang="scss">
    .trends {
        padding-top: 1.5em;

        .trending {
            padding-top: 5em;
            text-align: left;

            hr {
                width: 100%;
                background: #0095ff;
            }

            table {
                .load-more, .loading {
                    font-size: 1.5em;
                }
            }
        }
    }
</style>
