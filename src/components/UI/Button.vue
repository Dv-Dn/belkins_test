<template>
	<button
		:class="[
			'button',
			{
				button_white: white,
				button_border: border,
				button_small: small,
				button_big: big,
				button_block: btnBlock,
				button_arrow: arrow,
				button_arrow_l: arrowL,
			},
		]"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot></slot>
	</button>
</template>
<script>
export default {
	inheritAttrs: false,
	props: {
		btnBlock: {
			type: Boolean,
			required: false,
			default: false,
		},
		white: {
			type: Boolean,
			required: false,
			default: false,
		},
		border: {
			type: Boolean,
			required: false,
			default: false,
		},
		big: {
			type: Boolean,
			required: false,
			default: false,
		},
		small: {
			type: Boolean,
			required: false,
			default: false,
		},
		arrow: Boolean,
		arrowL: Boolean,
	},
};
</script>
