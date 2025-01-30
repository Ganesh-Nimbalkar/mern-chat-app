/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"; // Importing in ESM style

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui], // Using daisyUI
};



