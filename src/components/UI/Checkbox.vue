<template>
	<label class="checkbox">
		<input
			v-bind="$attrs"
			:checked="!!checked"
			@input="$emit('input', $event.target.checked)"
			type="checkbox"
			class="checkbox__input"
		/>
		<span class="checkbox__label">{{ label }}</span>
	</label>
</template>
<script>
export default {
	inheritAttrs: false,
	props: { label: String, checked: Boolean },
};
</script>
