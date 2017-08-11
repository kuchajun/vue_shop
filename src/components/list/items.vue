<template>
	<dl>
		<dt><img :src="items.src"/></dt>
		<dd>
			<p>名称：{{items.name}}</p>
			<p>品牌：{{items.brand}}</p>
			<p>货号：{{items.a_num}}</p>
			<p>数量：{{items.number}}&nbsp;&nbsp;&nbsp;&nbsp;单价：{{items.price}}</p>
		</dd>
	</dl>
</template>
<script type="text/javascript">
	export default {
		props:["items"]
	}
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
dl{
	width: 100%;
	display: flex;
	box-sizing: border-box;
	padding: u(11) u(18);
	
	dt{
		width: u(120);
		height: u(120);
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border: 1px solid #e5e5e5;
		background: #fff;
		img{
			width: 100%;
		}
	}
	dd{
		flex: 1;
		display: flex;
		flex-direction: column;
		margin-left: u(20);
		P{
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
		}
	}
}	
</style>