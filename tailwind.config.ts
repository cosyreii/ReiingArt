import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				white: '#f9f2f2',
				pale: '#fcf0f0',
				pink: '#faa0bb',
				red: "#eb676e",
				translucent: '#fcf0f0a5',
				grey: "#171515",
			}
		}
	},

	plugins: [typography]
} satisfies Config;
