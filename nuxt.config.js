import { defineNuxtConfig } from '@nuxt/bridge'
import { resolve } from 'path'

export default defineNuxtConfig({
	// Source directory
	srcDir: 'src/',

	//aliases
	alias: {
		icons: resolve(__dirname, './src/assets/images/icons/'),
		img: resolve(__dirname, './src/assets/images/'),
	},

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'portfolio - Ciarant.dev',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/css/main.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: ['~/components/', '~/components/navigation'],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				'tailwindcss/nesting': {},
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},

	// Tailwind modile config
	tailwindcss: {
		cssPath: '~/assets/css/main.css',
		configPath: 'tailwind.config.js',
		viewer: false,
	},

	// Nuxt image module
	image: {
		presets: {
			profile: {
				modifiers: {
					fit: 'cover',
					format: 'webp',
					quality: '85',
				},
			},
		},
	},
})
