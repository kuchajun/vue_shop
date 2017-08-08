<template>
	<div id="mains">
		<router-view></router-view>
		<bottomnav>
		</bottomnav>
	</div>
</template>
<script type="text/javascript">
	import bottomnav from "./bottomnav.vue"
	export default{
		components:{
			bottomnav
		}
	}
</script>
<style lang="scss">
	
</style>