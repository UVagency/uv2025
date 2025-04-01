
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['TheBasics', 'sans-serif'],
				'mono': ['TheBasicsMono', 'monospace'],
			},
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
					'bg': '#F9F9F9',                  // Changed from #f9f8e2 to #F9F9F9
					'text': '#333333',                // Changed from #5a6b36 to #333333
					'tag-bg': '#6BD8D7',              // Changed from #5a6b36 to #6BD8D7
					'tag-text': '#ffffff',            // Kept as #ffffff
					'divider': '#6BD8D7',             // Changed from #5a6b36 to #6BD8D7
					'highlight': '#F8C84F',           // Changed from #d4d118 to #F8C84F
					'white-tag-bg': '#ffffff',        // Kept as #ffffff
					'white-tag-text': '#6BD8D7',      // Changed from #5a6b36 to #6BD8D7
					'about-bg': '#299b9a',            // Changed from #283618 to #299b9a
					'footer-text': '#f1f1f1',         // Kept as #f1f1f1
					'footer-muted': '#a0a0a0',        // Kept as #a0a0a0
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
