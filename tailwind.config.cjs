/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				touch: { max: '639px' },
				tablet: { min: '640px', max: '1023px' },
				'tablet-up': { min: '640px' },
				'tablet-down': { max: '1023px' },
				laptop: { min: '1024px', max: '1279px' },
				'laptop-up': { min: '1024px' },
				'laptop-down': { max: '1279px' },
				desktop: { min: '1280px' }
			},
			colors: {
				primary: '#ce452a',
				"black-0": '#222'
			}
		},
	},
	plugins: [],
}
