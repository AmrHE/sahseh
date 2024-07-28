import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '../../src/libs/contentful';
import { useContentContext } from '../../src/context/ContentContext';
import RegisterForm from '../../src/components/register/Form';

import banner from '../../public/register-banner.svg';
import bannerMob from '../../public/register-banner-mob.webp';

import 'react-phone-input-2/lib/style.css';

const RegisterNow = ({ registerNowData }) => {
	const { setNavbar, mediaFiles, setMediaFiles, setFooter } =
		useContentContext();
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		setSubmitted(JSON.parse(localStorage?.getItem('isSubmitted')));
	}, []);

	useEffect(() => {
		setFooter(registerNowData.footer);
		setNavbar(registerNowData.navbar);
		setMediaFiles({
			...mediaFiles,
			logo: registerNowData.logo,
		});
	}, [registerNowData]);

	return (
		<div className="sm:bg-[#95C4C2] lg:bg-transparent mb-32">
			<div className="bg-register-gradient">
				<div className="container pt-24 xl:px-52 lg:pt-40">
					<h1 className="text-2xl lg:text-[46px] mt-12 mb-10 text-center font-bold">
						{registerNowData.registerPageContent.header}
					</h1>
					<div className="p-5 my-5 shadow-2xl rounded-[20px] bg-white mx-5">
						<Image src={banner} alt="banner" className="rounded-t-[20px]" />
						{/* <Image src={bannerMob} alt="banner" className="block sm:hidden" /> */}
						{submitted ? (
							<div className="text-[16px] md:text-[26px] px-[30px] py-5 bg-[#4CC65025] rounded-b-[20px] text-center">
								{registerNowData.registerPageContent.subheaderSuccess}
							</div>
						) : (
							<div className="text-[16px] md:text-[26px] px-[30px] py-5 bg-[#4CC65025] text-center rounded-b-[20px]">
								{registerNowData.registerPageContent.subheaderRegister}
							</div>
						)}
						<RegisterForm registerNowData={registerNowData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterNow;

export async function getStaticProps({ locale }) {
	const navbar = await client.getEntry('4Gg2tT8MmLwkIQyYyhTckP', {
		locale,
	});
	const footer = await client.getEntry('7Hmn6qQE2OZ6X4mkzoSfwe', {
		locale,
	});
	const cities = await client.getEntry('5e9KIPwH0o14TAFynHz5RV', {
		locale,
	});
	const orgTypes = await client.getEntry('6wK9Z3XoZWWVIJhmEdrLe2', {
		locale,
	});
	const methods = await client.getEntry('NVRI0Zy6dUoPzqFbds88o', {
		locale,
	});
	const registerPageContent = await client.getEntry('ZpMYjjHzHpOiHToXiZW81', {
		locale,
	});
	// const registerNow = await client.getEntry('NeVSDOOvG5rZTk3QXvlVZ', {
	// 	locale,
	// });
	const logo = await client.getAsset('2pn2arIDDrmXgxdHY0O7Tz');
	return {
		props: {
			registerNowData: {
				// registerNow: registerNow.fields,
				registerPageContent: registerPageContent.fields,
				cities: cities.fields,
				orgTypes: orgTypes.fields,
				methods: methods.fields,
				navbar: navbar.fields,
				footer: footer.fields,
				logo: logo.fields.file,
			},
		},
	};
}
