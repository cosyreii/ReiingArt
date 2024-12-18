import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				white: '#f9f2f2',
				pale: 'f0d8d8',
				pink: '#faa0bb',
				translucent: '#f0d8d8a5'
			}
		}
	},

	plugins: [typography]
} satisfies Config;
