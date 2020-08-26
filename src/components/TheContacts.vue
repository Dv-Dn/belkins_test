<template>
	<section class="contacts">
		<h2 class="contacts__title">Want to reach out to us directly?</h2>

		<div class="contacts__content">
			<p class="contacts__subtitle">Speak with a strategist:</p>
			<a href="tel:+13022615393" class="contact-button">
				<Button btnBlock big>
					<Icon name="phone" width="40px" height="40px" margin="0 15px 0 0" />+
					1 302 261 5393</Button
				></a
			>
			<a href="mailto:sales@belkins.io" class="contact-button"
				><Button btnBlock white big class="contact-button__white"
					><Icon
						name="mail"
						width="40px"
						height="40px"
						margin="0 15px 0 0"
					/>sales@belkins.io</Button
				></a
			>
			<a href="mailto:marketing@belkins.io" class="contact-button">
				<Button btnBlock white big class="contact-button__white"
					><Icon
						name="mail"
						width="40px"
						height="40px"
						margin="0 15px 0 0"
					/>marketing@belkins.io</Button
				></a
			>
			<p class="contacts__info-text">
				Connect with the Belkins Marketing Team for partnership, promotions, or
				events. We look forward to hearing from you!
			</p>
			<div class="contacts__partners d_f ai_c js_sb">
				<img
					:key="index"
					v-for="(item, index) in images"
					:src="require('@/assets/' + item.name + '.png')"
					:alt="item.alt"
				/>
			</div>
		</div>
	</section>
</template>
<script>
import Button from "./UI/Button";
import Icon from "./UI/Icon";
export default {
	components: { Button, Icon },
	data: () => ({
		links: [
			{
				text: "+ 1 302 261 5393",
				href: "tel:+13022615393",
				icon: "phone",
			},
			{
				text: "sales@belkins.io",
				href: "mailto:sales@belkins.io",
				icon: "mail",
			},
			{
				text: "marketing@belkins.io",
				href: "mailto:marketing@belkins.io",
				icon: "mail",
			},
		],
		images: [
			{ name: "clutch", alt: "Clutch" },
			{ name: "columbus_partner", alt: "Columbus" },
			{ name: "1percent", alt: "Pledge" },
		],
	}),
};
</script>
