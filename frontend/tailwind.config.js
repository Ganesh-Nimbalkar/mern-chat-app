/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"; // Import must be at the top

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui], // Correctly use daisyUI
};
