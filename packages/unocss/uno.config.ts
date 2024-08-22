import {
	defineConfig,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";
import presetAnimations from "unocss-preset-animations";

export default defineConfig({
	presets: [
		presetUno(),
		presetAnimations(),
		presetWebFonts({
			fonts: {
				sans: {
					name: "Inter",
					italic: false,
					provider: "bunny",
					weights: [400, 500, 600, 700],
				},
			},
		}),
	],
	transformers: [transformerVariantGroup(), transformerDirectives()],
	theme: {
		colors: {
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
		animation: {
			keyframes: {
				"accordion-down":
					"{ from { height: 0 } to { height: var(--kb-accordion-content-height) } }",
				"accordion-up":
					"{ from { height: var(--kb-accordion-content-height) } to { height: 0 } }",
				"caret-blink": "{ 0%,70%,100% { opacity: 1 } 20%,50% { opacity: 0 } }",
			},
			timingFns: {
				"accordion-down": "ease-out",
				"accordion-up": "ease-out",
				"caret-blink": "ease-out",
			},
			durations: {
				"accordion-down": "300ms",
				"accordion-up": "300ms",
				"caret-blink": "1.25s",
			},
			counts: {
				"caret-blink": "infinite",
			},
		},
	},
});
