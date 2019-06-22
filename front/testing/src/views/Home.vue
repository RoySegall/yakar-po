<template>
  <div class="row">
    <div class="col-12">
      <PagesHeader></PagesHeader>
    </div>

    <div class="offset-2 col-8 justify-content-center">
        <SearchResultItem
                mode="frontPage"
                class="search-section">
        </SearchResultItem>
        <Trends :trends="trends" class="trends"></Trends>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import TrendsService from "@/services/TrendsService";
import PagesHeader from "@/components/PagesHeader";

import SearchResultItem from "@/components/Home/SearchResultItem"
import Trends from "@/components/Home/Trends"

@Component({
  components: {SearchResultItem, Trends, PagesHeader}
})
export default class Home extends Vue {

  public TrendsService: TrendsService;

  public created() {
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
    };
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
}
</style>
