<template>
	<div>
		<TheHeader class="wrapper" />
		<slot />
		<LazyTheFooter />
	</div>
</template>

<style lang="postcss">
body {
	background-color: var(--primary-charcoal);
}
</style>
