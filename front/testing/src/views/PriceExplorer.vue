<template>
  <div class="row price-explorer">
    <div class="col-12">

      <PagesHeader></PagesHeader>

      <section class="row" v-if="Object.keys(product).length === 0">
        <div class="col-12 text-center">
          <i class="fal fa-spinner fa-spin h1 "></i>
        </div>
      </section>

      <ProductHeader v-if="Object.keys(product).length !== 0" :product=product :inPriceExplorer=true></ProductHeader>

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
import ProductHeader from "@/components/Product/ProductHeader";
import VueApexCharts from 'vue-apexcharts'


@Component({
  components: {PagesHeader, BreadCrumbs, VueApexCharts, ProductHeader}
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
