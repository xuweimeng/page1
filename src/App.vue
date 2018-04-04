<template>
  <div id="app">
    <!-- <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <count1></count1> -->
    <!-- es6 -->
    <div class="es6">
      55
    </div>
  </div>
</template>

<script>
import productListOne from './components/productListOne'
import productListTwo from './components/productListTwo'
import count1 from './components/count1'
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  mounted() {
    this.newPromise()
  },
  methods: {
    newPromise() {
      // console.log('newPromise')
      const promise = new Promise( function(resolve,reject) {
        let aa = 2;
        if(aa == 1) {
          resolve(aa)
        }else {
          reject(aa)
        }
      })

      promise.then(function(value) {
        console.log('success='+value)
      }, function(error) {
        console.log('error='+error)
      })
      //aa
      function aa(ms) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, ms, 'done');
        })
      }
      aa(100).then((value) => {
        console.log('value='+value)
        return value
      }).then(function(value) {
        console.log('value2='+value)
      })
      
      //loadImage
      function loadImageAsync(url) {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = function() {
            resolve(image);
            console.log('444')
          };

          image.onerror = function() {
            reject(new Error('could not load image at'+ url))
             console.log('444')
          };

          image.src = url

        })
        let pic = 'https://www.baidu.com/img/fnj_96d95207b4a706738f1b8be3b41ea9f3.gif'
        loadImageAsync(pic)
      }
      //p1,p2
      const p1 = new Promise((resolve, reject)=> {
        setTimeout(()=> reject(new Error('fail')),3000)
      })
      
      const p2 = new Promise((resolve, reject) => {
        setTimeout(()=> resolve(p1), 1000)
      })

      p2
      .then(result => console.log('result='+result))
      .catch(error => console.log('error='+error))

      //someAsyncThing
      const someAsyncThing = function() {
        return new Promise(function(resolve, reject) {
          // 下面一行会报错，因为x没有声明
          resolve(x + 2);
        });
      };

      someAsyncThing()
      .catch(function(error) {
        console.log('oh no', error);
      })
      .then(function() {
        console.log('carry on');
      });

      //Set类似于数组，但成员都是唯一的

      const s = new Set();
      [2, 3,2,3].forEach(x => s.add(x))
      console.log(s)

      const set = new Set([1, 2, 3, 4, 4]);
      [...set]
      console.log(set)

      
    }
  },
  components: {
    productListOne,
    productListTwo,
    count1
  }
}
</script>

<style>
</style>
