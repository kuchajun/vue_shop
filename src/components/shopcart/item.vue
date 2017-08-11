<template>
	<div class="items">
		<i class="check" :class='[item.state?"iactive":""]' @click='changestate(index)' ></i>
		<dl>
			<dt><img :src="item.pic"/></dt>
			<dd v-if="!edit_s" class="dd_l">
				<p class="name">{{item.name}}</p>
				<p class="num">
					<i>货号：{{item.h_num}}</i>
					<i>规格：{{item.guige}}</i>
				</p>
				<p class="price">
					<i>￥{{item.price}}.<span>00</span></i>
					<i>X{{item.num}}</i>
				</p>
			</dd>
			<dd v-else class="dd_r">
				<div class="dd_left">
					<p class="p_top">
						<span @click="changenum(index,0)">-</span>
						<i>{{item.num}}</i>
						<span @click="changenum(index,1)">+</span>
					</p>
					<p class="p_bottom">
						<i>{{item.guige}}</i>
						<span><img @click='gotoguige(index)' src="../../assets/img/right.png"/></span>
					</p>
				</div>
				
				<div class="dd_right" @click="delitem(index)">
					删除
				</div>
			</dd>
		</dl>
	</div>
</template>
<script type="text/javascript">
	import router from '../../router'
	import { mapState } from 'vuex'
	export default{
		props:['item','index'],
		computed: mapState([
		    'edit_s'
		]),
		methods:{
			changestate:function(index){
				console.log(index)
				this.$store.dispatch('CHANGE_CHECK',index)
			},
			//数量加减
			changenum:function(index,s){
				console.log(index+''+s)
				this.$store.dispatch('CHANGE_NUM_S',{index,s})
			},
			//删除元素
			delitem:function(index){
				this.$store.dispatch('DEL_ITEM',index)
			},
			gotoguige:function(index){
				//router.push("/guige")
				this.$store.dispatch('CHANGE_GUIGE_S',index)
			}
		}
	}
	
</script>

<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
.items{
	width: 100%;
	background: #fff;
	border-bottom:1px solid #e5e5e5 ;
	padding:u(18) 0 u(18) u(17);
	display: flex;
	align-items: center;
	box-sizing: border-box;
	.check{
		width: u(24);
		height: u(24);
		border-radius: u(12);
		box-sizing:border-box;
		border: 1px solid #e5e5e5;
		background: transparent;
	}
	.iactive{
		background: url(../../assets/img/shopok.png) left top no-repeat;
		background-size:u(24) u(24);
		border: none;
	}
	dl{
		flex: 1;
		display: flex;
		margin-left:u(20) ;
		dt{
			width: u(142);
			height: u(142);
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			border-radius: u(5);
			border: 1px solid #e5e5e5;
			img{
				width: 100%;
			}
		}
		.dd_l{
			flex: 1;
			margin-left: u(20);
			box-sizing: border-box;
			padding-right: u(17);
			.name{
				width: 100%;
				height: u(37);
				line-height: u(37);
				font-size: u(24);
				color: #000;
				text-align: left;
			}
			.num{
				width: 100%;
				height: u(60);
				display: flex;
				justify-content: space-between;
				i{
					height: 100%;
					display: flex;
					align-items: center;
					font-size:u(22) ;
					color: #666666;
				}
			}
			.price{
				width: 100%;
				height: u(43);
				display: flex;
				justify-content: space-between;
				i:nth-of-type(1){
					font-size: u(26);
					color: #ff4359;
					height: 100%;
					display: flex;
					align-items: center;
					span{
						font-size:u(24) ;
					}
				}
				i:nth-of-type(2){
					width: u(150);
					height: 100%;
					display: flex;
					align-items: center;
					font-size: u(24);
					color: #000;
				}
			}
		}
		.dd_r{
			flex: 1;
			display: flex;
			.dd_right{
				width: u(100);
				height: 100%;
				background:#ff4350 ;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: u(30);
				color: #fff;
				-webkit-animation:fadeInRightBig 1s .2s ease both;
				-moz-animation:fadeInRightBig 1s .2s ease both;
			}
			.dd_left{
				flex: 1;
				height: 100%;
				.p_top{
					width: 100%;
					height: u(58);
					display:flex;
					border-bottom:1px solid #e5e5e5;
					span{
						width: u(100);
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: u(60);
					}
					i{
						flex: 1;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: u(40);
					}
				}
				.p_bottom{
					width: 100%;
					height: u(60);
					display: flex;
					i{
						box-sizing: border-box;
						padding: 0 u(17);
						width: 100%;
						height: u(60);
						display: block;
						line-height: u(60);
						font-size: u(26);
						text-align: left;
					}
					span{
						width: 100%;
						height: u(60);
						display: block;
						text-align: right;
						box-sizing: border-box;
						padding-right: u(20);
						img{
							transform: rotateZ(90deg);
							width: u(17);
							height: u(29);
						}
					}
					
				}
			}
		}
	}
}	



@-webkit-keyframes fadeInRightBig{
0%{
	width: 0;
-webkit-transform:translateX(u(100))}
100%{
	width: u(100);
-webkit-transform:translateX(0)}
}
@-moz-keyframes fadeInRightBig{
0%{
	width: 0;
-moz-transform:translateX(u(100))}
100%{
	width: u(100);
-moz-transform:translateX(0)}
}
/*
@-webkit-keyframes fadeInRightBig{
0%{
-webkit-transform:translateX(u(100))}
100%{
-webkit-transform:translateX(0)}
}
@-moz-keyframes fadeInRightBig{
0%{
-moz-transform:translateX(u(100))}
100%{
-moz-transform:translateX(0)}
}*/
</style>