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
					'bg': '#F5F6E8',           // Mantiene el fondo original
					'text': '#2C3E3D',         // Más oscuro para mejor contraste con el accent
					'tag-bg': '#6BD8D7',       // Accent color para tags
					'tag-text': '#ffffff',     // White text para contraste en tags
					'divider': '#AACFCF',      // Turquesa grisáceo suave
					'highlight': '#B1EBEA',    // Highlight más relacionado con la marca
					'white-tag-bg': '#ffffff', // White
					'white-tag-text': '#2C3E3D', // Texto principal
					'about-bg': '#2C3E3D',     // Fondo oscuro para secciones destacadas
					'footer-text': '#F5F6E8',  // Mismo que bg
					'footer-muted': '#AACFCF', // Divider color para footer
					'accent': '#6BD8D7',       // UV turquoise (sin cambios)
					'text-secondary': '#587574', // Neutro relacionado al accent
					'muted-purple': '#C0B7C1', // Desaturado
					'soft-pink': '#EACB5D',    // Opcional, solo si convive bien
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
                                'fade-in': {
                                        from: {
                                                opacity: '0',
                                                transform: 'translateY(10px)'
                                        },
                                        to: {
                                                opacity: '1',
                                                transform: 'translateY(0)'
                                        }
                                }
                        },
                        animation: {
                                'accordion-down': 'accordion-down 0.2s ease-out',
                                'accordion-up': 'accordion-up 0.2s ease-out',
                                'fade-in': 'fade-in 0.6s ease-out forwards'
                        }
                }
        },
        plugins: [require("tailwindcss-animate")],
} satisfies Config;
