<template>
	<div class="guige" :class='guige_s?"guige_a":"guige_b"'>
		<dl>
			<dt><img src="../../../static/img/daishuohuo.png"/></dt>
			<dd>
				<p class="price_o">￥{{p_list[p_guige].price}}.<span>00</span></p>
				<p class="num_o">货号：283717AS</p>
			</dd>
			<dd @click='outguige'>
				<img src="../../assets/img/editdel.png"/>
			</dd>
		</dl>
		<h3>选择套餐</h3>
		<div class="package">
			<ul>
				<li :class="[p_guige==index?'liactive':'']" v-for="(item,index) in p_list" @click="changeguige(index)" :key="index">{{item.name}}</li>
			</ul>
			
		</div>
		<div class="handle">
			<span @click='itemguige'>确定</span>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	import { mapState } from 'vuex';
	export default {
		computed: mapState([
		    'p_list',
		    'p_guige',
		    'guige_s'
		]),
		methods:{
			//改变规格
			changeguige:function(index){
				//console.log(index)
				this.$store.dispatch('CHANGE_GUIGE',index)
			},
			itemguige:function(){
				this.$store.dispatch('CHANGE_GUIGE_B')
			},
			outguige:function(){
				this.$store.dispatch('CHANGE_GUIGE_S',0)
			}
		}
	}
</script>
<style lang="scss" scoped="scoped" type="text/css">

	@function u($values){
		@return $values/64+rem
	}
	.guige{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		background: #fff;
		
		z-index: 3;
	}
	/*.guige_a{
		-webkit-animation:fadeInRightBig 1s .2s ease both;
		-moz-animation:fadeInRightBig 1s .2s ease both;
	}
	.guige_b{
		-webkit-animation:fadeInRightBig_b 1s .2s ease both;
		-moz-animation:fadeInRightBig_b 1s .2s ease both;
	}*/
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
		dd:nth-of-type(1){
			margin-left:u(18);
			flex: 1;
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
		dd:nth-of-type(2){
			width: u(100);
			height: u(100);
			display: flex;
			align-items: center;
			justify-content: center;
			img{
				display: block;
				width: 50%;
				height: 50%;
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
	.handle{
		width: 100%;
		height: u(98);
		position: fixed;
		bottom: 0;
		span{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: u(32);
			color: #ffffff;
			background: #ff4350;
		}
	}
	/*@-webkit-keyframes fadeInRightBig{
	0%{
		
	-webkit-transform:translateX(u(640))}
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
	}*/
</style>