module.exports = {
	content: [
		'./src/components/**/*.{js,vue,ts}',
		'./src/layouts/**/*.vue',
		'./src/pages/**/*.vue',
		'./src/plugins/**/*.{js,ts}',
		'./src/nuxt.config.{js,ts}',
	],
	theme: {
		extend: {
			colors: {
				'primary-charcoal': 'var(--primary-charcoal)',
				'primary-charcoal-light': 'var(--primary-charcoal-light)',
				'primary-charcoal-transparent': 'var(--primary-charcoal-transparent)',
				'yellow-orange': 'var(--yellow-orange)',
				'neon-orange': 'var(--neon-orange)',
				'primary-red': 'var(--primary-red)',
			},
		},
		plugins: [],
	},
}
