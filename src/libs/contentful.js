import * as contentful from 'contentful';
import { createClient } from 'contentful-management';

export const client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const managementClient = createClient({
	accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
});
