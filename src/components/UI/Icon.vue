<template>
	<div
		class="icon-block"
		:style="{ margin }"
		v-html="require('!!html-loader!@/assets/icons/' + name + '.svg')"
	></div>
</template>
<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		margin: {
			type: String,
			default: "0",
		},
		width: {
			type: String,
			default: "30px",
		},
		height: {
			type: String,
			default: "30px",
		},
	},
	mounted() {
		this.$el.firstChild.removeAttribute("viewBox");
		if (this.height) {
			this.$el.firstChild.setAttribute("height", this.height);
		}
		if (this.width) {
			this.$el.firstChild.setAttribute("width", this.width);
		}
	},
};
</script>
