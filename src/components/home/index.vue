<template>
	<div class="home">
		<div class="head">
			<router-link class="input" to="/"><img src="../../assets/img/homeSearch.png"/>请输入商品关键字</router-link>
			<div class="msg">
				<i><img src="../../assets/img/msg.png"/></i>
				<span>消息</span>
			</div>
		</div>
		<div class="banner">
			<mt-swipe class="swipe" :auto="4000">
				<mt-swipe-item class='swipe-item' v-for='(item,index) in banner' :key="index">
					<router-link :to="{path:item.path}">
						<img :src="item.src"/>
					</router-link>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<ul class="nav_list">
			<li v-for="(item,index) in list_c" :key="index">
				<router-link :to="item.path">
					<img :src="item.src"/>
					<span>{{item.name}}</span>
				</router-link>
			</li>
		</ul>
		<div class="homeNav2">
			<childa :child="item" v-for='(item,index) in child1' :key="index"></childa>
		</div>
		<div class="homeTitle">
			<hometitle :child="hometitle[0]"></hometitle>
		</div>
		<div class="hot">
			<list1 :child="item" v-for='(item,index) in hotlist' :key="index"></list1>
		</div>
		<div class="addmore">
			<router-link to="/">查看更多></router-link>
		</div>
		<div class="homeTitle homeTitle2">
			<hometitle :child="hometitle[1]"></hometitle>
		</div>
		<div class="bargain ">
			<list2 :child="item" v-for='(item,index) in bargainlist' :key="index"></list2>
		</div>
		<div class="addmore bot_add">
			<router-link to="/">查看更多></router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
import childa from "./child1.vue";
import hometitle from './hometitle.vue';
import list1 from './list1.vue';
import list2 from './list2.vue'
export default{
	components:{
		childa,
		hometitle,
		list1,
		list2
	},
	data(){
		return {
			banner:[
				{path:"/",src:"./static/img/testbanner1.png"},
				{path:"/",src:"./static/img/testbanner1.png"},
				{path:"/",src:"./static/img/testbanner1.png"}
			],
			list_c:[
				{path:'/',name:'特价商品',src:'./static/img/homeNav1.png'},
				{path:'/classify/0',name:'商品类别',src:'./static/img/homeNav2.png'},
				{path:'/',name:'购买须知',src:'./static/img/homeNav3.png'},
				{path:'/',name:'公司介绍',src:'./static/img/homeNav4.png'}
			],
			child1:[
				{path:'/',name:'微P精选',title:'2017萌宝专场',to:'GO',class:'navleft'},
				{path:'/',name:'今日特惠',title:'爆款特价还包邮',to:'必抢',class:'navtop'},
				{path:'/',name:'积分商城',title:'0元购物不是梦',to:'必抢',class:'navbottom'}
			],
			hometitle:[
				{path:'/',name:'超值/热卖/精品',title:'爆款商品',title1:'萌宝福利篇',class:'title1'},
				{path:'/',name:'优质/呆萌/实惠',title:'特价商品',title1:'萌宝乐园篇',class:'title2'}
			],
			hotlist:[
				{path:'/goods',src:'./static/img/hotimg1.png',name:'澳贝(AUBY)-益智玩具 老虎警长玩具车',price:'87',num:'10300'},
				{path:'/goods',src:'./static/img/hotimg2.png',name:'澳贝(AUBY)-益智玩具 宝宝多功能手推车',price:'108',num:'3555'},
				{path:'/goods',src:'./static/img/hotimg1.png',name:'澳贝(AUBY)-益智玩具 老虎警长玩具车',price:'57',num:'2000'},
				{path:'/goods',src:'./static/img/hotimg2.png',name:'澳贝(AUBY)-益智玩具 宝宝多功能手推车',price:'63',num:'217'}
			],
			bargainlist:[
				{path:'/goods',src:'./static/img/hotimg1.png',name:'澳贝(AUBY)-益智玩具 老虎警长玩具车',nprice:'87',oprice:'120',num:'233'},
				{path:'/goods',src:'./static/img/hotimg2.png',name:'澳贝(AUBY)-益智玩具 宝宝多功能手推车',nprice:'65',oprice:'120',num:'24'},
				{path:'/goods',src:'./static/img/hotimg1.png',name:'澳贝(AUBY)-益智玩具 老虎警长玩具车',nprice:'87',oprice:'120',num:'08'},
				{path:'/goods',src:'./static/img/hotimg2.png',name:'澳贝(AUBY)-益智玩具 宝宝多功能手推车',nprice:'87',oprice:'120',num:'988'}
			]
		}
	}
}
	
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
.bot_add:after{
	width: 100%;
	height: u(100);
	content: " ";
	display: block;
}
.home{
	width: 100%;
	position: absolute;
	top: 0;
	bottom: u(100);
	
}	
.head{
	width: 100%;
	height: 88px;
	box-sizing: border-box;
	padding: 0 u(19);
	display: flex;
	align-items: center;
	justify-content: space-between;
	.input{
		width: u(544);
		height: u(60);
		border-radius: u(10);
		display: flex;
		align-items: center;
		background: #fff;
		box-sizing: border-box;
		padding-left: u(10);
		font-size: u(24);
		color: #999;
		img{
			display: block;
			width: u(30);
			height: u(29);
			margin-right: u(20);
		}
	}
	.msg{
		display: flex;
		flex-direction: column;
		i{
			width: 100%;
			height: u(35);
			align-items: center;
			display: flex;
			justify-content: flex-end;
			img{
				display: block;
				width: u(36);
				height: u(35);
				
			}
			
		}
		span{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			font-size: u(20);
			color: #666666;
			margin-top: u(4);
		}
	}
}
.banner{
	width: 100%;
	height: u(350);
	margin-top: u(10);
	.swipe{
		width: 100%;
		height: 100%;
		.swipe-item{
			width: 100%;
			height: 100%;
			a{
				display: flex;
				align-items: center;
				justify-content: center;
				img{
					width: u(640);
					height: u(350);
				}
			}
			
		}
	}
}	

/*导航列表*/
.nav_list{
	width: 100%;
	box-sizing: border-box;
	padding: 0 u(18);
	display: flex;
	margin-top: u(34);
	li{
		flex: 1;
		display:block;
		a{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		img{
			width:u(86) ;
			height: u(86);
			display: block;
		}
		span{
			width: 100%;
			height: u(58);
			line-height: u(58);
			font-size:u(24);
		}
	}
}

/*分类*/
.homeNav2{
	width: 100%;
	height: u(320);
	padding:0 u(11);
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items:center;
}

/*大标题1*/
.homeTitle{
	margin-top: 17px;
	margin-bottom: 7px;
	width: 100%;
	height:252px;
	box-sizing: border-box;
	background: #ffffff;
	padding-top: 32px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	
}
.hot{
	width: 100%;
	box-sizing: border-box;
	padding:0 u(16);
	display: flex;
	flex-wrap:wrap;
	justify-content: space-between;
}
/*查看更多*/
.addmore{
	width: 100%;
	
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	padding-right: 18px;
	box-sizing: border-box;
	a{
		height: u(60);
		width: u(120);
		display: flex;
		align-items: center;
		justify-content: flex-end;
		color: #666666;
		font-size: 18px; 

	}
}
/*特价商品标题*/
.homeTitle2 {
	.titleBg p{
		color: #ffd739;
	}
	a{
		background: linear-gradient(#ffd739, #ffe787)
	}
}
.bargain{
	width: 100%;
	box-sizing: border-box;
	padding:0 16px;
	display: flex;
	flex-wrap:wrap;
	justify-content: space-between;
}
</style>