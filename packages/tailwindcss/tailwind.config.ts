import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: ["./default/ui/*.tsx", "./solid/ui/*.tsx", "./dev/*.tsx"],
	theme: {
		extend: {
			colors: {
				royal_blue: {
					50: "hsl(223.56 100% 85.69%)",
					100: "hsl(226.34 100% 80.2%)",
					200: "hsl(227.44 100% 74.71%)",
					300: "hsl(227.17 100% 68.82%)",
					400: "hsl(224.49 85.58% 59.22%)",
					500: "hsl(215.89 100% 41.96%)",
					600: "hsl(218.94 100% 36.86%)",
					700: "hsl(223.77 100% 31.18%)",
					800: "hsl(229.92 100% 24.51%)",
					900: "hsl(240 100% 18.24%)",
					950: "hsl(240 100% 14.9%)",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--kb-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--kb-accordion-content-height)" },
					to: { height: "0" },
				},
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"caret-blink": "caret-blink 1.25s ease-out infinite",
			},
			fontFamily: {
				sans: "Inter Variable",
			},
		},
	},
	plugins: [tailwindAnimate],
} satisfies Config;
