/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./index.html",
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))'
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))'
		  }
		},
		keyframes: {
			zoom: {
				"0%": { transform: "scale(0)", opacity: "0" },
    			"50%": { transform: "scale(0.40)" },  
    			"70%": { transform: "scale(1.1)" }, 
    			"90%": { transform: "scale(0.95)" }, 
    			"100%": { transform: "scale(1)" }
			},
			rotate: {
				"0%": { transform: "rotate(0deg)", opacity: "0" },
				"30%": { transform: "rotate(30deg)", opacity: "1" },
				"50%": { transform: "rotate(-15deg)" },
				"70%": { transform: "rotate(20deg)" },
				"100%": { transform: "rotate(0deg)" }
			},
			glitch: {
				'0%, 100%': {
				  clipPath: 'polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)',
				},
				'50%': {
				  clipPath: 'polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)',
				}
			  },
		  },
		animation: {
			"glitch": "glitch 1.5s infinite ease-in-out",
			"zoom": "zoom 0.5s  cubic-bezier(0.34, 1.56, 0.74, 1)",
			"rotate" : "rotate 0.5s ease-out"
		  },
	  }
	},
	plugins: [require("tailwindcss-animate")],
  }
  