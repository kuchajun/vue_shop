<template>
	<div>
		2333
		<h2>{{list}}</h2>
	</div>
</template>
<script type="text/javascript">
	import axios from '../assets/js/config.js';
	import checkSsid from '../assets/js/filter.js'
	export default{
		data(){
			return{
				list:""
			}
		},
		beforeCreate(){
//				function checkSsid (ssid) {
//				    var itemName = 'testssid';
//				    var localssid = localStorage.getItem(itemName);
//				
//				    if (typeof(ssid) === 'string') {
//				        //  设置ssid
//				        if (!localssid) localStorage.setItem(itemName, ssid);
//				       // console.log("参数为string")
//				    } else {
//				        //  取ssid，如果有，就赋值
//				        if (typeof(ssid) !== 'object') ssid = {}
//				        if (localssid) ssid[itemName] = localssid;
//				    	return ssid;
//				    }
//				}
//				console.log(checkSsid)
//				var data=checkSsid
				//console.log(data)
//				axios({
//					  method:'post',
//					  url: 'CheckLogin',
//					  data:data
//					})
//					.then((response) => {
//						//checkSsid(response.data.testssid)
//					    console.log(response);
//					  	
//					    
//					})
					
					
//				axios({
//					  method:'post',
//					  url: 'ArticleList',
//					  data:data
//					})
//					.then((response) => {
//						checkSsid(response.data.testssid)	
//					    console.log(response);
//					    this.list=response.data.datas
//					    
//					})
			
			
		},
		methods:{
			
			
			
		}
	}
</script>
<style lang="scss">
	
</style>