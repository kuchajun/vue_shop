<template>
	<router-link :to="child.path">
		<dl>
			<dt><img :src="child.src"></dt>
			<dd>{{child.name}}</dd>
			<dd><i>￥{{child.nprice}}</i><span>￥{{child.oprice}}</span></dd>
			<dd><i>库存{{child.num}}件</i><img src="../../assets/img/shopcar.png" ></dd>
		</dl>
	</router-link>
</template>
<script type="text/javascript">
	export default{
		props:["child"]
	}
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
a{
	width: u(298);
	height: u(465);
	background: #ffffff;
	margin-top: u(10);
}
dl{
	width: 100%;
	height: 100%;
	dt{
		width: u(298);
		height: u(290);
		display: flex;
		justify-content: center;
		align-items: center;
		img{
			display: block;
			width: 100%;
		}
	}
	dd:nth-of-type(1){
		margin-top: u(10);
		width: 100%;
		height: u(56);
		line-height: u(28);
		font-size: u(22);
		color:#000000;
		box-sizing: border-box;
		padding:0 u(10);
	}
	dd:nth-of-type(2){
		box-sizing:border-box;
		padding:0 u(10);
		width: 100%;
		height: u(20);
		display: flex;
		margin-top:u(24);
		i{
			
			display: flex;
			align-items: center;
			color:#ff4359;
			font-size: u(20);
			
		}
		span{
			
			display: flex;
			align-items: center;
			color:#666666;
			font-size: u(16);
			text-decoration: line-through;
			padding-left: u(10);
		}
	}
	dd:nth-of-type(3){
		box-sizing:border-box;
		padding:0 u(10);
		width: 100%;
		height: u(64);
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		i{
			
			display: flex;
			align-items: center;
			color:#666666;
			font-size: u(18);
			
		}
		img{
			
			display: block;
			width: u(34);
			height: u(34);
		}
	}
}
</style>