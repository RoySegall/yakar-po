<template>
    <section class="row averages-explorer">
        <div class="col-12">
            <div class="row">
                <div class="col-6">
                    <h3>Average price over the years</h3>
                </div>

                <div class="col-3 date-picker">
                    <label for="from-date" class="col-2 col-form-label">From</label>
                    <input class="form-control" type="datetime-local" value="2018-07-22T23:00:00" id="from-date" />
                </div>
                <div class="col-3 date-picker">
                    <label for="to-date" class="col-2 col-form-label">To</label>
                    <input class="form-control" type="datetime-local" value="2018-07-21T23:00:00" id="to-date"/>
                </div>
            </div>

            <hr />
            <div class="col-12" v-if="product.prices !== undefined">
                <VueApexCharts v-if="product.prices.yearAverage !== undefined" type=area height=350 :options="chartOptions" :series=product.prices.yearAverage></VueApexCharts>
            </div>
            <div class="col-12 h5">
                If you're looking for more detailed prices you can go to the
                <router-link :to="{ name: 'priceExplorer', params: { id: this.$route.params.id } }">
                    Price explorer
                </router-link>.
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";
    import VueApexCharts from 'vue-apexcharts'

    @Component({
        components: {VueApexCharts}
    })
    export default class ProductAverageExplorer extends Vue {
        @Prop(Object) readonly product!: object;

        public data() {
            return {
                chartOptions: {
                    chart: {
                        height: 380,
                        width: "100%",
                        type: "area",
                        animations: {
                            initialAnimation: {
                                enabled: false
                            }
                        }
                    },
                    xaxis: {
                        type: 'datetime'
                    }
                },
                series: {},
            }
        }
    }

</script>

<style lang="scss">

</style>
