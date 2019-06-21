<template>
  <div class="row price-explorer">
    <div class="col-12">

      <PagesHeader></PagesHeader>

      <section class="row" v-if="Object.keys(product).length === 0">
        <div class="col-12 text-center">
          <i class="fal fa-spinner fa-spin h1 "></i>
        </div>
      </section>

      <section class="row" v-if="Object.keys(product).length !== 0">

        <div class="col-2">
          <img v-bind:src="product.image" class="img-fluid" />
        </div>

        <div class="col-10">

          <div class="row">
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
          <p class="text-left" v-if="product.facts.length">
            We noticed some facintating facts about <b>{{ product.name }}</b>:
            <br />
          </p>

          <ul class="text-left" v-if="product.facts.length">
            <li v-for="fact in product.facts">{{fact}}</li>
          </ul>
        </div>
      </section>

      <section class="row" v-if="Object.keys(product).length !== 0">
        <div class="col-12 text-left">
          <VueApexCharts type=area height=350 :options="chartOptions" :series="series"></VueApexCharts>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PagesHeader from "@/components/PagesHeader";
import BreadCrumbs from "@/components/BreadCrumbs";
import ProductsService from "@/services/ProductsService";
import VueApexCharts from 'vue-apexcharts'


@Component({
  components: {PagesHeader, BreadCrumbs, VueApexCharts}
})
export default class PriceExplorer extends Vue {

  public ProductsService: ProductsService;

  public created() {
    this.ProductsService = new ProductsService();
  }

  public async mounted() {
    this.product = await this.ProductsService.getProductById(this.$route.params.id);
    this.series = this.product.prices.priceExplorer;
  }

  public data() {
    return {
      product: {},
      chartOptions: {
        chart: {
          height: 380,
          width: "100%",
          type: "area",
        },
        xaxis: {
          type: 'datetime'
        }
      },
      series: []
    };
  }
}
</script>

<style lang="scss">
  .price-explorer {

    .pages-header {
      margin-bottom: 1em;
    }

    .title {
      padding-top: 1em;
    }

    .dates-filter {

      .date-picker {
        padding-top: 1.5em;

        label {
          display: inline-block;
        }

        input {
          display: inline-block;
          width: 60%;
        }
      }
    }

  }
</style>
