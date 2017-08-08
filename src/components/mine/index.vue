<template>
	<div id="mine" class="clearfix">
	    <div class="head">
	    	<dl>
	    		<dt>
	    			<p>sjkj011</p>
	    			<p>sjkj011</p>
	    		</dt>
	    		<dd>
	    			<i>
	    				<img src="../../assets/img/header.png"/>
	    			</i>
	    		</dd>
	    	</dl>
	    	<router-link class="msg" to="/"><img src="../../assets/img/msg.png"/></router-link>
	    </div>
	    <div class="lists">
	    	<router-link  v-for="(list,index) in lists" :key="index" :class="{'no_bor':list.no_bor}" :to="{path:list.path}">
	    		<span>{{list.name}}</span><i><img src="../../assets/img/right.png"/></i>
	    	</router-link>
	    </div>
	</div>
	
</template>
<script type="text/javascript">
	
	export default{
		data(){
			return {
				lists:[
					{no_bor:false,name:"交易记录",path:"/"},
					{no_bor:true,name:"修改密码",path:"/"},
					{no_bor:false,name:"收货地址",path:"/"},
					{no_bor:true,name:"我的收藏",path:"/"},
					{no_bor:true,name:"技术支持",path:"/"}
				]
			}
		}
	}
	
</script>
<style lang="scss" scoped="scoped" type="text/css">
@function u($values){
	@return $values/64+rem
}
#mine{
	width: 100%;
	
}
.head{
	width: 100%;
	height: u(280);
	background:url(../../assets/img/minebg.png) left  top no-repeat ;
	background-size:u(640) u(270);
	position: relative;
	box-sizing: border-box;
	padding-top: u(70);
	position: relative;
}
.msg{
	display: block;
	position: absolute;
	top: u(20);
	right: u(18);
	width: u(36);
	height: u(35);
	img{
		width: 100%;
		height: 100%;
	}
}
dl{
	
	background: #fff;
	width: u(252);
	height: u(116);
	border-top-right-radius: u(58);
	border-bottom-right-radius: u(58);
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding-right: 6px;
	dt{
		flex: 1;
		p{
			height: u(40);
			line-height: u(40);
			font-size: u(20);
		}
	}
	dd{
		width: u(104);
		height: u(104);
		background: #000;
		border-radius: u(52);
		overflow: hidden;
		i{
			width: 100%;
			height: 100%;
			display: block;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
}
.lists{
	width: 100%;
	margin-top: 10px;
	a{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: u(85);
		border-bottom: u(1) solid #e5e5e5;
		background: #fff;
		box-sizing: border-box;
		padding: 0 u(18);
		span{
			height: 100%;
			display: flex;
			align-items: center;
			font-size: u(28);
			color: #2d2d2d;
		}
		i{
			height: 100%;
			display: flex;
			align-items: center;
			img{
				width: u(17);
				height: u(29);
			}
		}
	}
	.no_bor{
		border:none;
		margin-bottom: u(20);
	}
}
</style>