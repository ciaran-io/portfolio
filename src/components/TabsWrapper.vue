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
				this.$emit('change-tab', index);
			},
		},
	};
</script>

<template>
	<!-- tab titile -->
	<div class="grid md:grid-cols-[auto,1fr] gap-12">
		<ul
			class="md:max-h-[180px] justify-evenly flex flex-col gap-4 pl-4 text-sm text-gray-400 capitalize border-l-2 border-gray-700/40"
		>
			<li
				v-for="(heading, index) in tabHeading"
				:key="index"
				@click="$emit('change-tab', index)"
				:class="{
					'tab-active tab-active-border': activeTab === index,
				}"
				class="relative cursor-pointer"
			>
				{{ heading.name }}
			</li>
		</ul>

		<slot />
	</div>
</template>
