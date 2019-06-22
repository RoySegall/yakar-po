<template>
    <div class="search-results">
        <h3>Search results</h3>

        <div class="row">
            <div class="col-4" v-for="item in items" v-bind:key="item.id">
                <div class="row">
                    <div class="col-4">
                        <img class="img-fluid" v-bind:src="item['image']" />
                    </div>
                    <div class="col-8">
                              <span>
                                <b>
                                  <router-link :to="{ name: 'productView', params: { id: item.id } }">{{ item["name"] }}</router-link>
                                </b>
                              </span>
                        <ul>
                            <li>Average cost: {{ item["average_price"] }}</li>
                            <li>
                                Hi price: {{ item["hi_price"]["amount"] }} at
                                <b>{{ item["hi_price"]["location"] }}</b>
                            </li>
                            <li>
                                Low price: {{ item["low_price"]["amount"] }} at
                                <b>{{ item["low_price"]["location"] }}</b>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class SearchResultItem extends Vue {
        @Prop(Object) readonly items!: object;
    }

</script>

<style lang="scss">
    .search-section {
        &.search-results {
            padding-top: 2em;
            text-align: left;

            ul {
                padding: 0;

                li {
                    margin: 0;
                    list-style: none;
                }
            }
        }
    }

</style>
