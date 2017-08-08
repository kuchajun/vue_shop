<template>
	<router-link :to="child.path">
		<dl>
			<dt><img :src="child.src"></dt>
			<dd>{{child.name}}</dd>
			<dd><i>￥{{child.price}}</i><span>累计销售：{{child.num}}件</span></dd>
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
	height: u(450);
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
		margin-top: u(28);
		width: 100%;
		height: u(56);
		line-height: u(28);
		font-size: u(22);
		color:#000000;
		box-sizing: border-box;
		padding:0 u(10);
		text-align: left;
	}
	dd:nth-of-type(2){
		box-sizing:border-box;
		padding:0 u(10);
		width: 100%;
		height: 78px;
		display: flex;
		justify-content: space-between;
		i{
			
			display: flex;
			align-items: center;
			color:#ff4359;
			font-size: u(28);
			
		}
		span{
			
			display: flex;
			align-items: center;
			color:#666666;
			font-size: u(16);
		}
	}
}	
</style>