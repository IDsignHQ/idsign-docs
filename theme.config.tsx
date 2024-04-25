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
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			<meta name="apple-mobile-web-app-title" content="idSign" />
			<meta name="application-name" content="idSign" />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			<meta name="format-detection" content="telephone=no" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="msapplication-config" content="/browserconfig.xml" />
			<meta name="msapplication-tap-highlight" content="no" />
			<link rel="manifest" href="/manifest.json" />
			<link rel="shortcut icon" href="/favicon.ico" />
			<meta name="description" content="Trustless eSignature & Identity Protocol" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:url" content="https://docs.idsign.com" />
			<meta name="twitter:title" content="idSign | Docs" />
			<meta name="twitter:description" content="Trustless eSignature & Identity Protocol" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="idSign | Docs" />
			<meta property="og:description" content="Trustless eSignature & Identity Protocol" />
			<meta property="og:site_name" content="idSign | Docs" />
			<meta property="og:url" content="https://docs.idsign.com" />
			<meta property="og:image" content="/apple-touch-icon.png" />
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
