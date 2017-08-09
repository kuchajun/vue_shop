<template>
	<div class="items">
		<i class="check" @click=''></i>
		<dl>
			<dt><img :src="item.pic"/></dt>
			<dd>
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
		</dl>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['item','index'],
		methods:{
			
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
	padding:u(18) u(17);
	display: flex;
	align-items: center;
	box-sizing: border-box;
	.check{
		width: u(24);
		height: u(24);
		border-radius: u(12);
		box-sizing:border-box;
		border: 1px solid #e5e5e5;
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
		dd{
			flex: 1;
			margin-left: u(20);
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
	}
}	
</style>