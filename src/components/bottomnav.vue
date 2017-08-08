<template>
	
	<ul class="nav">
		<li>
			<router-link to="/home" >
				<i class="ico1"></i>
				<span>首页</span>
			</router-link>
		</li>
		<li>
			<router-link to="/shopcar" >
				<i class="ico2"></i>
				<span>购物车</span>
			</router-link>
		</li>
		<li>
			<router-link to="/list" >
				<i class="ico3"></i>
				<span>订单</span>
			</router-link>
		</li>
		<li>
			<router-link to="/mine" >
				<i class="ico4"></i>
				<span>我的</span>
			</router-link>
		</li>
	</ul>
	
</template>
<script type="text/javascript">
	export default{
		name:'footer'
	}
</script>
<style scoped="scoped" lang="scss">
	@function u($values){
		@return $values/64+rem
	}


	.nav{
		background: #fff;
		border-top: u(2) solid #e5e5e5;
		position: fixed;
		bottom: 0;
		left: 0;
		width:100%;
		height: u(100);
		display:flex;
		justify-content: space-around;
		align-items: center;
		li{
			flex: 1;
			height: 100%;
		}
		a{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
		}
		a{
			.ico1{
				background: url(../assets/img/home1.png) no-repeat center center;
          		background-size: u(38) u(36);
			}
			.ico2{
				background: url(../assets/img/shop1.png) no-repeat center center;
          		background-size: u(38) u(34);
			}
			.ico3{
				background: url(../assets/img/list1.png) no-repeat center center;
          		background-size:u(33) u(38);
			}
			.ico4{
				background: url(../assets/img/mine1.png) no-repeat center center;
          		background-size: u(38) u(38);
			}
		}
		.router-link-active{
			.ico1{
				background: url(../assets/img/home2.png) no-repeat center center;
          		background-size: u(38) u(36);
			}
			.ico2{
				background: url(../assets/img/shop2.png) no-repeat center center;
          		background-size: u(38) u(34);
			}
			.ico3{
				background: url(../assets/img/list2.png) no-repeat center center;
          		background-size:u(33) u(38);
			}
			.ico4{
				background: url(../assets/img/mine2.png) no-repeat center center;
          		background-size: u(38) u(38);
			}
			span{
				color: #ff4350;
			}
		}
		i{
			height: u(54);
			width: 100%;
			margin-top:u(13);
		}
		span{
			color: #666666;
			flex: 1;
			width: 100%;
			display: flex;
			align-items: flex-start;
			justify-content: center;
			font-size:u(20) ;
		}
	}
</style>