<template>
    <section class="row product-header">
        <div class="col-2">
            <img v-bind:src="product.image" class="img-fluid" />
        </div>

        <div class="col-10">

            <div class="row" v-if="!inPriceExplorer">
                <div class="col-9"><h1>{{ product.name }}</h1></div>
                <div class="col-3 text-right"><span class="h2">Average price: {{product.average_price}}</span></div>
            </div>

            <div class="row" v-if="inPriceExplorer">
                <div class="col-6 text-left title">
                    <h1>Price explorer for <router-link :to="{ name: 'productView', params: { id: this.$route.params.id } }">
                        {{ product.name }}
                    </router-link></h1>
                </div>
                <div class="col-6 text-right dates-filter">
                    <div class="row">
                        <div class="col-6 date-picker">
                            <label for="from-date" class="col-2 col-form-label">From</label>
                            <input class="form-control" type="datetime-local" value="2018-07-22T23:00:00" id="from-date" />
                        </div>
                        <div class="col-6 date-picker">
                            <label for="to-date" class="col-2 col-form-label">To</label>
                            <input class="form-control" type="datetime-local" value="2018-07-21T23:00:00" id="to-date"/>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div class="row" v-if="!inPriceExplorer">
                <div class="col-12">
                    <p class="h3"><i class="fas fa-arrow-up text-danger"></i> Max price {{product.hi_price.amount}} from {{product.hi_price.location}}</p>
                    <p class="h3"><i class="fas fa-arrow-down text-success"></i> Low price {{product.low_price.amount}} from {{product.low_price.location}}</p>
                </div>
            </div>

            <div class="row facts" v-if="inPriceExplorer">
                <p v-if="product.facts.length">
                    We noticed some facintating facts about <b>{{ product.name }}</b>:
                </p>

                <ul v-if="product.facts.length">
                    <li v-for="fact in product.facts">{{fact}}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class ProductHeader extends Vue {
        @Prop(Object) readonly product!: object;
        @Prop(Boolean) readonly inPriceExplorer!: boolean;
    }

</script>

<style lang="scss">
    .product-header {
        .facts {
            text-align: left;

            p {
                width: 100%;
            }
        }
    }
</style>
