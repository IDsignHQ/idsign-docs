import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
	logo: <span>Docs | v.0.1.0-alpha</span>,
	docsRepositoryBase: 'https://github.com/IDsignHQ/docs/tree/main/',
	project: {
		link: 'https://github.com/idsignHQ'
	},
	footer: {
		text: ''
	},
	useNextSeoProps() {
		return {
			titleTemplate: 'Docs | idSign'
		}
	},
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:title" content="Docs | idSign" />
			<meta property="og:description" content="Official idSign Documentation" />
		</>
	),
	banner: {
		key: '0.1.0-alpha',
		text: (
			<a href="https://calendly.com/idsign" target="_blank">
        🏗 idSign is under-construction & building towards open-source. Interested in Collaborating? Book a Call →
			</a>
		)
	}
}

export default config
