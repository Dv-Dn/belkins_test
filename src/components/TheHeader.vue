<template>
	<header class="header d_f ai_c">
		<div class="header__container ai_c">
			<Icon name="burger" width="28px" height="21px" />
			<Icon name="logo" width="90px" height="29px" class="header__logo" />
			<div></div>
			<a href="mailto:sales@belkins.io">sales@belkins.io</a>
			<span class="header__vertical-line"></span>
			<a href="tel:1302261593" class="header__phone">+1 302 2615 393 USA</a>
			<div></div>
			<Button small>Free consultation</Button>
			<Button small white border>Login</Button>
		</div>
	</header>
</template>
<script>
import Icon from "./UI/Icon";
import Button from "./UI/Button";
export default {
	components: {
		Icon,
		Button,
	},
};
</script>
