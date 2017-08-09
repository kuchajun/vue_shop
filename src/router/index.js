import Vue from 'vue'
import Router from 'vue-router'
import mains from '@/components/mains'
import login from '@/components/login'
import home from '@/components/home/index'
import list from '@/components/list'
import mine from '@/components/mine/index'
import classify from '@/components/home/classify'
import goods from '@/components/goods/index'
import shopcart from '@/components/shopcart/index'
Vue.use(Router)

//const home={
//	template:`
//		<div>
//			首页
//		</div>
//	`
//}
//const list={
//	template:`
//		<div>
//			列表页
//		</div>
//	`
//}
//const mine={
//	template:`
//		<div>
//			我的
//		</div>
//	`
//}
//const shopcar={
//	template:`
//		<div>
//			购物车
//		</div>
//	`
//}

const err={
	template:`
		<div>
			找不到网页
		</div>
	`
}
export default new Router({
	mode:'history',
	base:__dirname,
  routes: [
    {
      path: '/',
      component: mains,
      children:[
      	{path:'',redirect:'home'},
      	{path:'home',component:home},
      	{path:'shopcar',component:shopcart},
      	{path:'list',component:list},
      	{path:'mine',component:mine}
      ]
    },
    {
    	path:'/classify/:id',
    	name:'classify',
    	component:classify
    },
    {
    	path:'/goods',
    	name:'goods',
    	component:goods
    },
    {
    	path:'/login',
    	name:'login',
    	component:login
    },
    {
    	path:'*',
    	name:'404',
    	component:err
    }
    
  ]
})
