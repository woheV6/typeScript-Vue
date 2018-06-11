import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

import HelloWorld  from '@/components/HelloWorld.vue'
// ... 其他组件
Vue.use(Router)
const routes: RouteConfig[] = [
  {
    path: '/',
    component:HelloWorld
  }
  // ...其他 routers
]
export default new Router({
  routes
})