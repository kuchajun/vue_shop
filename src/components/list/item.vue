<template>
	<div class="item">
		<div class="head">
			<i class="date">{{item.time}}</i>
			<h3>订单号：{{item.order_num}}</h3>
			<i class="state">{{item.state_name}}</i>
		</div>
		<ul class="item_ul">
			<li class="item_li" v-for="(items,index) in item.list">
				<items :items="items"></items>
			</li>
		</ul>
		<div class="info">
			<p>共{{item.list.length}}件商品</p>
			<p>
				<span v-if="item.state==1">需付款:</span>
				<span v-else>实付款:</span>
				<span class="total">￥{{total}}</span>
			</p>
		</div>
		<div class="info_b">
			<span v-if="item.state==1||item.state==2">取消订单</span>
			<span v-if="item.state==1">去支付</span>
			<span v-if="item.state==3">物流信息</span>
			<span v-if="item.state==3">确认收货</span>
			<span v-if="item.state==2">发货提醒</span>
			<span v-if="item.state==4">退换货</span>
			<span v-if="item.state==4">晒单评价</span>
		</div>
	</div>
</template>
<script type="text/javascript">
import items from "./items.vue"
export default{
	props:["item"],
	components:{
		items
	},
	computed:{
		total:function(){
			var total=0;
			for(var i=0;i<this.item.list.length;i++){
				console.log(this.item.list[i].number)
				total+=this.item.list[i].number*this.item.list[i].price
			}
			//console.log(total)
			return total
		}
	}
}
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
.item{
	width: 100%;
	
}
.head{
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: u(84);
	align-items: center;
	box-sizing: border-box;
	padding: 0 u(18);
	.date{
		font-size: u(20);
		color: #242424;
	}
	h3{
		font-size: u(20);
		color: #2d2d2d;
		font-weight: normal;
	}
	.state{
		font-size: u(22);
		color: #ff4359;
	}
}
.item_ul{
	width: 100%;
	background: #f8f8f8;
	.item_li{
		width: 100%;
		border-bottom: 1px solid #e5e5e5;
	}
	.item_li:nth-last-of-type(1){
		border: none;
	}
}	
.info{
	width: 100%;
	height: u(55);
	box-sizing: border-box;
	padding: 0 u(18);
	display: flex;
	align-items: center;
	border-bottom: 1px solid #e5e5e5;
	justify-content: flex-end;
	font-size: u(20);
	color: #242424;
}
p:nth-of-type(2){
	margin-left: u(20);
	.total{
		color: #ff4359;
	}
}
.info_b{
	box-sizing: border-box;
	padding:0 u(18);
	width: 100%;
	height: u(54);
	display: flex;
	align-items: center;
	justify-content: flex-end;
	span{
		height: 36px;
		box-sizing: border-box;
		padding: 0 u(12);
		border: 1px solid #ff3259;
		display: flex;
		align-items: center;
		color: #ff3259;
		border-radius: 3px;
		font-size: u(20);
		color: #ff4359;
		margin-left: u(20);
	}
}
</style>