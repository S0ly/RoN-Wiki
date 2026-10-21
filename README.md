# Reign of Nether Wiki

Community wiki for [Reign of Nether](https://github.com/SoLegendary/reignofnether), the RTS mod for Minecraft. Built with [Astro Starlight](https://starlight.astro.build), styled after reignofnether.net and the RoN Launcher.

## Develop

Requires Node 18+ and pnpm.

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static site in dist/
pnpm preview   # serve dist/ (search only works here, not in dev)
```

## Writing pages

Pages live in `src/content/docs/`. Each folder is a sidebar section and lists its pages automatically, so adding a page is just adding a `.md` / `.mdx` file. See the in-wiki guide at `/contributing/writing-pages/` (`src/content/docs/contributing/writing-pages.mdx`) for frontmatter, callouts, images and components.

New sidebar section: create the folder, then add it to `sidebar` in `astro.config.mjs`.

## Layout

```
astro.config.mjs              site title, sidebar, social links, overrides
src/content/docs/             wiki pages
src/styles/theme.css          RoN skin (colours, fonts, panels, buttons)
src/styles/fonts.css          Pixelify Sans + Silkscreen @font-face
src/fonts/                    self-hosted font files (SIL OFL)
src/components/Theme*.astro   force dark mode, hide the theme picker
src/assets/, public/          logo, hero art, favicon, cursors
```

Colours and fonts come from `Ron-Website/assets/styles/tokens.css`; change them in `theme.css`, not per page.

Not an official Minecraft service. Not approved by or associated with Mojang or Microsoft.
