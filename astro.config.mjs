// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Reign of Nether Wiki',
			description: 'The community wiki for Reign of Nether, the RTS mod for Minecraft.',
			logo: { src: './src/assets/icon.png', alt: 'Reign of Nether' },
			favicon: '/favicon.ico',
			customCss: ['./src/styles/fonts.css', './src/styles/theme.css'],
			// The RoN website is dark only, so the wiki is too.
			components: {
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			head: [
				{ tag: 'meta', attrs: { name: 'color-scheme', content: 'dark' } },
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#0d0305' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
			],
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/jJV5zK3hT9' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/SoLegendary/reignofnether' },
			],
			// Each group lists its folder automatically: drop a page in, it shows up.
			sidebar: [
				{ label: 'Getting Started', items: [{ autogenerate: { directory: 'getting-started' } }] },
				{ label: 'Launcher', items: [{ autogenerate: { directory: 'launcher' } }] },
				{ label: 'Factions', items: [{ autogenerate: { directory: 'factions' } }] },
				{ label: 'Game Modes', items: [{ autogenerate: { directory: 'game-modes' } }] },
				{ label: 'Multiplayer', items: [{ autogenerate: { directory: 'multiplayer' } }] },
				{ label: 'Mapmaking', items: [{ autogenerate: { directory: 'mapmaking' } }] },
				{ label: 'Contributing', items: [{ autogenerate: { directory: 'contributing' } }] },
			],
		}),
	],
});
