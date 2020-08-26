<template>
	<main class="main">
		<div class="main__background-img">
			<picture>
				<source
					srcset="@/assets/bg.webp 1x, @/assets/bg_2x.webp 2x"
					type="image/webp"
				/>
				<img src="@/assets/bg.jpg" alt="" srcset="@/assets/bg_2x.jpg 2x" />
			</picture>
		</div>
		<div class="container">
			<TheContacts />
			<Form />
		</div>
	</main>
</template>
<script>
import TheContacts from "./TheContacts";
import Form from "./Form";
export default {
	components: {
		TheContacts,
		Form,
	},
};
</script>
