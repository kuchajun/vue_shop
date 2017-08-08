<template>
	<div class="comment2">
		<div class="title">
			<p>
				<i v-for="n in data.star">
					<img src="../../assets/img/collect2.png"/>
				</i>
			</p>
			<p>
				{{data.name}}
			</p>
		</div>
		<div class="txt">
			{{data.txt}}
		</div>
		<div class="pic">
			<i v-for="(item,index) in data.src" :key="index">
				<img :src="item"/>
			</i>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:["data"]
	}
</script>
<style scoped="scoped" lang="scss" type="text/css">
@function u($values){
	@return $values/64+rem
}
.comment2{
	width: 100%;
	box-sizing: border-box;
	padding: 0 u(17);
	background: #fff;
	border-top: 1px solid #e5e5e5;
	padding-bottom: u(20);
	.title{
		width: 100%;
		height:u(25);
		display: flex;
		align-items: center;
		justify-content: space-between;
		p:nth-of-type(1){
			height: 100%;
			display: flex;
			align-items: center;
			i{
				width:u(28);
				height: 100%;
				display: flex;
				align-items: center;
				img{
					display:block;
					width:u(24) ;
					height: u(22);
				}
			}
		}
		p:nth-of-type(2){
			font-size: u(20);
			color: #333333;
		}
	}
	.txt{
		width: 100%;
		box-sizing: border-box;
		padding: u(17) 0 u(18) 0;
		line-height: 28px;
		font-size: u(24);
		color: #333333;
		text-align: left;
	}
	.pic{
		width: 100%;
		display: flex;
		i{
			width: u(142);
			height:u(142) ;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			border: 1px solid #e5e5e5;
			border-radius: u(10);
			margin-right: u(10);
			
			img{
				width: 100%;
			}
		}
	}
}
</style>