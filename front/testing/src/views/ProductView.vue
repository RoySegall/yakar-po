<template>
  <div class="row product-page">
    <div class="col-12">

      <PagesHeader></PagesHeader>

      <section class="row" v-if="Object.keys(product).length === 0">
        <div class="col-12 text-center">
          <i class="fal fa-spinner fa-spin h1 "></i>
        </div>
      </section>

      <ProductHeader v-if="Object.keys(product).length !== 0" :product=product :inPriceExplorer=false></ProductHeader>
      <ProductSample v-if="product.samples !== null" :product=product class="product-samples"></ProductSample>
      <ProductAverageExplorer :product="product"></ProductAverageExplorer>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import PagesHeader from "@/components/PagesHeader";
import BreadCrumbs from "@/components/BreadCrumbs";
import ProductHeader from "@/components/Product/ProductHeader";
import ProductSample from "@/components/Product/ProductSample";
import ProductAverageExplorer from "@/components/Product/ProductAverageExplorer";

import ProductsService from "@/services/ProductsService";


@Component({
  components: {PagesHeader, BreadCrumbs, ProductHeader, ProductSample, ProductAverageExplorer}
})
export default class ProductView extends Vue {

  public ProductsService: ProductsService;

  public created() {
    this.ProductsService = new ProductsService();
  }

  public async mounted() {
    this.product = await this.ProductsService.getProductById(this.$route.params.id);
  }

  public data() {
    return {
      product: {},
    };
  }
}
</script>

<style lang="scss">
  .product-page {
    text-align: left;

    .pages-header {
      margin-bottom: 1em;
    }

    .averages-explorer {
      padding-top: 2em;

      .date-picker {
        text-align: right;

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
