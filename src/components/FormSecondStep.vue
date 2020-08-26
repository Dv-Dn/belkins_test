<template>
	<form>
		<div class="form__group">
			<Input
				v-model.trim="$v.company.$model"
				:icon="$v.company.$invalid ? 'close' : 'accepted'"
				:showIcon="touched"
				label="Company Name"
				placeholder="Your company name"
			/>
			<Input
				v-model.trim="$v.industry.$model"
				:icon="$v.industry.$invalid ? 'close' : 'accepted'"
				:showIcon="touched"
				label="Industry"
				placeholder="Your industry"
			/>
		</div>
		<div class="form__row">
			<Input
				v-model.trim="$v.timeZone.$model"
				label="Preffered time and time zone"
				placeholder="Write the preffered time and time zone"
				:icon="$v.timeZone.$invalid ? 'close' : 'accepted'"
				:showIcon="touched"
			/>
		</div>
		<div class="form-interested">
			<span class="form-interested__title">Interested in:</span
			><span class="form-interested__error" v-if="$v.interested.$error"
				>Choose at least one service</span
			>
		</div>
		<div class="form__checkbox-group">
			<Checkbox
				:key="item.value"
				class="form__checkbox"
				v-for="item in interested"
				:value="item.value"
				:label="item.value"
				v-model="item.checked"
			/>
		</div>
		<div class="form__navigation">
			<Button class="form-btn form-btn__secondary" @click.prevent="handleBack">
				<Icon name="arrow_l" width="8px" height="14px" />Back</Button
			>
			<Button class="form-btn form-btn__primary" @click.prevent="handleSend"
				>Send message <Icon name="arrow_r" width="8px" height="14px"
			/></Button>
		</div>
	</form>
</template>
<script>
import Input from "./UI/Input";
import Button from "./UI/Button";
import Checkbox from "./UI/Checkbox";
import Icon from "./UI/Icon";
import { required, minLength } from "vuelidate/lib/validators";
const interestedValid = (value) => {
	return value.filter((el) => el.checked === true).length > 0;
};
export default {
	components: {
		Input,
		Button,
		Icon,
		Checkbox,
	},
	data: () => ({
		company: "",
		industry: "",
		timeZone: "",
		interested: [
			{ value: "List Building", checked: false },
			{ value: "Data Enrichment", checked: false },
			{ value: "Linkedin Outreach", checked: false },
			{ value: "Email Deliverability", checked: false },
			{ value: "Appointment Setting", checked: false },
		],

		touched: false,
	}),

	validations: {
		company: {
			required,
			minLength: minLength(4),
		},
		industry: {
			required,
			minLength: minLength(4),
		},
		timeZone: {
			minLength: minLength(4),
		},
		interested: {
			interestedValid,
		},
	},
	methods: {
		handleBack() {
			this.$emit("handleBack");
		},
		handleSend() {
			this.$v.$touch();
			this.$emit("handleSend");
		},
	},
};
</script>
