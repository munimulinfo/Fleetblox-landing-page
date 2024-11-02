/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		keyframes: {
			scroll: {
				'0%': {
					transform: 'translateX(-100%)'
				},
				'100%': {
					transform: 'translateX(0)'
				}
			}
		},
		screens: {
			xxxs: '365px',
			xxs: '390px',
			xs: '440px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'2.5xl': '1700px',
			'3xl': '1920px',
			'4xl': '2560px',
			'5xl': '3200px',
			'6xl': '3840px',
			'7xl': '4480px',
			'8xl': '5120px',
			'9xl': '5760px',
			'10xl': '6400px'
		},
		colors: {
			p_light_blue: '#B8CBFC',
			p_dark_blue: '#174AD0',
			p_blue: '#2D65F2',
			bg_dark_blue: '#101031',
			bg_yellow: '#FBEECA',
			bg_green: '#F3FFEE',
			bg_powerd_blue: '#FAFAFF',
			bg_dusty_white: '#F7F7F7',
			bg_white: '#FFFFFF',
			ti_royel_blue: '#000E32',
			ti_dark_grey: '#333333',
			ti_grey: '#999999',
			ti_light_grey: '#DFDFDF',
			ti_light_black: '#303030',
			ti_black: '#151515',
			black: '#000000'
		},
		fontFamily: {
			montserrat: ["Montserrat", "sans-serif"],
			openSans: ["Open Sans", "sans-serif"]
		},
		extends: {
			fontSize: {
				B_title: '52px',
				R_title: '36px',
				M_title: '24px',
				S_title: '18px',
				ExS_title: '16px',
				testmonial_title: '26px',
				button_text_18: '18px',
				button_text_16: '16px',
				button_text_14: '14px',
				body_M_text: '16px',
				body_text: '14px',
				note_text: '12px'
			}
		},
		animation: {
			scroll: 'scroll 15s linear infinite'
		},
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
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
};