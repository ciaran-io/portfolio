import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'path'

export default defineNuxtConfig({
	// Source directory
	srcDir: 'src/',

	//aliases
	alias: {
		icons: resolve(__dirname, './src/assets/images/icons/'),
		img: resolve(__dirname, './src/assets/images/'),
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'portfolio - Ciarant.dev',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/css/main.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: ['~/components/', '~/components/navigation'],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					'tailwindcss/nesting': {},
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
})
