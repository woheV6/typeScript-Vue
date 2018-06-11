<template>
  <div class="hello">
    <h1 @click="sayHello">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  // @Component 修饰符注明了此类为一个 Vue 组件
  @Component({
    name:'hello'
  })
  export default class Hello extends Vue {
    // 初始数据可以直接声明为实例的属性
    msg: string ='这是一个vue+typescript项目'
    // 组件方法也可以直接声明为实例的方法
    sayHello ():void {
      console.log(this.msg)
    }
  }
</script>

