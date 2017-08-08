<template>
	<div class="classify">
		<div class="head">
			<router-link class="input" to="/"><img src="../../assets/img/homeSearch.png"/>请输入商品关键字</router-link>
			<div class="msg">
				<i><img src="../../assets/img/msg.png"/></i>
				<span>消息</span>
			</div>
		</div>
		<div class="main">
			<div class="nav">
				<li>商品分类</li>
				<li v-for="(item,index) in goods_c" :key="index">
					<router-link :to="item.path">{{item.name}}</router-link>
				</li>
			</div>
			<div class="content">
				<div class="cbanner"><img src="../../assets/img/bannerpic.png" alt=""></div>
				<div class="clist">
					<h2>商品展示</h2>
					<ul>
						<li v-for="(item,index) in lists[$route.params.id].list" :key="index">
							<router-link :to='item.path'>
								<i><img :src="item.src" alt=""></i>
								<span>{{item.name}}</span>
							</router-link>
						</li>
						
					</ul>
				</div>
			</div>
		</div>
		
	</div>
	
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				goods_c:[
					{path:'/classify/0',name:'早教益智'},
					{path:'/classify/1',name:'益智积木'},
					{path:'/classify/2',name:'角色扮演'},
					{path:'/classify/3',name:'电动音乐'},
					{path:'/classify/4',name:'户外运动'}
				],
				lists:[
					{name:'list1',list:[
						{path:'/',name:'智能学习椅(双语)CKR53',src:'../../static/img/listtest.png'},
						{path:'/',name:'智能学习椅(双语)CKR53',src:'../../static/img/listtest.png'},
						{path:'/',name:'智能学习椅(双语)CKR53',src:'../../static/img/listtest.png'},
						{path:'/',name:'智能学习椅(双语)CKR53',src:'../../static/img/listtest.png'},
						{path:'/',name:'智能学习椅(双语)CKR53',src:'../../static/img/listtest.png'},
						{path:'/',name:'智能学习椅(双语)CKR53',src:'../../static/img/listtest.png'}
					]},
					{name:'list1',list:[
						{path:'/',name:'益智积木益智积木益智积木',src:'../../static/img/listtest.png'},
						{path:'/',name:'益智积木益智积木益智积木',src:'../../static/img/listtest.png'},
						{path:'/',name:'益智积木益智积木益智积木',src:'../../static/img/listtest.png'},
						{path:'/',name:'益智积木益智积木益智积木',src:'../../static/img/listtest.png'},
						{path:'/',name:'益智积木益智积木益智积木',src:'../../static/img/listtest.png'},
						{path:'/',name:'益智积木益智积木益智积木',src:'../../static/img/listtest.png'}
					]},
					{name:'list1',list:[
						{path:'/',name:'角色扮演角色扮演角色扮演',src:'../../static/img/listtest.png'},
						{path:'/',name:'角色扮演角色扮演角色扮演',src:'../../static/img/listtest.png'},
						{path:'/',name:'角色扮演角色扮演角色扮演',src:'../../static/img/listtest.png'},
						{path:'/',name:'角色扮演角色扮演角色扮演',src:'../../static/img/listtest.png'},
						{path:'/',name:'角色扮演角色扮演角色扮演',src:'../../static/img/listtest.png'},
						{path:'/',name:'角色扮演角色扮演角色扮演',src:'../../static/img/listtest.png'}
					]},
					{name:'list1',list:[
						{path:'/',name:'电动音乐电动音乐电动音乐',src:'../../static/img/listtest.png'},
						{path:'/',name:'电动音乐电动音乐电动音乐',src:'../../static/img/listtest.png'},
						{path:'/',name:'电动音乐电动音乐电动音乐',src:'../../static/img/listtest.png'},
						{path:'/',name:'电动音乐电动音乐电动音乐',src:'../../static/img/listtest.png'},
						{path:'/',name:'电动音乐电动音乐电动音乐',src:'../../static/img/listtest.png'},
						{path:'/',name:'电动音乐电动音乐电动音乐',src:'../../static/img/listtest.png'}
					]},
					{name:'list1',list:[
						{path:'/',name:'户外运动户外运动户外运动',src:'../../static/img/listtest.png'},
						{path:'/',name:'户外运动户外运动户外运动',src:'../../static/img/listtest.png'},
						{path:'/',name:'户外运动户外运动户外运动',src:'../../static/img/listtest.png'},
						{path:'/',name:'户外运动户外运动户外运动',src:'../../static/img/listtest.png'},
						{path:'/',name:'户外运动户外运动户外运动',src:'../../static/img/listtest.png'},
						{path:'/',name:'户外运动户外运动户外运动',src:'../../static/img/listtest.png'}
					]}
				]
			}
		}
	}
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
.head{
	width: 100%;
	height: 88px;
	box-sizing: border-box;
	padding: 0 u(19);
	display: flex;
	align-items: center;
	justify-content: space-between;
	.input{
		width: u(544);
		height: u(60);
		border-radius: u(10);
		display: flex;
		align-items: center;
		background: #fff;
		box-sizing: border-box;
		padding-left: u(10);
		font-size: u(24);
		color: #999;
		img{
			display: block;
			width: u(30);
			height: u(29);
			margin-right: u(20);
		}
	}
	.msg{
		display: flex;
		flex-direction: column;
		i{
			width: 100%;
			height: u(35);
			align-items: center;
			display: flex;
			justify-content: flex-end;
			img{
				display: block;
				width: u(36);
				height: u(35);
				
			}
			
		}
		span{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			font-size: u(20);
			color: #666666;
			margin-top: u(4);
		}
	}
}
.classify{
	width: 100%;
}


/*分类主体样式*/
.main{
	width: 100%;
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: u(88);
	bottom:0;
	.nav{
		margin-top:u(2);
		width:u(160);
		li:nth-of-type(1){
			background: #fff;
		}
		li{
			
			width: 100%;
			height: u(99);
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: u(24);
			color: #000000;
			margin-bottom: u(2);
			a{
				width: 100%;
				height: 100%;
				display: flex;
				
				align-items: center;
				justify-content: center;
				
				background: #fff;
			}
		}
		.router-link-active{
			background: transparent;
			color: #ff4359;
			border:none;
		}	
		/*.liactive{
			background: transparent;
			color: #ff4359;
			border:none;
		}*/
	}
	.content{
		width: u(480);
		padding: u(26) u(17) 0 u(17);
		
		.cbanner{
			width: 100%;
			height: u(154);
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			img{

				display: block;
				width: 100%;
			}
		}
		.clist{
			margin-top: u(18);
			background: #ffffff;
			h2{
				width: 100%;
				height: u(64);
				background: url("../../assets/img/h2bg.png") no-repeat left top;
				background-size: cover;
				font-size: u(24);
				color: #ffffff;
				font-weight: normal;
				line-height: u(64);
				box-sizing: border-box; 
				padding-left: u(20);
				text-align: left;
			}
			ul{
				width: 100%;
				display:flex;
				flex-wrap: wrap;
				
				li{
					width: u(150);
					height: u(200);
					display: flex;
					flex-direction:column; 
					justify-content: center;
					align-items: center;
					i{
						display: flex;
						width: u(120);
						height: u(110);
						justify-content: center;
						align-items: center;
						margin-top: u(20);
						overflow: hidden;
						img{
							
							width: 100%;
						}
					}
					span{
						width: u(116);
						height: u(90);
						display: flex;
						flex-wrap: wrap;
						justify-content: flex-start;
						align-items: center;
						font-size:u(16);
						color: #666666;
						
					}

				}
			}
		}
	}
}

</style>