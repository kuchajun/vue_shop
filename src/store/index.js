import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../assets/js/config.js'


Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    showoption:false,
    addcar:{
				add_1:false,
				add_2:false,
				add_3:false
		},
		//不同规格商品价格不一样
		p_list:[
				{name:"规格1",price:'100'},
				{name:"规格2",price:'98'},
				{name:"规格3",price:'102'},
				{name:"规格4",price:'150'},
				{name:"规格5",price:'170'}
		],
		//当前选中货品的规格
		p_guige:0,
		//初始数量
		goods_num:1,
		//购物车内容
		shopcart:[
				{name:"【澳贝】青色恐龙创意工具车",h_num:'283717AS',price:'256',num:1,guige:'规格1',pic:'../../../static/img/daishuohuo.png',state:false},
				{name:"【澳贝】小车车",h_num:'125451BA',price:'300',num:1,guige:'规格2',pic:'../../../static/img/daishuohuo.png',state:false},
				{name:"【澳贝】大车车",h_num:'234541QW',price:'50',num:1,guige:'规格1',pic:'../../../static/img/daishuohuo.png',state:false},
		],
		//结算
		total:0,
		//全选状态
		all_check:false,
		//选中数量
		check_num:0,
		//编辑状态
		edit_s:false,
		//购物车规格编辑显示
		guige_s:false,
		//当前要改变货品的下标
		now_guige_num:0,
		//订单分类
		list_class:[
			{path:"/list/0",name:"全部"},
			{path:"/list/1",name:"代付款"},
			{path:"/list/2",name:"待发货"},
			{path:"/list/3",name:"待收货"},
			{path:"/list/4",name:"待评价"}
		],
		order_list:[]
		
  },
  actions: {
    CHANGE_FLAG: function ({ commit }) {
    
        commit('SET_FLAG')
      
    },
    CHANGE_GUIGE:function({commit},index){
    		commit('SET_GUIGE',{guige:index})
    		//console.log(index)
    },
    //数量改变
    CHANGE_NUM:function({commit},num){
    		if(num){
    			commit('ADD_NUM')
    		}else{
    			commit('SUBTRACT_NUM')
    		}
    },
    //改变选中状态
    CHANGE_CHECK:function({commit},index){
    		commit('SET_CHECK',index)
    		commit('SET_TOTAL')
    		commit('SET_CHECK_NUM')
    },
    //全选
    CHANGE_ALL_CHECK:function({commit}){
    		commit('SET_ALL_CHECK')
    		commit('SET_TOTAL')
    		commit('SET_CHECK_NUM')
    },
    //改变编辑状态
    CHANGE_EDIT:function({commit}){
    		commit('SET_EDIT')
    },
    //购物车数量加减
    CHANGE_NUM_S:function({commit},obj){
    		if(obj.s){
    			console.log("加")
    			commit('ADD_NUM_S',obj.index)
    		}else{
    			console.log("减")
    			commit('SUBTRACT_NUM_S',obj.index)
    		}
    		commit('SET_TOTAL')
    },
    //购物车删除元素
    DEL_ITEM:function({commit},index){
    		commit("SET_ITEM",index)
    		commit('SET_CHECK_NUM')
    },
    //规格的显示隐藏及选中货品的下标
    CHANGE_GUIGE_S:function({commit},index){
    		commit('SET_GUIGE_S',index)
    },
    //改变当前选中货品的规格
    CHANGE_GUIGE_B:function({commit}){
    		commit('SET_GUIGE_B')
    },
    //获取订单列表
    GET_ORDER_LIST:function({commit}){
    		commit('SET_ORDER_LIST')
    }
    
    
  },
  mutations: {
    SET_FLAG: (state) => {
      state.showoption = !state.showoption
    },
    SET_GUIGE: (state,{guige}) => {
      state.p_guige=guige
      //console.log(state.p_guige)
    },
    //数量加
    ADD_NUM:(state) =>{
    	if(state.goods_num<20){
    		state.goods_num++
    	}
    },
    //数量减
    SUBTRACT_NUM: (state) =>{
    	if(state.goods_num>1){
    		state.goods_num--
    	}
    },
    //改变选中状态
    SET_CHECK:(state,index)=>{
    	const check_state=state.shopcart[index].state;
    	
    	console.log(check_state)
    	if(check_state){
    		state.shopcart[index].state=false;
    		state.all_check=false;
    	}else{
    		state.shopcart[index].state=true;
    	}
   
    	
    },
    //结算
    SET_TOTAL: (state) =>{
    	state.total=0
    	for(var i=0;i<state.shopcart.length;i++){
    		if(state.shopcart[i].state){
    			state.total+=state.shopcart[i].price*state.shopcart[i].num
    		}
    	}
    	console.log(state.total)
    },
    //全选
    SET_ALL_CHECK: (state) =>{
    	state.all_check=!state.all_check;
    	
    	if(state.all_check){
    		

    		for(var i=0;i<state.shopcart.length;i++){
	    		state.shopcart[i].state=true;
	    	}
    	}else{
    		

    		for(var i=0;i<state.shopcart.length;i++){
	    		state.shopcart[i].state=false;
	    	}
    	}
    },
    //改变编辑状态
    SET_EDIT: (state) =>{
    		state.edit_s=!state.edit_s
    },
    //购物车减
    ADD_NUM_S: (state,index) =>{
    	console.log(index)
    	if(state.shopcart[index].num<20){
    		state.shopcart[index].num++
    	}
    },
    //购物车加
    SUBTRACT_NUM_S: (state,index) =>{
    	console.log(index)
    	if(state.shopcart[index].num>1){
    		state.shopcart[index].num--
    	}
    },
    //删除元素
    SET_ITEM: (state,index) =>{
    	console.log("删除元素"+index)
    	state.shopcart.splice(index, 1);
    	
    },
    //选中元素的数量
    SET_CHECK_NUM: (state) =>{
    	//循环获取选中元素数量
    	state.check_num=0
    	for(var i=0;i<state.shopcart.length;i++){
    		if(state.shopcart[i].state){
    			state.check_num++
    		}
    	}
    	//改变全选反选状态
    	if(state.shopcart.length==state.check_num){
    		state.all_check=true
    	}else{
    		state.all_check=false
    	}
    },
    //规格的显示及当前选中货品的下标
    SET_GUIGE_S:(state,index)=>{
    	state.guige_s=!state.guige_s;
    	state.now_guige_num=index;
    },
    //改变选中货品的规格
    SET_GUIGE_B:(state) =>{
    	state.shopcart[state.now_guige_num].guige=state.p_list[state.p_guige].name;
    	state.guige_s=false;
    },
    //获取订单列表
    SET_ORDER_LIST:(state) =>{
    	axios({
					  url: '/static/json/order.json'
					})
					.then((response) => {
						console.log(response.data)
						if(response.data){
							state.order_list=response.data
						}
					})
    }
  },
  getters: {
    openProjects: state => {
      return state.projects.filter(project => !project.completed)
    }
  }
})
export default store