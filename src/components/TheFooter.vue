<template>
	<footer class="footer d_f ai_c bg_white">
		<div class="ai_c jc_sa container">
			<img
				:key="index"
				v-for="(item, index) in footerItems"
				:src="require('@/assets/clients/' + item.name + '.png')"
				:alt="item.alt"
			/>
		</div>
	</footer>
</template>
<script>
export default {
	data: () => ({
		footerItems: [
			{ name: "helios", alt: "Helios" },
			{ name: "WSI", alt: "WSI" },
			{ name: "ccoc", alt: "Columbus" },
			{ name: "apexlogistics", alt: "Apexlogistics" },
		],
	}),
};
</script>
