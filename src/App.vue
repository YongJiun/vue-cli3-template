<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<style lang="scss">

	@import './../src/style/global.scss';
	@import './../src/style/reset.scss';
	@import './../src/style/fonts.scss';

</style>
