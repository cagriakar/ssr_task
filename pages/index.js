import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Head from 'next/head';
import React from 'react';
import { FIRST_SITE_DOMAIN, SECOND_SITE_DOMAIN } from '../src/constants/domainOptions';
import Copyright from '../src/Copyright';
import DomainFirstLayout from '../src/domain1/DomainFirstLayout';
import DomainSecondLayout from '../src/domain2/DomainSecondLayout';
import mockData from '../src/mock/mockData';

export default function Index({ currentDomainName, data, meta: pageMeta }) {
	const meta = {
		title: currentDomainName === FIRST_SITE_DOMAIN ? 'Website-1' : 'Website-2',
		description:
			currentDomainName === FIRST_SITE_DOMAIN ? 'This is Website-1' : ' This is Website-2',
		...pageMeta
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta content={meta.description} name='description' />
				<meta property='og:site_name' content={meta.title} />
				<meta property='og:description' content={meta.description} />
				<meta property='og:title' content={meta.title} />
				<meta name='twitter:title' content={meta.title} />
				<meta name='twitter:description' content={meta.description} />
				<meta content='width=device-width, initial-scale=1' name='viewport' />
			</Head>

			<Container maxWidth='md'>
				<Box mt={4}>
					{/*
						// * render based on currentDomainName
					 */}
					{currentDomainName === FIRST_SITE_DOMAIN && <DomainFirstLayout data={data} />}
					{currentDomainName === SECOND_SITE_DOMAIN && <DomainSecondLayout data={data} />}
				</Box>
				<Copyright currentDomainName={currentDomainName} />
			</Container>
		</>
	);
}

export async function getServerSideProps({ req, res }) {
	// Fetch data from external API
	// const requestAPI = req.headers.host === FIRST_SITE_DOMAIN ? url_for_website1 : url_for_website2
	// const res = await fetch(requestAPI)
	// const data = await res.json()

	const currentDomainName = req.headers.host;

	// const currentDomainName = FIRST_SITE_DOMAIN;

	// * Mock Fetch data from external API
	const data = mockData.filter(({ domain }) => domain === currentDomainName);

	res.setHeader('Cache-Control', 'public, s-maxage=1, stale-while-revalidate=59');

	return {
		props: {
			currentDomainName: req.headers.host,
			// currentDomainName,
			data
		}
	};
}
