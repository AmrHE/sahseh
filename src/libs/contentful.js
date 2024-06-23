import * as contentful from 'contentful';

const client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// export const fetchEntries = async (locale) => {
//   const entries = await client.getEntries({
//     content_type: 'blogPost',
//     locale: locale,
//   });
//   return entries.items;
// };

export default client;
