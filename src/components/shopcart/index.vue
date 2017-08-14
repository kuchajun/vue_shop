<template>
	<div class="shopcart">
		<!--头部-->
		<header>
			<h2>购物车</h2>
			<span @click='change_edit'>{{edit_s?"完成":"编辑"}}</span>
		</header>
		<div class="zanwei">
			
		</div>
		<div class="item">
			<item :edit_s='edit_s'  :item='item' :index='index' v-for="(item,index) in shopcart" :key="index"></item>
		</div>
		<div class="handle">
			<div class="check">
				<i :class="all_check?'iactive':''" @click='allcheck'></i>
				<span>全选</span>
			</div>
			<div class="operation">
				<i>合计：</i>
				<span>￥{{total}}</span>
				<span>结算({{check_num}})</span>
			</div>
		</div>
		<transition name='fade'>
			<guige v-if='guige_s'></guige>
		</transition>
			
	</div>
</template>
<script type="text/javascript">
	import item from './item.vue';
	import { mapState } from 'vuex';
	import guige from "./guige.vue";
	export default{
		data(){
			return {
				edit_s:false,
			}
		},
		components:{
			item,
			guige
		},
		computed:mapState([
			'shopcart',
			'total',
			'check_num',
			'guige_s',
			'all_check'
		]),
		methods:{
			allcheck:function(){
				//console.log(233)
				this.$store.dispatch('CHANGE_ALL_CHECK')
			},
			//改变编辑状态
			change_edit:function(){
				this.edit_s=!this.edit_s
			}
		}
	}
	
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
.shopcart{
	width: 100%;
}
.zanwei{
	width: 100%;
	height: u(89);
}
header{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height:u(89);
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding: 0 u(17);
	background: #fff;
	z-index: 1;
	padding-left:u(70);
	span{
		width: u(70);
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-size: u(28);
		color: #333333;
	}
	h2{
		height: 100%;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size:u(32);
		color: #272729;
		font-weight: normal;
	}
	
}
.item{
	margin-top: u(10);
}
.handle{
	width: 100%;
	height: u(98);
	position:fixed;
	bottom:u(100) ;
	left:0;
	background: #fff;
	box-sizing: border-box;
	padding-left: u(17);
	display: flex;
	justify-content: space-between;
	.check{
		width:u(120);
		height:100% ;
		display:flex;
		align-items:center;
		i{
			width: u(24);
			height: u(24);
			box-sizing: border-box;
			border: 1px solid #e5e5e5;
			border-radius: u(12);
			
		}
		.iactive{
			background: url(../../assets/img/shopok.png) no-repeat left top;
			background-size:u(24) u(24);
			border: none;
		}
		span{
			font-size: u(30);
			color: #333333;
			margin-left: u(10);
		}
	}
	.operation{
		height: 100%;
		display: flex;
		align-items: center;
		i{
			font-size: u(24);
			color: #000000;
		}
		
		span:nth-of-type(1){
			font-size: u(24);
			color: #ff4350;
			padding: 0 u(50) 0 u(20);
		}
		span:nth-of-type(2){
			width: u(180);
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #ff4350;
			color: #fff;
			font-size: u(30);
			color: #f1f1f1;
		}
	}
}
.fade-enter-active{
	-webkit-animation:fadeInRightBig 1s .2s ease both;
	-moz-animation:fadeInRightBig 1s .2s ease both;
}
.fade-leave-active{
	-webkit-animation:fadeInRightBig_b 1s .2s ease both;
	-moz-animation:fadeInRightBig_b 1s .2s ease both;
}
/*.fade-enter,.fade-leave-to{
	transform:translateX(u(640))
}
.fade-enter-to,.fade-leave{
	transform:translateX(0)
}*/

@-webkit-keyframes fadeInRightBig{
0%{
-webkit-transform:translateX(u(0))}	

100%{
	
-webkit-transform:translateX(0)}
}
@-moz-keyframes fadeInRightBig{
0%{
	
-moz-transform:translateX(u(640))}
100%{
	
-moz-transform:translateX(0)}
}

@-webkit-keyframes fadeInRightBig_b{
0%{
	
-webkit-transform:translateX(u(0))}
100%{
	
-webkit-transform:translateX(u(640))}
}
@-moz-keyframes fadeInRightBig_b{
0%{
	
-moz-transform:translateX(0)}
100%{
	
-moz-transform:translateX(u(640))}
}
</style>