<script>
	export default {
		props: {
			jobInfo: {
				type: Array,
				required: true,
			},
			activeTab: {
				type: Number,
				required: true,
			},
		},
	};
</script>

<template>
	<div>
		<div
			v-for="(data, index) in jobInfo"
			:key="index"
			v-show="activeTab == index"
		>
			<!-- job position & link to buisness site -->
			<div class="flex justify-between">
				<div class="capitalize">{{ data.name }}</div>

				<div v-if="data.website">
					<a :href="data.website" target="_blank" class="tab-active"
						>@ {{ data.website }}</a
					>
				</div>
			</div>

			<div class="mt-4">
				<div class="text-sm text-gray-400">
					{{ data.timeInJob.start }} - {{ data.timeInJob.end }}
					<span class="tab-active"> | </span>
					{{ data.position[0] }}{{ data.position[1] }}
				</div>

				<div class="border-gray-100/10 pt-6 mt-6 border-t-2">
					<div>Core responsibilities:</div>

					<ul class="mt-4 space-y-4">
						<li
							v-for="(dutie, index) in data.duties"
							:key="index"
							class="flex items-center gap-4"
						>
							<svg
								class="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="rgb(194 65 12)"
							>
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
							</svg>
							{{ dutie }}
						</li>
					</ul>
				</div>

				<!-- {{ data.duties }} -->
			</div>
		</div>
	</div>
</template>
