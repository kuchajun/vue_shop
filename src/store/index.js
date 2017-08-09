import Vue from 'vue'
import Vuex from 'vuex'
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
				{name:"【澳贝】青色恐龙创意工具车",h_num:'283717AS',price:'256',num:1,guige:'规格1',pic:'../../../static/img/daishuohuo.png'},
				{name:"【澳贝】小车车",h_num:'125451BA',price:'300',num:1,guige:'规格2',pic:'../../../static/img/daishuohuo.png'},
				{name:"【澳贝】大车车",h_num:'234541QW',price:'50',num:1,guige:'规格1',pic:'../../../static/img/daishuohuo.png'},
		]
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
    		commit()
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
    //
    SET_CHECK:(state)=>{
    	
    }
  },
  getters: {
    openProjects: state => {
      return state.projects.filter(project => !project.completed)
    }
  }
})
export default store