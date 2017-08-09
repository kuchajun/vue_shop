<template>
	<div class="option">
		<div class="shade" @click="hideoption">
		</div>
		<div class="info_o">
			<dl>
				<dt><img src="../../../static/img/daishuohuo.png"/></dt>
				<dd>
					<p class="price_o">￥{{p_list[p_guige].price}}.<span>00</span></p>
					<p class="num_o">货号：283717AS</p>
				</dd>
			</dl>
			<h3>选择套餐</h3>
			<div class="package">
				<ul>
					<li :class="[p_guige==index?'liactive':'']" v-for="(item,index) in p_list" @click="changeguige(index)" :key="index">{{item.name}}</li>
				</ul>
				
			</div>
			<div class="count">
				<p>购买数量</p>
				<label>
					<span :class="[goods_num==1?'p_span':'']" @click='change_num(0)'>-</span>
					<input type="number" readonly min="1" max="20" :value="goods_num"/>
					<span :class="[goods_num==20?'p_span':'']" @click='change_num(1)'>+</span>
				</label>
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
	import { mapState } from 'vuex';
	export default {
		props:["hand","showoption"],
		computed: mapState([
		    'p_list',
		    'p_guige',
		    'goods_num'
		]),
		methods:{
			hideoption:function(){
				this.$store.dispatch('CHANGE_FLAG')
			},
			//改变规格
			changeguige:function(index){
				//console.log(index)
				this.$store.dispatch('CHANGE_GUIGE',index)
			},
			//数量加减
			change_num:function(num){
				console.log(num)
				this.$store.dispatch('CHANGE_NUM',num)
			}
			
			
		}
	}
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
.zanwei{
	width: 100%;
	height:u(98);
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
	h3{
		width: 100%;
		height: u(69);
		line-height: u(69);
		text-align: left;
		box-sizing: border-box;
		padding:0 u(17);
		font-size: u(24);
		font-weight: 100;
		border-top: 1px solid #e5e5e5;
	}
	.package{
		width: 100%;
		box-sizing: border-box;
		padding: 0 u(17);
		ul{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			padding-bottom: u(50);
			li{
				height: u(34);
				line-height: u(34);
				box-sizing: border-box;
				padding: 0 u(15);
				border: 1px solid #666666;
				border-radius: u(17);
				margin:u(7) u(10);
				font-size: u(20);
				color: #666666;
			}
			.liactive{
				border-color: #ff4350;
				color: #ff4350;
			}
		}
	}
}
.count{
	width: 100%;
	height: u(100);
	border-top: 1px solid #e5e5e5;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	justify-content: space-between;
	padding: 0 u(17);
	p{
		font-size: 24px;
		color: #000000;
	}
	label{
		width: u(110);
		height: u(30);
		box-sizing: border-box;
		border: 2px solid #aaaaaa;
		border-radius: u(5);
		display: flex;
		span{
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: u(24);
			color: #333;
			height: 100%;
			width: u(30);
		}
		.p_span{
			color: #999999;
		}
		input{
			flex: 1;
			line-height: u(30);
			text-align: center;
			border: none;
			font-size: u(20);
			color: #333333;
			border-left: 2px solid #aaaaaa;
			border-right: 2px solid #aaaaaa;
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