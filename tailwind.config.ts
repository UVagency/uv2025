import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
					'bg': '#F5F6E8',           // Fondo cálido y suave
					'text': '#2C3E3D',         // Texto principal, más oscuro para mejor contraste
					'tag-bg': '#6BD8D7',       // Etiquetas con fondo accent
					'tag-text': '#ffffff',     // Texto blanco para contraste
					'divider': '#A5D4D3',      // Turquesa más suave para líneas/divisiones
					'highlight': '#6BD8D7',    // Igual al accent, elimina el amarillo
					'white-tag-bg': '#ffffff', // White
					'white-tag-text': '#2C3E3D', // Texto principal
					'about-bg': '#2C3E3D',     // Fondo oscuro para secciones destacadas
					'footer-text': '#F5F6E8',  // Mismo que bg
					'footer-muted': '#A5D4D3', // Divider color para footer
					'accent': '#6BD8D7',       // Color principal y único color de destaque
					'text-secondary': '#587574', // Gris verdoso para textos secundarios
					'muted-purple': '#93D8D7', // Muy tenue, reemplazo
					'smart-media': '#EACB5D',  // Color específico para Smart Media
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
        plugins: [tailwindcssAnimate],
} satisfies Config;
