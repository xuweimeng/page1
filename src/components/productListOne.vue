<template>
  <div id="product-list-one">
    <h2>product-list-one</h2>
    <ul>
      <li v-for="(item, index) in saleProducts" :key="index">
        <span class="name">{{item.name}}</span>
        <span class="price">{{item.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(6)">点击改变</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
    // saleProducts() {
    //   return this.$store.getters.saleProducts
    // },
    ...mapGetters([
      "saleProducts"
    ])
  },
  methods: {
    reducePrice(amount) {
      // this.$store.commit('reducePrice')
      this.$store.dispatch('reducePrice',amount)
    },
    // ...mapActions([
    //   "reducePrice"
    // ])
  }
}
</script>

<style>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>