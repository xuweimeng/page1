<template>
  <div class="count-one">
    <h2>第一个count</h2>
    <button @click="addCount">点击改变</button>
    <p>span=:{{incrementCount}}</p>
    <p>mapState箭头函数:{{count1}}</p>
    <p>mapState字符串:{{count2}}</p>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">{{todo.done}}</li>
    </ul>
    <p>其他getter：{{doneTodoCount}}</p>
    <p>筛选vuex里的todos{{todosGetById}}</p>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import Vue from 'vue'
export default {
  data() {
    return {
      val: 1,
    }
  },
  computed: {
    /**
     * State
     */
    incrementCount() {
      return this.$store.state.count;
    },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      count1: state=>state.count,
      count2: 'count',
      
    }),
    /**
     * Getters
     */
    // todos() {
    //   return this.$store.getters.doneTodos
    // },
    // todosLength() {
    //   return this.$store.getters.doneTodoCount
    // },
    todosGetById() {
      return this.$store.getters.getTodoId(this.val)
    },
    ...mapGetters([
    'doneTodos',
    'doneTodoCount'
     
    ])

  },
  mounted() {
    console.log(this.count1)
    console.log(this.todosGetById)
  },
  methods: {
    addCount() {
      // Vue.set(this.$store.state.objSet,'num',123)
      // this.$store.commit('increment',{
      //   amount: 10
      // })
      this.$store.dispatch('increment', 10)
    }
  }
}
</script>

<style>

</style>

