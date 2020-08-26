<template>
	<div id="app">
		<TheHeader />
		<TheMain />
		<TheFooter />
	</div>
</template>

<script>
import { TheFooter, TheHeader, TheMain } from "./components";
export default {
	name: "App",
	components: { TheFooter, TheHeader, TheMain },
};
</script>

<style lang="scss">
@import "~@/scss/main";
</style>
