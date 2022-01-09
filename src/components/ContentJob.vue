<script>
	export default {
		data: () => ({
			profileData: [
				{
					label: 'about',
					heading: 'about me',
					text: [
						'I enjoy building modern web applications that help bring people closer to technology. My interest in building web-app & web design began back in 2018 when I started my own buisness & needed to reach my customers.',
						'I began to code more in 2020 using fantatsic recourses like Free-Code-Camp & any other recources I could find; Learning the basics of HTML, CSS & JavaScript. ',
						'A list of my current core web technologies im  workinhg with',
					],
					technologies: [
						'Javascript (ES6+)',
						'Vue Js',
						'Nuxt Js',
						'Tailwind CSS',
						'Meilisearch',
						'Cloudflare',
					],
				},
				{
					label: 'experience',
					heading: "were iv'e worked",
					jobs: [
						{
							name: 'love nature',
							timeInJob: {
								start: 'June 2021',
								end: 'current',
							},
							position: ['developer online store'],
							duties: [
								'Ux/Ui Developer & Maintainer',
								'updating store inventory',
							],
							website: 'lovenature.ie',
						},
						{
							name: 'nourish',
							timeInJob: {
								start: 'january 2019',
								end: 'march 2021',
							},
							position: ['assistanst manager', 'manager'],
							duties: ['2'],
							website: 'nourish.ie',
						},
						{
							name: 'natural living',
							timeInJob: {
								start: 'january 2019',
								end: 'march 2021',
							},
							position: ['owner', 'manager'],
							duties: ['3'],
						},
					],
				},
				{
					label: 'work',
					heading: "some projects i've built",
					text: 'Hi, My name is Ciaran',
				},
				{
					label: 'contact',
					heading: 'let\s connect',
					text: "i'm currenlty looking for new opertunities to work as a frontend developer. If you feel I would be a great fit for your company or team, feel free to reach out at anytime.  ",
				},
			],
			activeTab: 0,
		}),

		methods: {
			changeTab(index) {
				this.activeTab = index;
			},
		},
	};
</script>

<template>
	<section>
		<ul
			class="gap-24 grid grid-cols-[repeat(auto-fill,minmax(450px,900px))] justify-center"
		>
			<li
				v-for="(data, index) in profileData"
				:key="data.index"
				class="card card-shadow card-content"
			>
				<div class="card-heading">
					<div
						class="text-base after:content-['◍'] after:text-[8px] after:mx-1"
					>
						{{ (index += 1) }}
					</div>

					<h2>
						{{ data.heading }}
					</h2>
				</div>

				<!-- show if personal information -->
				<div
					v-if="data.label === 'about'"
					class="grid grid-cols-[2fr,1fr] justify-items-center card-content-inner"
				>
					<div class="space-y-4">
						<p v-for="data in data.text" :key="data.index" class="">
							{{ data }}
						</p>
					</div>

					<img
						class="w-40 h-40 rounded-md"
						src="~/img/ciaran-store.jpeg"
						alt=""
					/>

					<ul class="justify-self-start grid grid-cols-2 gap-2 mt-4">
						<li
							v-for="(data, index) in data.technologies"
							:key="index"
							class="flex"
						>
							<img src="~/icons/play-arrow.svg" alt="" />
							{{ data }}
						</li>
					</ul>
				</div>

				<!-- {{ show if job information  }} -->
				<div class="card-content-inner" v-if="data.label == 'experience'">
					<TabsWrapper
						:tab-heading="data.jobs"
						:active-tab="activeTab"
						@change-tab="changeTab"
					>
						<Tabs :job-info="data.jobs" :active-tab="activeTab"> </Tabs>
					</TabsWrapper>
				</div>

				<!-- show if contact information -->
				<template v-if="data.label == 'contact'">
					<button
						class="px-4 py-2 mt-4 text-white border-2 border-orange-300 rounded-md"
					>
						Say hi
					</button>
				</template>
			</li>
		</ul>
	</section>
</template>

<style lang="postcss" scoped>
	.card-heading {
		@apply grid
		grid-cols-[auto,auto,1fr]
		items-center
		gap-x-3
		mr-2
		w-full
		capitalize
		text-2xl
		text-white;

		&::after {
			content: '';
			@apply block
			w-full  
			max-w-xs
			h-1 
			 bg-gray-100/10;
		}
	}
</style>
