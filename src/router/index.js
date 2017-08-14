import Vue from 'vue'
import Router from 'vue-router'
import mains from '@/components/mains'
import login from '@/components/login'
import home from '@/components/home/index'
import mine from '@/components/mine/index'
import classify from '@/components/home/classify'
import goods from '@/components/goods/index'
import shopcart from '@/components/shopcart/index'
import list from '@/components/list/index'
import bargain from '@/components/bargain/index'
Vue.use(Router)

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
		path:'/bargain',
		name:'bargain',
		component:bargain
	},
    {
    	path:'*',
    	name:'404',
    	component:err
    }
    
  ]
})
