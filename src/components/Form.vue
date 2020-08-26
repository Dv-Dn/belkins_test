<template>
	<section class="form">
		<h2 class="form__title">Let's do great work together.</h2>
		<span class="form__hr" />
		<div class="form-steps">
			<span class="form-steps__step"
				>Step {{ step }}
				<span class="form-steps__slash">/</span>
				2</span
			>
			<span class="form-steps__circle"></span>
			<h3 class="form-steps__title">Your contact details</h3>
		</div>
		<FormFirstStep @handleNextStep="handleNextStep" v-show="step == 1" />
		<FormSecondStep
			@handleBack="handleBack"
			@handleSend="handleSend"
			v-show="step == 2"
		/>
	</section>
</template>
<script>
import FormFirstStep from "./FormFirstStep";
import FormSecondStep from "./FormSecondStep";
export default {
	components: { FormFirstStep, FormSecondStep },
	data: () => ({
		step: 1,
	}),
	methods: {
		handleNextStep(isError) {
			if (!isError) this.step = 2;
		},
		handleBack() {
			this.step = 1;
		},
		handleSend() {},
	},
};
</script>
