<template>
	<div class="option">
		<div class="shade" @click="hideoption">
		</div>
		<div class="info_o">
			<dl>
				<dt><img src="../../../static/img/daishuohuo.png"/></dt>
				<dd>
					<p class="price_o">￥63.<span>00</span></p>
					<p class="num_o">货号：283717AS</p>
				</dd>
			</dl>
			<h3>选择套餐</h3>
			<div class="package">
			</div>
			<div class="handle">
				<span v-if="hand.add_1" class="yellow">加入购物车</span>
				<span v-if="hand.add_1" class="red">立即购买</span>
				<span v-if="hand.add_2" class="red">确定</span>
				<span v-if="hand.add_3" class="red">确定</span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:["hand","showoption"],
		methods:{
			hideoption:function(){
				this.showoption=false
			}
		}
	}
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
.option{
	width: 100%;
	height: 100%;
	position:fixed;
	top: 0;
	left: 0;
	.shade{
		width: 100%;
		height: 100%;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
	}
	.info_o{
		position: fixed;
		left: 0;
		bottom: 0;
		background: #fff;
		width: 100%;
	}
	dl{
		width: 100%;
		height: u(175);
		box-sizing: border-box;
		padding: 0 u(20);
		display: flex;
		align-items: center;
		dt{
			width: u(142);
			height: u(142);
			border-radius:u(10) ;
			border: 1px solid #e5e5e5;
			display: flex;
			align-items: center;
			justify-content: center;
			img{
				width: 100%;
			}
		}
		dd{
			margin-left:u(18);
			p{
				height: u(50);
				line-height: u(50);
				text-align: left;
			}
			p:nth-of-type(1){
				font-size: u(26);
				color: #ff4359;
				span{
					font-size: u(22);
				}
			}
			p:nth-of-type(2){
				font-size: u(22);
				color: #999999;
			}
		}
	}
}
.handle{
	width: 100%;
	height:u(98);
	display: flex;
	
	span{
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: u(32);
		color: #ffffff;
	}
	.red{
		background: #ff4350;
	}
	.yellow{
		background: #ffc24b;
	}
}	
</style>