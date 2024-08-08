'use client';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createClient } from 'contentful-management';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import success from '../../../public/SUCCESS.svg';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const client = createClient({
	accessToken: 'CFPAT-c6kkjOIVXHoD_I1L3_hPXgl4SZnpM6AAjka5hhJ5MD4',
});

const RegisterForm = ({ registerNowData }) => {
	const [agree, setAgree] = useState(false);
	const [showAgreeError, setshowAgreeError] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const validationSchema = Yup.object().shape({
		orgName: Yup.string().required(
			registerNowData.registerPageContent.requiredErrMsg
		),
		managerName: Yup.string().required(
			registerNowData.registerPageContent.requiredErrMsg
		),
		jobTitle: Yup.string().required(
			registerNowData.registerPageContent.requiredErrMsg
		),
		officialEmail: Yup.string()
			.email(registerNowData.registerPageContent.invalidEmail)
			.required(registerNowData.registerPageContent.requiredErrMsg),
		phoneNumber: Yup.string().required(
			registerNowData.registerPageContent.requiredErrMsg
		),
		orgType: Yup.string().required(
			registerNowData.registerPageContent.requiredErrMsg
		),
		city: Yup.string().required(
			registerNowData.registerPageContent.requiredErrMsg
		),
		numEmployees: Yup.number()
			.typeError(registerNowData.registerPageContent.numberErrMsg)
			.min(0)
			.required(registerNowData.registerPageContent.requiredErrMsg),
		numWomenEmployees: Yup.number()
			.typeError(registerNowData.registerPageContent.numberErrMsg)
			.min(0)
			.required(registerNowData.registerPageContent.requiredErrMsg),
		howDidYouKnow: Yup.string().required(
			registerNowData.registerPageContent.requiredErrMsg
		),
		otherOrg: Yup.string(),
		otherMethod: Yup.string(),
		otherCity: Yup.string(),
	});

	const handleSubmit = async (values) => {
		if (!agree) {
			setshowAgreeError(true);
		} else {
			setshowAgreeError(false);
			try {
				const res = await client
					.getSpace('wuaodgwk96ui')
					.then((space) => space.getEnvironment('master'))
					.then((environment) =>
						environment.createEntry('formSubmissions', {
							fields: {
								organizationName: {
									'en-US': values.orgName,
								},
								managerTitle: {
									'en-US': values.jobTitle,
								},
								managerEmail: {
									'en-US': values.officialEmail,
								},
								phoneNumber: {
									'en-US': values.phoneNumber,
								},
								managerName: {
									'en-US': values.managerName,
								},
								organizationType: {
									'en-US': values.otherOrg
										? values.orgType + ': ' + values.otherOrg
										: values.orgType,
								},
								city: {
									'en-US': values.city,
								},
								maleEmployees: {
									'en-US': values.numEmployees,
								},
								femaleEmployees: {
									'en-US': values.numWomenEmployees,
								},
								howDidYouKnowUs: {
									'en-US': values.howDidYouKnow,
								},
							},
						})
					);

				emailjs
					.send(
						'service_0g1yolm',
						'template_fhnjvvn',
						{
							from_name: values.managerName,
							to_name: 'Sah Seh',
							from_email: values.managerEmail,
							to_email: 'asda8888f@gmail.com',
							message: `
								Organization Name: ${values.orgName}, 
								Organization Type: ${
									values.otherOrg
										? values.orgType + ': ' + values.otherOrg
										: values.orgType
								}, 
								Mangager name: ${values.managerName}, 
								Mangager email: ${values.officialEmail}, 
								Manager Title: ${values.jobTitle}, 
								phone: ${values.phoneNumber}, 
								city: ${values.city}, 
								Number of males: ${values.numEmployees}, 
								Number of females: ${values.numWomenEmployees}, 
								How did you know us: ${values.howDidYouKnow}, 
							`,
						},
						'6kJDS350_qD1SYmGb'
					)
					.then(
						() => {
							setSubmitted(true);
							localStorage.setItem('isSubmitted', true);
						},
						(err) => {
							return;
						}
					);
				setSubmitted(true);
				localStorage.setItem('isSubmitted', true);
			} catch (error) {
				console.error('Error submitting form:', error);
			}
		}
	};

	useEffect(() => {
		setSubmitted(JSON.parse(localStorage?.getItem('isSubmitted')));
	}, []);

	return (
		<div className="mt-20">
			<Formik
				initialValues={{
					orgName: '',
					managerName: '',
					jobTitle: '',
					officialEmail: '',
					phoneNumber: '',
					orgType: '',
					city: '',
					numEmployees: '',
					numWomenEmployees: '',
					howDidYouKnow: '',
					otherMethod: '',
					otherOrg: '',
					otherCity: '',
				}}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					handleSubmit(values);
				}}
			>
				{(props) => {
					return (
						<>
							{submitted ? (
								<div className="flex flex-col items-center justify-center gap-3 text-center">
									<Image alt="success" src={success} />
									<p className="font-bold text-[38px] leading-[185%]">
										{registerNowData.registerPageContent.success1}
									</p>
									<p className="font-semibold text-[22px] leading-[185%]">
										{registerNowData.registerPageContent.success2}
									</p>
									<p className="text-[#22721A] leading-[185%] text-2xl mx-56">
										{registerNowData.registerPageContent.success3}
									</p>
								</div>
							) : (
								<Form>
									{/* Organization Name */}
									<div className="flex flex-col mt-5">
										<label className="mb-3 text-[22px]" htmlFor="orgName">
											{registerNowData.registerPageContent.orgName}
										</label>
										<Field
											className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
											id="orgName"
											name="orgName"
											type="text"
										/>
										<ErrorMessage
											className="text-sm text-red-600"
											name="orgName"
											component="div"
										/>
									</div>

									{/* Managers Name */}
									<div className="flex flex-col mt-5">
										<label className="mb-3 text-[22px]" htmlFor="managerName">
											{registerNowData.registerPageContent.managersName}
										</label>
										<Field
											className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
											id="managerName"
											name="managerName"
											type="text"
										/>
										<ErrorMessage
											className="text-sm text-red-600"
											name="managerName"
											component="div"
										/>
									</div>

									{/* Managers Title */}
									<div className="flex flex-col mt-5">
										<label className="mb-3 text-[22px]" htmlFor="jobTitle">
											{registerNowData.registerPageContent.managersTitle}
										</label>
										<Field
											className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
											id="jobTitle"
											name="jobTitle"
											type="text"
										/>
										<ErrorMessage
											className="text-sm text-red-600"
											name="jobTitle"
											component="div"
										/>
									</div>

									{/* MANAGERS EMAIL & PHONE NUMBER */}
									<div className="flex flex-col md:flex-row md:gap-6">
										{/* Managers Email */}
										<div className="flex flex-col mt-5 basis-1/2">
											<label
												className="mb-3 text-[22px]"
												htmlFor="officialEmail"
											>
												{registerNowData.registerPageContent.email}
											</label>
											<Field
												className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
												id="officialEmail"
												name="officialEmail"
												type="text"
											/>
											<ErrorMessage
												className="text-sm text-red-600"
												name="officialEmail"
												component="div"
											/>
										</div>

										{/* Managers Phone */}
										<div className="flex flex-col mt-5 basis-1/2">
											<label className="mb-3 text-[22px]" htmlFor="phoneNumber">
												{registerNowData.registerPageContent.phoneNumber}
											</label>
											<PhoneInput
												name="phoneNumber"
												id="phoneNumber"
												country={'sa'}
												inputStyle={{
													width: '100%',
													backgroundColor: '#f1f1f1',
													border: '1px solid #f1f1f1',
													height: '60px',
													outline: 'none',
													borderRadius: '10px',
												}}
												buttonStyle={
													{
														// width: '50px',
														// paddingLeft: '20px',
														// paddingRight: '20px',
													}
												}
												onlyCountries={['sa', 'eg', 'ae', 'jo', 'bh']}
												value={props.values.phoneNumber}
												onChange={(phone) =>
													props.setFieldValue('phoneNumber', phone)
												}
												// onChange={(phone) => setPhoneNumber(phone)}
											/>
											<ErrorMessage
												className="text-sm text-red-600"
												name="phoneNumber"
												component="div"
											/>
										</div>
									</div>

									{/* ORG TYPE */}
									<div className="flex flex-col md:flex-row md:gap-6">
										<div
											className={`flex flex-col mt-5 ${
												props.values.orgType.includes('أخرى')
													? 'basis-1/2'
													: 'w-full'
											}`}
										>
											<label className="mb-3 text-[22px]" htmlFor="orgType">
												{registerNowData.registerPageContent.orgType}
											</label>
											<Field
												className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
												as="select"
												id="orgType"
												name="orgType"
											>
												<option
													value=""
													label={registerNowData.orgTypes.choose}
												/>
												<option
													value="قطاع حكومي"
													label={registerNowData.orgTypes.type1}
												/>
												<option
													value="قطاع خاص"
													label={registerNowData.orgTypes.type2}
												/>
												<option
													value="جامعه"
													label={registerNowData.orgTypes.type3}
												/>
												<option
													value="مدرسه"
													label={registerNowData.orgTypes.type4}
												/>
												<option
													value="جهه أخرى"
													label={registerNowData.orgTypes.others}
												/>
											</Field>
											<ErrorMessage
												className="text-sm text-red-600"
												name="orgType"
												component="div"
											/>
										</div>
										{props.values.orgType.includes('أخرى') && (
											<div className="flex flex-col mt-5 basis-1/2">
												<label className="mb-3 text-[22px]" htmlFor="otherOrg">
													{registerNowData.registerPageContent.orgType2}
												</label>

												<Field
													className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
													id="otherOrg"
													name="otherOrg"
													type="text"
												/>
												<ErrorMessage
													className="text-sm text-red-600"
													name="otherOrg"
													component="div"
												/>
											</div>
										)}
									</div>

									{/* City */}
									<div className="flex flex-col md:flex-row md:gap-6">
										<div
											className={`flex flex-col mt-5 ${
												props.values.city.includes('أخرى')
													? 'basis-1/2'
													: 'w-full'
											}`}
										>
											<label className="mb-3 text-[22px]" htmlFor="city">
												{registerNowData.registerPageContent.city}
											</label>
											<Field
												className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
												as="select"
												id="city"
												name="city"
											>
												<option
													value=""
													label={registerNowData.cities.chooseCity}
												/>
												<option
													value="الرياض"
													label={registerNowData.cities.city1}
												/>
												<option
													value="جده"
													label={registerNowData.cities.city2}
												/>
												<option
													value="الدمام"
													label={registerNowData.cities.city3}
												/>
												<option
													value="الخبر"
													label={registerNowData.cities.city4}
												/>
												<option
													value="المدينه المنوره"
													label={registerNowData.cities.city5}
												/>
												<option
													value="مكه المكرمه"
													label={registerNowData.cities.city6}
												/>
												<option
													value="الأحساء"
													label={registerNowData.cities.city7}
												/>
												<option
													value="أخرى"
													label={registerNowData.cities.others}
												/>
											</Field>
											<ErrorMessage
												className="text-sm text-red-600"
												name="city"
												component="div"
											/>
										</div>

										{props.values.city.includes('أخرى') && (
											<div className="flex flex-col mt-5 basis-1/2">
												<label className="mb-3 text-[22px]" htmlFor="otherCity">
													{registerNowData.registerPageContent.city2}
												</label>

												<Field
													className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
													id="otherCity"
													name="otherCity"
													type="text"
												/>
												<ErrorMessage
													className="text-sm text-red-600"
													name="otherCity"
													component="div"
												/>
											</div>
										)}
									</div>

									<div className="flex flex-col md:flex-row md:gap-6">
										{/* Males Number */}
										<div className="flex flex-col mt-5 basis-1/2">
											<label
												className="mb-3 text-[22px]"
												htmlFor="numEmployees"
											>
												{registerNowData.registerPageContent.malesNum}
											</label>
											<Field
												className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
												id="numEmployees"
												name="numEmployees"
												type="text"
											/>
											<ErrorMessage
												className="text-sm text-red-600"
												name="numEmployees"
												component="div"
											/>
										</div>

										{/* Females Number */}
										<div className="flex flex-col mt-5 basis-1/2">
											<label
												className="mb-3 text-[22px]"
												htmlFor="numWomenEmployees"
											>
												{registerNowData.registerPageContent.femalesNum}
											</label>
											<Field
												className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
												id="numWomenEmployees"
												name="numWomenEmployees"
												type="text"
											/>
											<ErrorMessage
												className="text-sm text-red-600"
												name="numWomenEmployees"
												component="div"
											/>
										</div>
									</div>

									{/* How did you know us? */}
									<div className="flex flex-col md:flex-row md:gap-6">
										<div
											className={`flex flex-col mt-5 ${
												props.values.howDidYouKnow.includes('أخرى')
													? 'basis-1/2'
													: 'w-full'
											}`}
										>
											<label
												className="mb-3 text-[22px]"
												htmlFor="howDidYouKnow"
											>
												{registerNowData.registerPageContent.howDidYouKnowUs}
											</label>
											<Field
												className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
												as="select"
												id="howDidYouKnow"
												name="howDidYouKnow"
											>
												<option
													value=""
													label={registerNowData.methods.choose}
												/>

												<option
													value="عن طريق صديق"
													label={registerNowData.methods.method1}
												/>
												<option
													value="عن طريق السوشال ميديا"
													label={registerNowData.methods.method2}
												/>
												<option
													value="شركه أخرى"
													label={registerNowData.methods.otherCompany}
												/>
												<option
													value="الإعلام"
													label={registerNowData.methods.method4}
												/>
												<option
													value="أخرى"
													label={registerNowData.methods.others}
												/>
											</Field>
											<ErrorMessage
												className="text-sm text-red-600"
												name="howDidYouKnow"
												component="div"
											/>
										</div>
										{props.values.howDidYouKnow.includes('أخرى') && (
											<div className="flex flex-col mt-5 basis-1/2">
												{props.values.howDidYouKnow.includes('شركه') ? (
													<label
														className="mb-3 text-[22px]"
														htmlFor="otherMethod"
													>
														{
															registerNowData.registerPageContent
																.howDidYouKnowUs2
														}
													</label>
												) : (
													<label
														className="mb-3 text-[22px]"
														htmlFor="otherMethod"
													>
														{
															registerNowData.registerPageContent
																.howDidYouKnowUs3
														}
													</label>
												)}
												<Field
													className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
													id="otherMethod"
													name="otherMethod"
													type="text"
												/>
												<ErrorMessage
													className="text-sm text-red-600"
													name="officialEmail"
													component="div"
												/>
											</div>
										)}
									</div>

									{/* TERMS & CONDITIONS */}
									<div className="mt-12 border-b border-black border-dashed">
										<p className="font-semibold mb-5 text-base lg:text-[26px]">
											{registerNowData.registerPageContent.conditions}
										</p>
										<div className="flex items-start lg:items-center">
											<p className="min-w-3 min-h-3 mt-3 lg:mt-0 me-5 bg-[#4CAF50] rounded-full"></p>
											<p className="lg:text-xl font-semibold leading-[166%]">
												{registerNowData.registerPageContent.condition1}{' '}
												<span className="text-[#227C25] lg:text-2xl block lg:inline">
													{
														registerNowData.registerPageContent
															.condition1Highlight
													}
												</span>
											</p>
										</div>

										<div className="flex items-start lg:items-center">
											<p className="min-w-3 min-h-3 mt-3 lg:mt-0 me-5 bg-[#4CAF50] rounded-full"></p>
											<p className="lg:text-xl font-semibold leading-[166%]">
												{registerNowData.registerPageContent.condition2}{' '}
												<span className="text-[#227C25] lg:text-2xl block lg:inline">
													{
														registerNowData.registerPageContent
															.condition2Highlight
													}
												</span>
											</p>
										</div>

										<div className="flex items-start lg:items-center">
											<p className="min-w-3 min-h-3 mt-3 lg:mt-0 me-5 bg-[#4CAF50] rounded-full"></p>
											<p className="lg:text-xl font-semibold leading-[166%]">
												{registerNowData.registerPageContent.condition3}
											</p>
										</div>
										<div className="mb-12 ms-8">
											<p
												onClick={() => setAgree(!agree)}
												className={`py-4 mt-5 text-lg font-semibold text-center transition duration-500 border-b border-black border-solid cursor-pointer w-28 lg:w-44 ${
													agree
														? 'bg-[#D5E8D6]'
														: 'hover:text-white hover:bg-blue-primary'
												}`}
											>
												{registerNowData.registerPageContent.conditionsCta}
											</p>
											{showAgreeError && (
												<span className="text-sm text-red-500">
													{registerNowData.registerPageContent.agreeErrMsg}
												</span>
											)}
										</div>
									</div>

									<div className="flex justify-end">
										<button
											type="submit"
											className="bg-yellow-primary h-[60px] w-80 font-semibold text-lg rounded-xl my-12"
										>
											{registerNowData.registerPageContent.formCta}
										</button>
									</div>
								</Form>
							)}
						</>
					);
				}}
			</Formik>
		</div>
	);
};

export default RegisterForm;
