<template>
	<div id="home" class="clearfix">
	    
	</div>
</template>
<script type="text/javascript">
	import { Swipe, SwipeItem } from 'mint-ui';
	import axios from '../assets/js/config.js';
	export default{
		
	}
	
</script>
<style lang="scss">
.swipe{
	width: 100%;
	height: 4rem;
	img{
		width: 100%;
	}
}	

.gtitle{
	position: relative;
	width: 100%;
	overflow: hidden;
	h2{
		margin-top: 0.3rem;
	    width: 100%;
	    height: 0.5rem;
	    line-height: 0.5rem;
	    font-size: 0.4rem;
	    text-align: center;
	    color: #239aff;
	}
	p{
		width: 100%;
	    height: 0.4rem;
	    line-height: 0.4rem;
	    font-size: 0.3rem;
	    text-align: center;
	    color: #aaaaaa !important;
	    margin-bottom: 0.4rem;
	}
	.ghandle{
		height: 0.5rem;
	    position: absolute;
	    top: 0.65rem;
	    right: 0.4rem;
	    a{
	    	height: 100%;
		    line-height: 0.5rem;
		    font-size: 0.35rem;
		    color: #333333;
	    }
	    i{
	    	
	    }
	}
}
	
</style>