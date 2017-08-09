<template>
	<div class="goods">
		<header>
			<a href="javascript:void(0);" @click='goback'><img src="../../assets/img/leftback.png"/></a>
			<h2>商品详情</h2>
			<router-link to='/'><img src="../../assets/img/addshopcar.png"/></router-link>
		</header>
		<div class="zanwei">
			
		</div>
		<mt-swipe class="banner" :auto="4000">
		  	<mt-swipe-item v-for="(item,index) in banner" :key="index"><img :src="item.src" /></mt-swipe-item>
		</mt-swipe>
		<div class="title">
			<p>澳贝(AUBY) 益智玩具 宝宝多功能手推车 孩子学走童车</p>
		</div>
		<div class="info_p">
			<p class="price">
				<i>￥256 <span>.00</span></i>
				<i>￥120.00</i>
			</p>
			<p class="num">
				已售1100件
			</p>
		</div>
		<!--描述-->
		<div class="describe">
			<i>丰富音乐</i>
			<i>方向盘扭扭前行</i>
			<i>丰富音乐</i>
			<i>丰富音乐</i>
		</div>
		<!--选择规格地址-->
		<div class="info_g">
			<p @click="coptions(1)">选择规格</p>
		</div>
		<div class="info_d">
			<p>选择地址</p>
		</div>
		<!--图文详情标题-->
		<div class="pic_txt">
			<p>图文详情</p>
		</div>
		<!--评论标题-->
		<div class="comment">
			<i>评论(99999)</i>
			<i>好评度<span>96%</span></i>
		</div>
		<!--评价-->
		<div class="comments">
			<comments :data="item" v-for="(item,index) in comment" :key="index"></comments>
		</div>
		<!--查看更多-->
		<div class="more">
			<router-link to="/">查看更多></router-link>
		</div>
		<!--占位-->
		<div class="zanwei">
			
		</div>
		<!--添加购物车-->
		<div class="addcar">
			<router-link class="service" to="/">
				<i><img src="../../assets/img/service.png"/></i>
				<span>客服</span>
			</router-link>
			<div class="collect" @click="setcollect">
				<i>
					<img v-if="collect" src="../../assets/img/collect2.png"/>
					<img v-else src="../../assets/img/collect1.png"/>
				</i>
				<span>客服</span>
			</div>
			<div class="add_c" @click="coptions(2)">
				加入购物车
			</div>
			<div class="buy_now" @click="coptions(3)">
				立即购买
			</div>
		</div>
		<!--选择规格-->
		<div class="options" v-if='showoption'>
			<options :hand="addcar" :showoption="showoption"></options>
		</div>
	</div>
</template>
<script type="text/javascript">
	import router from '../../router'
	import comments from './comment.vue';
	import options from './option.vue';
	import { mapState } from 'vuex'
	export default{
		components:{
			comments,
			options
		},
		computed: mapState([
		    'showoption',
		    'addcar'
		]),
		data(){
			return{
				collect:true,
				
				banner:[
					{src:'../../static/img/testbanner1.png'},
					{src:'../../static/img/testbanner1.png'},
					{src:'../../static/img/testbanner1.png'}
				],
				comment:[
					{name:'用户***66',star:5,txt:'第一次在微批购物，效果体验非常的好第一次在微批购物，效果体验非常的好...',src:[
					'../../static/img/daishuohuo.png',
					'../../static/img/daishuohuo.png',
					'../../static/img/daishuohuo.png'
					]},
					{name:'用户***66',star:5,txt:'第一次在微批购物，效果体验非常的好第一次在微批购物，效果体验非常的好...',src:[
					'../../static/img/daishuohuo.png',
					'../../static/img/daishuohuo.png',
					'../../static/img/daishuohuo.png'
					]}
				]
			}
		},
		methods:{
			//返回上一级
			goback:function(){
				router.go(-1)
			},
			setcollect:function(){
				if(this.collect){
					this.collect=false;
				}else{
					this.collect=true;
				}
			},
			//选择规格
			coptions:function(n){
				if(n==1){
					this.addcar.add_1=true;
					this.addcar.add_2=false;
					this.addcar.add_3=false;
				}else if(n==2){
					this.addcar.add_1=false;
					this.addcar.add_2=true;
					this.addcar.add_3=false;
				}else if(n==3){
					this.addcar.add_1=false;
					this.addcar.add_2=false;
					this.addcar.add_3=true;
				}
				this.$store.dispatch('CHANGE_FLAG')
				this.showoption=true;
			}
		}
		
	}
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
.goods{
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
	a{
		width: u(48);
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	a:nth-of-type(1) img{
		width: u(21);
		height: u(38);
		display: block;
	}
	a:nth-of-type(2) img{
		width: u(48);
		height: u(48);
		display: block;
	}
	h2{
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size:u(32);
		color: #272729;
		font-weight: normal;
	}
	
}
/*banne图样式*/
.banner{
	width: 100%;
	height: u(294);
	.mint-swipe-items-wrap{
		width: 100%;
		height: 100%;
		.mint-swipe-item{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		img{
			display: block;
			width: 100%;
			height: auto;
		}
	}
}
/*标题*/
.title{
	width: 100%;
	box-sizing: border-box;
	padding: u(18) u(17) u(23) u(17);
	background: #fff;
	p{
		min-height: u(30);
		line-height: u(30);
		font-size: u(26);
		color: #000000;
		text-align: left;
	}
}
/*价格销量*/
.info_p{
	width: 100%;
	height:26px ;
	box-sizing: border-box;
	padding: 0 u(17);
	display: flex;
	justify-content: space-between;
	background: #fff;
	.price{
		i:nth-of-type(1){
			font-size: u(26);
			color: #ff4359;
			span{
				font-size: u(22);
			}
		}
		i:nth-of-type(2){
			font-size: u(22);
			color: #666666;
			text-decoration: line-through;
			margin-left: u(10);
		}
		
	}
	.num{
		font-size: u(20);
		color: #666666;
	}
}	
/*描述*/
.describe{
	background: #fff;
	width: 100%;
	height: 89px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	box-sizing: border-box;
	padding: 0 u(17);
	i{
		padding-left: u(20);
		background: url(../../assets/img/okbg.png) no-repeat left center;
		background-size:u(14) ;
		font-size: u(16);
		color: #999999; 
		margin-right: u(25);
	}
}
/*选择规格和地址*/
.info_g,.info_d{
	width: 100%;
	height: u(74);
	box-sizing: border-box;
	padding: 0 u(17);
	border-top: 1px solid #e5e5e5;
	background: #fff;
	p{
		width: 100%;
		height: 100%;
		text-align: left;
		font-size: u(24);
		color: #333333;
		background: url(../../assets/img/right.png) no-repeat right center;
		background-size:u(17) u(29); 
		line-height: u(74);
	}
}
.pic_txt{
	width: 100%;
	padding: 0 u(17) u(27) u(17);
	background: #fff;
	height: u(65);
	box-sizing: border-box;
	margin-top: u(27);
	p{
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: u(38);
		font-size: u(24);
		color: #333333;
		text-align: left;
		background: url(../../assets/img/right.png) no-repeat right center;
		background-size:u(17) u(29); 
	}
}
.comment{
	width: 100%;
	height: u(73);
	box-sizing: border-box;
	padding: 0 u(17);
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #fff;
	i:nth-of-type(1){
		font-size: u(20);
		color: #666666;
	}
	i:nth-of-type(2){
		font-size: u(20);
		color: #666666;
		span{
			color: #ff3259;
		}
	}
}
/*评价*/
.comments{
	width: 100%;
	
}
/*查看更多*/
.more{
	width: 100%;
	height: u(136);
	display: flex;
	align-items: center;
	justify-content: center;
	a{
		width: u(160);
		height: u(36);
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: u(24);
		color: #ff4359;
		border:solid 1px #ff4359;
		border-radius: u(18);
	}
}
/*底部*/
.addcar{
	width: 100%;
	height: 99px;
	position: fixed;
	left: 0;
	bottom: 0;
	background: #fff;
	box-sizing: border-box;
	border-top: 1px solid #e5e5e5;
	display: flex;
	.service,.collect{
		flex: 130;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		i{
			width:100% ;
			height: u(36);
			display: flex;
			align-items: center;
			justify-content: center;
		}
		span{
			font-size: u(26);
			color: #333333;
		}
	}
	.add_c{
		flex: 192;
		background: #ffc24b;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: u(28);
		color: #ffffff;
	}
	.buy_now{
		flex: 188;
		background: #ff4350;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: u(28);
		color: #ffffff;
	}
}
</style>