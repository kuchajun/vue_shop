<template>
	<div class="list">
		<header>
			<h2>我的订单</h2>
			<div>
				<i><img src="../../assets/img/homeSearch.png"/></i>
				<i><img src="../../assets/img/msg.png"/></i>
			</div>
		</header>
		<ul class="nav">
			<li v-for="(item,index) in list_class">
				<router-link :class='params_l.id==index?"a_active":""' :to='{path:item.path,query:{id:index}}'>{{item.name}}</router-link>
			</li>
		</ul>
		<ul class="order_list">
			<li class="list_li" v-for="(item,index) in order_list" :key="index">
				<item :item="item"></item>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
import item from './item.vue'
import router from 'vue-router'
export default {
	
	components:{
		item
	},
	computed:{
		 ...mapState([
		    'list_class',
		    'order_list'
		]),
		params_l:function(){
			return this.$route.query
		}
	},
	mounted(){
		console.log(this.params_l)
		this.$store.dispatch("GET_ORDER_LIST",this.params_l)
	},
	watch:{
		"params_l"(){
			this.$store.dispatch("GET_ORDER_LIST",this.params_l)
		}
	},
}
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
.list{
	width: 100%;
	min-height: 100%;
}	
.order_list:before{
	width: 100%;
	height: u(154);
	content: " ";
	display: block;
}
.order_list:after {
	width: 100%;
	height: u(120);
	content: " ";
	display: block;
}
header{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: u(89);
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding-left:u(107);
	background: #fff;
	h2{
		flex: 1;
		font-size: u(34);
		color: #010101;
		font-weight: 100;
	}
	div{
		width: u(107);
		box-sizing: border-box;
		padding-right: u(17);
		display: flex;
		align-items: center;
		justify-content: space-between;
		i:nth-of-type(1){
			img{
				width: u(30);
				height: u(29);
			}
		}
		i:nth-of-type(2){
			img{
				width: u(36);
				height: u(35);
			}
		}
	}
}
.nav{
	position: fixed;
	top: u(89);
	left: 0;
	width: 100%;
	height: u(65);
	display: flex;
	background: #fff;
	box-sizing: border-box;
	border-top:1px solid #e5e5e5;
	li{
		flex: 1;
		height: 100%;
		a{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 3px solid transparent;
			font-size: u(22);
			color: #333333;
			box-sizing: border-box;
		}
		.a_active{
			color: #ff3259;
			border-color: #ff3259;
		}
		
	}
}
.order_list{
	width: 100%;
	.list_li{
		width: 100%;
		background: #fff;
		margin-top: u(22);
	}
}
</style>