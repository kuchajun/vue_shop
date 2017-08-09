<template>
	<div class="shopcart">
		<!--头部-->
		<header>
			<h2>购物车</h2>
			<span>编辑</span>
		</header>
		<div class="zanwei">
			
		</div>
		<div class="item">
			<item :item='item' :index='index' v-for="(item,index) in shopcart" :key="index"></item>
		</div>
		<div class="handle">
			<div class="check">
				<i></i>
				<span>全选</span>
			</div>
			<div class="operation">
				<i>合计：</i>
				<span>￥2500.00</span>
				<span>结算(0)</span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import item from './item.vue';
	import { mapState } from 'vuex';
	export default{
		components:{
			item
		},
		computed:mapState([
			'shopcart'
		])
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
</style>