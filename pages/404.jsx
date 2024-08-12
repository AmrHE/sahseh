import React, { useEffect } from 'react';
import { useContentContext } from '../src/context/ContentContext';
import { client, managementClient } from '../src/libs/contentful';
import img from '../public/404.webp';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ErrorPage = ({ errorPageData }) => {
	const { setNavbar, mediaFiles, setMediaFiles, setHomeContent, setFooter } =
		useContentContext();

	const router = useRouter();

	useEffect(() => {
		setNavbar(errorPageData?.navbar);
		setFooter(errorPageData?.footer);
		setMediaFiles({
			...mediaFiles,
			logo: errorPageData?.logo,
			whiteLogo: errorPageData?.whiteLogo,
			careLogo: errorPageData?.careLogo,
			couponLogo: errorPageData?.couponLogo,
		});
	}, [errorPageData]);

	return (
		<div className="h-[87.5vh] bg-green-lightest">
			<div className="container flex flex-col items-center justify-center mx-auto">
				<Image src={img} alt="not found" />
				<p className="text-4xl font-bold mb-[14px]">
					{errorPageData?.errorPageContent.title}
				</p>
				<p className="text-[22px]">
					{errorPageData?.errorPageContent.description}
				</p>

				<button
					onClick={() => router.push('/')}
					className="px-5 py-3 my-8 text-xl font-semibold transition duration-500 rounded-xl bg-yellow-primary hover:bg-green-secondary"
				>
					{errorPageData?.errorPageContent.cta}
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;
export async function getStaticProps({ locale }) {
	const errorPageContent = await client.getEntry('7obrOredyf3qb3lTCU4wEY', {
		locale,
	});
	const navbar = await client.getEntry('4Gg2tT8MmLwkIQyYyhTckP', {
		locale,
	});
	const footer = await client.getEntry('7Hmn6qQE2OZ6X4mkzoSfwe', {
		locale,
	});
	const logo = await client.getAsset('2pn2arIDDrmXgxdHY0O7Tz', {
		locale,
	});
	const whiteLogo = await client.getAsset('1hk88EcrYjfrohZJuLEie2', {
		locale,
	});
	const couponLogo = await client.getAsset('tiYfuNDOSWFFfSZRIvL7I', {
		locale,
	});
	const careLogo = await client.getAsset('4acavYIbVXnmQ2NGhWRFja', {
		locale,
	});

	const space = await managementClient.getSpace(
		process.env.CONTENTFUL_SPACE_ID
	);

	return {
		props: {
			errorPageData: {
				errorPageContent: errorPageContent.fields,
				navbar: navbar.fields,
				footer: footer.fields,
				logo: logo.fields.file,
				whiteLogo: whiteLogo.fields.file,
				careLogo: careLogo.fields.file,
				couponLogo: couponLogo.fields.file,
			},
		},
	};
}
