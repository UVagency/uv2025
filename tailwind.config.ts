import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
       content: [
               "./index.html",
               "./src/**/*.{ts,tsx}",
       ],
	prefix: "",
	theme: {
		fontFamily: {
			sans: ['Open Sans'],
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'portfolio': {
					'bg': '#F5F6E8',           // Soft warm cream (updated)
					'text': '#3D4A28',         // Deep olive green (updated)
					'tag-bg': '#3D4A28',       // Deep olive green for tags (updated)
					'tag-text': '#ffffff',     // White text for tags
					'divider': '#84806E',      // Grayish olive (updated)
					'highlight': '#EACB5D',    // Soft muted yellow (updated)
					'white-tag-bg': '#ffffff', // White
					'white-tag-text': '#3D4A28', // Deep olive green (updated)
					'about-bg': '#3D4A28',     // Deep olive green (same as text, updated)
					'footer-text': '#F5F6E8',  // Same as bg (updated)
					'footer-muted': '#84806E', // Grayish olive (updated)
					'accent': '#6BD8D7',       // UV turquoise (same)
					'text-secondary': '#84806E', // Grayish olive for secondary text (updated)
					'muted-purple': '#A493A4', // Soft lavender gray (new)
					'soft-pink': '#EBA3A9',    // Warm dusty pink (new)
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				},
				'slide-in-right': {
					from: { 
						transform: 'translateX(100%)',
						opacity: '0' 
					},
					to: { 
						transform: 'translateX(0)',
						opacity: '1' 
					}
				},
				'slide-out-right': {
					from: { 
						transform: 'translateX(0)',
						opacity: '1' 
					},
					to: { 
						transform: 'translateX(100%)',
						opacity: '0' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
				'slide-out-right': 'slide-out-right 0.3s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
