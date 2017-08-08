<template>
	<div class="titleBorder" :class='child.class'>
		<div class="titleBg">
			<h2>{{child.name}}</h2>
			<p>{{child.title}}</p>
			<i>&</i>
			<span>{{child.title1}}</span>
			
		</div>
		<a href="javascriptl:;">去看看></a>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:["child"]
	}
</script>
<style lang="scss" scoped="scoped" type="text/css">
.titleBorder{
	width: 323px;
	height: 169px;
	box-sizing: border-box;
	border:2px solid #e5e5e5;/*no*/
	padding:5px;
	position: relative;
}
.title2{
	.titleBg p{
		color: #ffd739;
	}
	a{
		background: linear-gradient(#ffd739, #ffe787)
	}
}
.titleBg{
	width: 100%;
	height:100%;
	background: #e5e5e5;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	h2{
		color: #b2b2b2;
		font-size: 20px;
		height: 41px;
		line-height: 30px;
	}
	h2:before{
		display: block;
		content: " ";
		height: 12px;
		width: 100%;
	}
	p{
		height: 50px;
		line-height: 50px;
		font-size: 42px;
		color:#ff4c6e;
	}
	i{
		height: 17px;
		font-size: 20px;
		line-height: 17px;
		color:#333333;
	}
	span{
		height: 34px;
		line-height: 34px;
		font-size: 24px;
		color: #ffffff;
	}

}
a{
	position: absolute;
	left:50%;
	margin-left: -85px;
	bottom:-17px;
	font-size: 24px;
	display: flex;
	width: 170px;
	height: 34px;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(#ff4c6e, #ff728d)
}
</style>