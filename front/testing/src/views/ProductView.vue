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

        <div class="col-2">
          <img v-bind:src="product.image" class="img-fluid" />
        </div>

        <div class="col-10">

          <div class="row">
            <div class="col-9"><h1>{{ product.name }}</h1></div>
            <div class="col-3 text-right"><span class="h2">Average price: {{product.average_price}}</span></div>
          </div>

          <hr />

          <div class="row">
            <div class="col-12">
              <p class="h3"><i class="fas fa-arrow-up text-danger"></i> Max price {{product.hi_price.amount}} from {{product.hi_price.location}}</p>
              <p class="h3"><i class="fas fa-arrow-down text-success"></i> Low price {{product.low_price.amount}} from {{product.low_price.location}}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="row samples" v-if="product.samples !== null">
        <div class="col-12">
          <h2>Recent samples from other places</h2>

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">brand</th>
                <th scope="col">Branch</th>
                <th scope="col">Price</th>
                <th scope="col">Sampled at</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="sample in product.samples">
                <td>{{sample.brand}}</td>
                <td>{{sample.branch}}</td>
                <td>{{sample.price}}</td>
                <td>{{sample.sampled_at}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="row averages-explorer">
        <div class="col-12">
          <div class="row">
            <div class="col-8">
              <h3>Average price over the years</h3>
            </div>

            <div class="col-4">
              asad
            </div>
          </div>

          <hr />
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


@Component({
  components: {PagesHeader, BreadCrumbs}
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
      product: {}
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

    .samples {
      padding-top: 2em;

      table {
        margin-top: 1.5em;
      }
    }

    .averages-explorer {
      padding-top: 2em;
    }
  }
</style>
