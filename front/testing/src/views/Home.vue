<template>
  <div class="row">
    <div class="offset-2 col-8 justify-content-center">
      <section class="header">
        <div class="form-group">
          <input
            type="text"
            class="form-control product-search"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search for products"
            v-model="productSearch"
          />
          <div class="search"><i class="fal fa-search"></i></div>
        </div>

        <i class="fas fa-spinner fa-spin" v-if="searching"></i>
        <SearchResultItem :items="items" v-if="Object.keys(items).length !== 0" class="search-section"></SearchResultItem>
      </section>

      <Trends :trends="trends" class="trends"></Trends>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import ProductsService from "@/services/ProductsService";
import TrendsService from "@/services/TrendsService";

import SearchResultItem from "@/components/Home/SearchResultItem"
import Trends from "@/components/Home/Trends"

@Component({
  components: {SearchResultItem, Trends}
})
export default class Home extends Vue {

  public ProductsService: ProductsService;
  public TrendsService: TrendsService;

  public created() {
    this.ProductsService = new ProductsService();
    this.TrendsService = new TrendsService();
  }

  public async mounted() {
    this.trends = await this.TrendsService.getLatestTrends();
  }

  public data() {
    return {
      trends: {},
      productSearch: "",
      searching: false,
      items: {}
    };
  }

  @Watch("productSearch")
  public async pingSearch(search: string) {

    this.searching = true;
    this.items = await this.ProductsService.getProductsByString(search);
    this.searching = false;
  }
}
</script>

<style lang="scss">
.header {
  padding-top: 1em;

  .form-group {
    position: relative;

    .search {
      position: absolute;
      bottom: 0.25em;
      right: 1.5em;
      font-size: 1.5em;
      color: white;
    }

    .product-search {
      border: #0067cd solid 1px;
      height: 3em;
      width: 100%;
      background: #b6d9ff;
      color: black;

      &::placeholder {
        color: #0095ff;
      }
    }
  }

  .fa-spinner {
    font-size: 3em;
  }


}
</style>
