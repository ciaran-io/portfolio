<script>
export default {
	data: () => ({
		navigation: ['about', 'experience', 'projects', 'contact'],
	}),
}
</script>

<template>
	<header
		class="wrapper gutter-side bg-primary-charcoal-transparent sticky top-0 py-4 border-b-2 border-orange-700"
	>
		<div
			class="grid grid-cols-[1fr,auto] items-center card card-spacing-base card-shadow"
		>
			<div>
				<img src="~/icons/logo.svg" alt="" width="125px" height="30px" />
			</div>

			<button class="md:hidden self-end">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-8 h-8 text-[#ec591f] stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</button>

			<div class="md:gap-x-5 md:flex hidden text-gray-300 capitalize">
				<ul class="md:gap-x-4 md:items-center flex">
					<li v-for="(menu, index) in navigation" :key="index">
						<a :href="`#${index}`">
							{{ menu }}
						</a>
					</li>
				</ul>
				<button class="gap-x-2 text-neon-orange by flex items-center">
					Resume

					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-4 h-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
						/>
					</svg>
				</button>
			</div>
		</div>
	</header>
</template>
