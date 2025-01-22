/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
		fontFamily: {
			miniature: ['OT Miniature', 'sans-serif'],
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	},
	  screens: {
		// Default Tailwind breakpoints
		sm: '640px',  // Small devices
		md: '768px',  // Medium devices
		lg: '1024px', // Large devices
		xl: '1280px', // Extra large devices
		'2xl': '1440px', // 2X Extra large devices
  
		// Custom breakpoints
		xs: '480px',    // Extra small devices
		'3xl': '1920px', // 3X Extra large devices
		custom: '2500px', // Custom screen size
	  },
  },
  plugins: [require("tailwindcss-animate")],
}

