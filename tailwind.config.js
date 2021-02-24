module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				grey: "#f2f3f5",
				white: "#ffffff",
				blue: "#344fba"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
