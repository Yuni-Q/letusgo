import Document, { Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

import { GlobalStyle } from '../common/styledComponents';

export default class CustomDocument extends Document<any> {
	static async getInitialProps(context: any) {
		const initialProps = await Document.getInitialProps(context);
		const sheet = new ServerStyleSheet();
		const page = context.renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();

		return {
			...initialProps,
			...page,
			styleTags,
			helmet: Helmet.renderStatic(),
		};
	}

	render() {
		// const { publicRuntimeConfig } = getConfig();
		const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
		const htmlAttrs = htmlAttributes.toComponent();
		const bodyAttrs = bodyAttributes.toComponent();
		return (
			<html lang="ko" dir="ltr" {...htmlAttrs}>
				<head>
					<script async src="https://www.googletagmanager.com/gtag/js?id=UA-110658480-1" />
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5KMDZP4');
            `,
						}}
					/>
					<link href="/static/reset.css" rel="stylesheet" />
					{this.props.styleTags}
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
					/>
					<title>let us: Go! 2019 Summer</title>
					<meta name="description" content="letusgo" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://letusgo.app" />
					<meta property="og:title" content="let us: Go! 2019 Summer" />
					<meta property="og:image" content="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/ogImg.png" />
					<meta property="og:description" content="let us: Go! 2019 Summer" />
					<meta property="og:site_name" content="let us: Go! 2019 Summer" />
					<meta property="og:locale" content="ko" />
					{Object.values(helmet).map((el: any) => el.toComponent())}
					<link rel="shortcut icon" href="https://letusgo-front.s3.ap-northeast-2.amazonaws.com/favicon.ico" />
					<link rel="manifest" href="/static/manifest.json" />
					<meta name="theme-color" content="black" />
					<GlobalStyle />
				</head>
				<body {...bodyAttrs}>
					<noscript>
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-MPFSK4P"
							style={{
								display: 'none',
								visibility: 'hidden',
								width: '0',
								height: '0',
							}}
						/>
					</noscript>
					<Main />
					{process.env.NODE_ENV === 'production' && (
						<script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />
					)}
					<NextScript />
				</body>
			</html>
		);
	}
}
