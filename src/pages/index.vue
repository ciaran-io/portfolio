<template>
	<div class="wrapper gutter-side grid grid-rows-[100vh,auto]">
		<section
			class="gap-y-8 md:gap-y-24 card card-shadow card-spacing-large md:h-max flex flex-col mt-16 text-left"
		>
			<div class="card card-shadow card-spacing-large text-5xl text-white">
				Hi, welcome to my website.
			</div>

			<div
				class="max-w-[40ch] text-gray-300 text-xl md:text-2xl md:place-self-center"
			>
				My name is Ciaran, I'm a frontend web developer from Ireland with a
				passion to learn everything in the web technology space & more!
			</div>
			<div class="md:text-2xl text-neon-orange text-xl font-medium">
				I build modern full stack web applications for todays web.
			</div>
		</section>

		<main class="mt-32">
			<ContentJob />
		</main>
	</div>
</template>
