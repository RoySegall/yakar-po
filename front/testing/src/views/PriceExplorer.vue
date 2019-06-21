<template>
  <div class="row product-page">
    <div class="col-12">

      <PagesHeader></PagesHeader>

      <section class="row" v-if="Object.keys(product).length === 0">
        <div class="col-12 text-center">
          <i class="fal fa-spinner fa-spin h1 "></i>
        </div>
      </section>

      <section class="row" v-if="Object.keys(product).length !== 0">
        asdasd
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
    this.series = this.product.prices.yearAverage;
  }

  public data() {
    return {
      product: {},
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
      series: []
    };
  }
}
</script>

<style lang="scss">
</style>
