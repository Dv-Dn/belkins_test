<template>
	<form>
		<div class="form__group">
			<Input
				v-model.trim="$v.firstName.$model"
				:icon="$v.firstName.$invalid ? 'close' : 'accepted'"
				:showIcon="touched"
				label="First Name"
				placeholder="Your first name"
			/>
			<Input
				v-model.trim="$v.lastName.$model"
				:icon="$v.lastName.$invalid ? 'close' : 'accepted'"
				:showIcon="touched"
				label="Last Name"
				placeholder="Your last name"
			/>
		</div>
		<div class="form__row">
			<Input
				v-model.trim="$v.email.$model"
				label="Your corporate email"
				placeholder="me@companymail.com"
				:icon="$v.email.$invalid ? 'close' : 'accepted'"
				:showIcon="touched"
			/>
		</div>
		<div class="form__row">
			<Input
				v-model.trim="$v.phone.$model"
				label="Your phone"
				placeholder="Your phone number"
				:icon="$v.phone.$error ? 'close' : 'accepted'"
				:showIcon="touched"
			/>
		</div>
		<div class="form__navigation">
			<Button class="form-btn form-btn__primary" @click.prevent="handleNextStep"
				>Next step <Icon name="arrow_r" width="8px" height="14px"
			/></Button>
		</div>
	</form>
</template>
<script>
import Input from "./UI/Input";
import Button from "./UI/Button";
import Icon from "./UI/Icon";
import { required, minLength } from "vuelidate/lib/validators";

export default {
	components: {
		Input,
		Button,
		Icon,
	},
	data: () => ({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		touched: false,
	}),
	validations: {
		firstName: {
			required,
			minLength: minLength(4),
		},
		lastName: {
			required,
			minLength: minLength(4),
		},
		email: {
			alpha: (val) =>
				/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
					val
				),
		},
		phone: {
			numeric: (val) => /^[+]{0,1}380([0-9]{9})$/.test(val),
		},
	},
	methods: {
		handleNextStep() {
			// this.$v.$touch;
			this.touched = true;
			// const data = {
			// 	firstName: this.firstName,
			// 	lastName: this.lastName,
			// 	email: this.email,
			// 	phone: this.phone,
			// };
			// this.$store.dispatch("weq", data);
			// const error = this.$v.$invalid && this.$v.$error;
			this.$emit("handleNextStep", this.$v.$error);
		},
	},
};
</script>
