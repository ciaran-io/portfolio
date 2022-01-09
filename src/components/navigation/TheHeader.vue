<script>
	export default {
		data: () => ({
			navigation: ['about', 'experience', 'work', 'contact'],
		}),
	};
</script>

<template>
	<header>
		<div
			class="wrapper gutter-side pattern grid grid-cols-[1fr,auto] mt-4 pb-2 border-b-2 border-orange-700 md:items-center"
		>
			<div>
				<img src="~/icons/logo.svg" alt="" width="155px" height="30px" />
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

			<div class="gap-x-3 flex text-gray-300 capitalize">
				<ul class="flex gap-2">
					<li v-for="(menu, index) in navigation" :key="index">
						<a href=""> {{ (index += 1) }} {{ menu }} </a>
					</li>
				</ul>
				<button>Resume</button>
			</div>
		</div>
	</header>
</template>
