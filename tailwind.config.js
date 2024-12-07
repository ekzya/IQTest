/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
			},
			transitionProperty: {
				width: 'width',
				opacity: 'opacity',
			},
		},
	},
	plugins: [],
}

