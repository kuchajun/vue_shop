<template>
	<div class="radio">
		<input type="radio" id="radio_"/>
		<label for="radio_">套餐1</label>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
.radio{
	height: u(34);
	padding:0 u(30) ;
	label{
		width: 100%;
		border-radius: u(17);
		box-sizing: border-box;
		border: 1px solid #333333;
	}
	
	
}
</style>