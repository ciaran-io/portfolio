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
				heading: "let's connect",
				text: "i'm currenlty looking for new opertunities to work as a frontend developer. If you feel I would be a great fit for your company or team, feel free to reach out at anytime.  ",
			},
		],
		activeTab: 0,
	}),

	methods: {
		changeTab(index) {
			this.activeTab = index
		},
	},
}
</script>

<template>
	<section class="gap-y-24 md:gap-x-5 md:max-w-5xl grid mx-auto">
		<div
			v-for="(data, index) in profileData"
			:key="data.index"
			class="card card-shadow card-content card-spacing-large"
		>
			<div :id="index" class="content-heading">
				<h2>
					<span
						class="text-base after:content-['◍'] after:text-[8px] after:mx-1"
					>
						{{ (index += 1) }}
					</span>
					{{ data.heading }}
				</h2>
			</div>

			<!-- show if personal information -->
			<div
				v-if="data.label === 'about'"
				class="card-content-inner grid md:grid-cols-[2fr,1fr] gap-y-10"
			>
				<div class="space-y-10">
					<p v-for="(information, index) in data.text" :key="index">
						{{ information }}
					</p>
				</div>

				<div class="md:justify-self-center">
					<img
						src="~/img/ciaran-store.webp "
						loading="lazy"
						width="175"
						height="175"
						class="rounded-md"
						alt="profile of picture of ciaran in his business natural living"
					/>
				</div>

				<ul class="justify-self-start gap-x-6 gap-y-4 grid grid-cols-2">
					<li
						v-for="(data, index) in data.technologies"
						:key="index"
						class="gap-x-2 flex items-start"
					>
						<img
							src="~/icons/play-arrow.svg"
							alt=""
							width="20px"
							height="20px"
							loading="lazy"
						/>
						<div class="min-w-fit">
							{{ data }}
						</div>
					</li>
				</ul>
			</div>

			<!-- {{ show if job information  }} -->
			<div v-if="data.label == 'experience'" class="card-content-inner">
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
				<button class="default">Say hi</button>
			</template>
		</div>
	</section>
</template>

<style lang="postcss" scopped>
.content-heading {
	@apply grid
		items-center
		gap-x-3
		w-full
		capitalize
		text-2xl
		text-white;

	@screen md {
		@apply grid-cols-[auto,1fr];
	}

	&::after {
		content: '';
		@apply block
			w-full
			mx-3
			h-1
			 bg-gray-100/10;
	}
}
</style>
