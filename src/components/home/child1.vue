<template>
	<div :class="child.class">
		<h2>{{child.name}}</h2>
		<span></span>
		<p>{{child.title}}</p>
		<router-link :to="child.path">{{child.to}}></router-link>
	</div>
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
div{
	background: #ffffff;
	box-sizing: border-box;
	padding: u(12) 0 0 u(16);
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	
	h2{
		font-size: u(40);
	}
	span{
		margin-top: u(9);
		display: block;
		width: u(60);
		height: u(2);
		background: #dfddde;
	}
	p{
		line-height: u(37);
		font-size: u(20);
		color: #666666;
	}
	a{
		height: u(27);
		font-size: u(30);
		line-height: u(32);
		color: #df547a;
		text-align: left;
	}
}
.navleft{
	width: u(303);
	height: 100%;
	background: url(../../assets/img/navleft.png) no-repeat u(27) u(69) #ffffff;
	background-size:u(246) u(246); 
	h2{
		color: #fc3858;
	}
}
.navtop{
	width: u(292);
	height: u(154);
	background: url(../../assets/img/navtop.png) no-repeat u(187) u(22) #ffffff;
	background-size:u(95) u(143); 
	h2{
		color: #6549cf;
	}
}
.navbottom{
	width: u(292);
	height: u(154);
	background: url(../../assets/img/navbottom.png) no-repeat u(160) 0 #ffffff;
	background-size:u(125) u(165); 
	h2{
		color:#fc6b38;
	}
}	
</style>