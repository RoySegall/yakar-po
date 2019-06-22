<template>
    <section class="row">
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
</style>
