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
            placeholder="Search for product"
            v-model="productSearch"
          />
          <div class="search"><i class="fal fa-search"></i></div>
        </div>

        <i class="fas fa-spinner fa-spin" v-if="searching"></i>

        <div class="search-results" v-if="Object.keys(items).length !== 0">
          <h3>Search results</h3>

          <div class="row">
            <div class="col-4" v-for="item in items" v-bind:key="item.id">
              <div class="row">
                <div class="col-4">
                  <img class="img-fluid" v-bind:src="item['image']" />
                </div>
                <div class="col-8">
                  <span
                    ><b
                      ><router-link
                        :to="{ name: 'productView', params: { id: item.id } }"
                        >{{ item["name"] }}</router-link
                      ></b
                    ></span
                  >
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
      </section>

      <section class="trending">
        <h2>Trending</h2>
        <hr />

        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Number of searches</th>
              <th scope="col">Trending since</th>
              <th scope="col">Average price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="trend in trends" v-bind:key="trend.id">
              <th>{{ trend["product"] }}</th>
              <td>{{ trend["number_of_searches"] }}</td>
              <td>{{ trend["trend_since"] }}</td>
              <td>{{ trend["average_price"] }}</td>
            </tr>
            <tr>
              <td colspan="4" class="text-center load-more">
                <i class="fal fa-layer-plus"></i> Load more
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import trends from "@/mockups/trends.js";
import products from "@/mockups/products.js";

@Component({
  components: {}
})
export default class Home extends Vue {
  data() {
    return {
      trends: trends,
      productSearch: "",
      searching: false,
      items: {}
    };
  }

  @Watch("productSearch")
  public pingSearch() {
    this.searching = true;
    this.items = {};

    setTimeout(() => {
      this.items = products;
      this.searching = false;
    }, 1000);
  }
}
</script>

<style lang="scss">
.header {
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

  .search-results {
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

.trending {
  padding-top: 5em;
  text-align: left;

  hr {
    width: 100%;
    background: #0095ff;
  }

  table {
    .load-more {
      font-size: 1.5em;
    }
  }
}
</style>
