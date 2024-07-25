import * as contentful from 'contentful';
import { createClient } from 'contentful-management';

export const client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const managementClient = createClient({
	accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
});

// export const fetchEntries = async (locale) => {
// 	const entries = await client.getEntries({
// 		content_type: 'blogPost',
// 		locale: locale,
// 	});
// 	return entries.items;
// };

// const res = await client.getEntry(process.env.CONTENTFUL_HOME_PAGE_ENTRY_ID);
