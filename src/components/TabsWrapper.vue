<script>
export default {
	emits: ['change-tab'],
	props: {
		tabHeading: {
			type: Array,
			required: true,
		},
		activeTab: {
			type: Number,
			required: true,
		},
	},
	methods: {
		changeTab() {
			this.$emit('change-tab', index)
		},
	},
}
</script>

<template>
	<!-- tab titile -->
	<div class="grid md:grid-cols-[auto,1fr] md:gap-x-12 gap-y-12">
		<div
			class="border-gray-700/40 md:flex-col md:border-l-2 md:border-b-0 md:border-t-0 flex justify-around pb-4 pl-4 text-sm text-gray-400 border-b-2"
		>
			<button
				v-for="(heading, index) in tabHeading"
				:key="index"
				@click="$emit('change-tab', index)"
				:class="{
					'tab-active tab-active-border': activeTab === index,
				}"
				class="relative text-left capitalize cursor-pointer"
			>
				{{ heading.name }}
			</button>
		</div>

		<slot />
	</div>
</template>
