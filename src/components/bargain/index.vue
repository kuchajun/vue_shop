<template>
	<div class="">
		<header>
			<i><img src="../../assets/img/leftback.png"/></i>
			<h2>特价商品</h2>
		</header>
		<div class="zanwei">
			
		</div>
		<mt-loadmore class="load_more" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
		  <ul>
		    <li v-for="item in list">{{ item }}</li>
		  </ul>
		</mt-loadmore>
		
	</div>
</template>
<script type="text/javascript">
	import { mapState } from "vuex"
	export default{
		data(){
			return {
				list:70,
				allLoaded:false
			}
		},
		mounted(){
			
		},
		methods:{
			loadTop:function(){
				console.log("下拉事件")
				
			},
			loadBottom:function(){
				console.log("上拉事件")
			}
		}
			
	}
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
.zanwei{
	width: 100%;
	height: u(89);
}	
header{
	width: 100%;
	height: u(89);
	background: #fff;
	display: flex;
	padding: 0 u(67) 0 u(17);
	align-items: center;
	box-sizing: border-box;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	i{
		width: u(50);
		height: 100%;
		display: flex;
		align-items: center;
		img{
			width: u(21);
			height: u(38);
		}
	}
	h2{
		flex: 1;
		font-size: u(34);
		color: #010101;
		font-weight: 100;
	}
}
.load_more{
	/*position: absolute;
	top: u(89);
	bottom: 0;*/
}
</style>