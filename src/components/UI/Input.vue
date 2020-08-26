<template>
	<div class="input">
		<div class="input__control" @click="inputFocus">
			<label class="input__label">{{ label }}</label>
			<input
				class="input__field"
				type="text"
				:placeholder="placeholder"
				ref="input"
				:value="value"
				@input="$emit('input', $event.target.value)"
			/>
			<Icon :name="icon" width="20px" height="20px" v-if="icon && showIcon" />
		</div>
	</div>
</template>
<script>
import Icon from "./Icon";
export default {
	components: { Icon },
	props: {
		icon: {
			type: String,
			required: false,
		},
		showIcon: Boolean,
		label: {
			type: String,
		},
		placeholder: String,
		value: String,
	},
	methods: {
		inputFocus() {
			this.$refs.input.focus();
		},
	},
};
</script>
