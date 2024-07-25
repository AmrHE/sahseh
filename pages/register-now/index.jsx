import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-input-2';

import { client } from '../../src/libs/contentful';
import { useContentContext } from '../../src/context/ContentContext';

import 'react-phone-input-2/lib/style.css';
import Form2 from '../../src/components/register/Form2';
import Image from 'next/image';

import banner from '../../public/register-banner.svg';

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
				<div className="container pt-24 px-52 lg:pt-40">
					<h1 className="text-[46px] mt-12 mb-10 text-center font-bold">
						شكرا لثقتكم الغالية في صح صح
					</h1>
					<div className="p-5 my-5 shadow-2xl rounded-[20px] bg-white">
						<Image src={banner} alt="banner" className="rounded-t-[20px]" />
						{submitted ? (
							<div className="text-[26px] px-[30px] py-5 bg-[#4CC65025] rounded-b-[20px] text-center">
								تم تعبئة البيانات بنجاح و سيتم التواصل معكم عن طريق فريق عمل صح
								صح
							</div>
						) : (
							<div className="text-[26px] px-[30px] py-5 bg-[#4CC65025] text-center rounded-b-[20px]">
								لتفعيل مبادرة صح صح لدى موظفيكم برجاء تعبئة البيانات و سيتم
								التواصل معكم في اقرب وقت
							</div>
						)}
						<Form2 />
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
	// const registerNow = await client.getEntry('NeVSDOOvG5rZTk3QXvlVZ', {
	// 	locale,
	// });
	const logo = await client.getAsset('2pn2arIDDrmXgxdHY0O7Tz');
	return {
		props: {
			registerNowData: {
				// registerNow: registerNow.fields,
				navbar: navbar.fields,
				footer: footer.fields,
				logo: logo.fields.file,
			},
		},
	};
}
