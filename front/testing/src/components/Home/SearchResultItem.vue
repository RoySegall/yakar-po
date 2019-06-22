<template>
    <div class="search-results">
        <div v-if="mode === 'innerPage' && this.$store.getters.isSearchProgress" class="inner-search-results">
            <div v-if="getSearch()" class="text-center"><i class="fas fa-spinner fa-spin"></i></div>

            <div v-if="getSearchResults().length !== 0">
                <div class="row">
                    <div class="h4 col-9">Products which match your search</div>
                    <div class="col-3 close"><i class="h4 fas fa-times" @click="closeSearch()"></i></div>
                </div>

                <hr />
                <ul>
                    <li v-for="item in getSearchResults()">
                        <div class="row">
                            <div class="col-1"><img class="img-fluid" v-bind:src="item['image']" /></div>
                            <div class="col-9">
                                <span class="h5">{{item.name}}</span> - Average cost: {{ item["average_price"] }}

                                <ul>
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
                    </li>
                </ul>
            </div>
        </div>

        <div v-if="mode === 'frontPage'">
            <div v-if="getSearch()"><i class="fas fa-spinner fa-spin"></i></div>

            <div class="results" v-if="getSearchResults().length !== 0">

                <h3>Search results</h3>

                <div class="row">
                    <div class="col-4" v-for="item in getSearchResults()" v-bind:key="item.id">
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
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class SearchResultItem extends Vue {
        @Prop(String) readonly mode!: string;

        public getSearchResults() {
            return this.$store.state.search.searchResults;
        }

        public getSearch() {
            return this.$store.state.search.searching;
        }

        public getDisplayInnerPage() {
            return this.$store.getters.isSearchProgress;
        }

        public closeSearch() {
            this.$store.commit('resetSearchResults');
        }
    }

</script>

<style lang="scss">
    .search-results {
        .fa-spinner {
            font-size: 3em;
            text-align: center;
            margin: 0 auto;
        }

        hr {
            margin-top: 0;
        }

        .close {
            text-align: right;
            padding-right: 1.5em;
            color: red;
            cursor: pointer;
        }

        .inner-search-results {
            z-index: 100;
            border: #0067cd solid 1px;
            width: 100%;
            color: black;
            padding-left: .75em;
            border-top: none;
            border-radius: 0 0 .25em .25em;
            position: absolute;
            background: white;
            padding-top: .5em;
            padding-bottom: .5em;

            ul {
                padding: 0;
                margin: 0;

                li {
                    list-style: none;
                    padding-bottom: .5em;
                }
            }
        }
    }


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
