<template>
    <section class="row samples" >
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
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class ProductSample extends Vue {
        @Prop(Object) readonly product!: object;
    }

</script>

<style lang="scss">

    .product-samples {
        &.samples {
            padding-top: 2em;

            table {
                margin-top: 1.5em;
            }
        }
    }
</style>
