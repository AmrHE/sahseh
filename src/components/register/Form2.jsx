// 'use client';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createClient } from 'contentful-management';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import success from '../../../public/SUCCESS.svg';
import Image from 'next/image';
const client = createClient({
	accessToken: 'CFPAT-c6kkjOIVXHoD_I1L3_hPXgl4SZnpM6AAjka5hhJ5MD4',
});

const validationSchema = Yup.object().shape({
	orgName: Yup.string().required('Required'),
	managerName: Yup.string().required('Required'),
	jobTitle: Yup.string().required('Required'),
	officialEmail: Yup.string().email('Invalid email').required('Required'),
	phoneNumber: Yup.string().required('Required'),
	orgType: Yup.string().required('Required'),
	city: Yup.string().required('Required'),
	numEmployees: Yup.number().typeError('Must be a number').required('Required'),
	numWomenEmployees: Yup.number()
		.typeError('Must be a number')
		.required('Required'),
	howDidYouKnow: Yup.string().required('Required'),
	otherOrg: Yup.string(),
	otherMethod: Yup.string(),
	otherCity: Yup.string(),
});

const Form2 = () => {
	const [agree, setAgree] = useState(false);
	const [showAgreeError, setshowAgreeError] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	// localStorage.setItem('isSubmitted', false);
	// const isSumbitted = ;

	useEffect(() => {
		setSubmitted(JSON.parse(localStorage?.getItem('isSubmitted')));
	}, []);

	console.log(submitted);
	console.log(false);

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
				setSubmitted(true);
				localStorage.setItem('isSubmitted', true);
			} catch (error) {
				console.error('Error submitting form:', error);
			}
		}
	};

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
					console.log(props);
					return (
						<>
							{submitted ? (
								<div className="flex flex-col items-center justify-center gap-3 text-center">
									<Image alt="success" src={success} />
									<p className="font-bold text-[38px] leading-[185%]">
										شكرا لأنك هنا..
									</p>
									<p className="font-semibold text-[22px] leading-[185%]">
										فريق الصحصحه بيشوفون لو جدولهم فاضي بيتواصلون معكم للتنسيق{' '}
									</p>
									<p className="text-[#22721A] leading-[185%] text-2xl mx-56">
										علما أنه صندوق الصحصحه هديه وبدون اي مقابل مادي فقط فيه رسوم
										رمزيه للتوصيل .
									</p>
								</div>
							) : (
								<Form>
									{/* Organization Name */}
									<div className="flex flex-col mt-5">
										<label className="mb-3 text-[22px]" htmlFor="orgName">
											اسم الجهة
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
											اسم المسؤول
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
											المسمى الوظيفي
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
									<div className="flex gap-6">
										{/* Managers Email */}
										<div className="flex flex-col mt-5 basis-1/2">
											<label
												className="mb-3 text-[22px]"
												htmlFor="officialEmail"
											>
												الإيميل الرسمي
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
												رقم الجوال
											</label>
											<PhoneInput
												name="phoneNumber"
												id="phoneNumber"
												country={'sa'}
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
									<div className="flex gap-6">
										<div
											className={`flex flex-col mt-5 ${
												props.values.orgType.includes('أخرى')
													? 'basis-1/2'
													: 'w-full'
											}`}
										>
											<label className="mb-3 text-[22px]" htmlFor="orgType">
												نوع الجهة
											</label>
											<Field
												className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
												as="select"
												id="orgType"
												name="orgType"
											>
												<option value="" label="اختر جهة" />
												<option value="قطاع حكومي" label="قطاع حكومي" />
												<option value="قطاع خاص" label="قطاع خاص" />
												<option value="جامعه" label="جامعه" />
												<option value="مدرسه" label="مدرسه" />
												<option value="جهه أخرى" label="جهه أخرى" />
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
													اسم الجهة
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
									<div className="flex gap-6">
										<div
											className={`flex flex-col mt-5 ${
												props.values.city.includes('أخرى')
													? 'basis-1/2'
													: 'w-full'
											}`}
										>
											<label className="mb-3 text-[22px]" htmlFor="city">
												المدينة
											</label>
											<Field
												className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
												as="select"
												id="city"
												name="city"
											>
												<option value="" label="اختر مدينة" />
												<option value="الرياض" label="الرياض" />
												<option value="جده" label="جده" />
												<option value="الدمام" label="الدمام" />
												<option value="الخبر" label="الخبر" />
												<option
													value="المدينه المنوره"
													label="المدينه المنوره"
												/>
												<option value="مكه المكرمه" label="مكه المكرمه" />
												<option value="الأحساء" label="الأحساء" />
												<option value="أخرى" label="أخرى" />
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
													اسم المدينة
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

									<div className="flex gap-6">
										{/* Males Number */}
										<div className="flex flex-col mt-5 basis-1/2">
											<label
												className="mb-3 text-[22px]"
												htmlFor="numEmployees"
											>
												عدد الموظفين
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
												عدد الموظفات:
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
									<div className="flex gap-6">
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
												كيف عرفت عن برنامج صح صح؟
											</label>
											<Field
												className="bg-[#F1F1F1] border border-solid border-[#F1F1F1] h-[60px] outline-none px-5 rounded-[10px]"
												as="select"
												id="howDidYouKnow"
												name="howDidYouKnow"
											>
												<option value="" label="اختر اجابة" />

												<option value="عن طريق صديق" label="عن طريق صديق" />
												<option
													value="عن طريق السوشال ميديا"
													label="عن طريق السوشال ميديا"
												/>
												<option value="شركه أخرى" label="شركه أخرى" />
												<option value="الإعلام" label="الإعلام" />
												<option value="أخرى" label="أخرى" />
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
														اسم الشركة
													</label>
												) : (
													<label
														className="mb-3 text-[22px]"
														htmlFor="otherMethod"
													>
														تفاصيل
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
										<p className="font-semibold mb-5 text-[26px]">الاشتراطات</p>
										<div className="flex items-center">
											<p className="size-3 me-5 bg-[#4CAF50] rounded-full"></p>
											<p className="text-xl font-semibold leading-[166%]">
												شهاده شكر موجهه لمؤسس المبادره{' '}
												<span className="text-[#227C25] text-2xl">
													الأستاذ /أحمد الغندور
												</span>
											</p>
										</div>

										<div className="flex items-center">
											<p className="size-3 me-5 bg-[#4CAF50] rounded-full"></p>
											<p className="text-xl font-semibold leading-[166%]">
												شهاده شكر موجهه{' '}
												<span className="text-[#227C25] text-2xl">
													لبرنامج صح صح
												</span>
											</p>
										</div>

										<div className="flex items-center">
											<p className="size-3 me-5 bg-[#4CAF50] rounded-full"></p>
											<p className="text-xl font-semibold leading-[166%]">
												التنويه عن زياره برنامج صح صح لدى موظفي الجهه التي سوف
												يتم تفعيل المبادره فيها{' '}
											</p>
										</div>
										<div className="lg:mb-12 ms-8">
											<p
												onClick={() => setAgree(!agree)}
												className={`py-4 mt-5 text-lg font-semibold text-center transition duration-500 border-b border-black border-solid cursor-pointer w-28 lg:w-44 ${
													agree
														? 'bg-[#D5E8D6]'
														: 'hover:text-white hover:bg-blue-primary'
												}`}
											>
												اوافق
											</p>
											{showAgreeError && (
												<span className="text-sm text-red-500">
													يجب ان توافق اولا
												</span>
											)}
										</div>
									</div>

									<div className="flex justify-end">
										<button
											type="submit"
											className="bg-yellow-primary h-[60px] w-80 font-semibold text-lg rounded-xl my-12"
										>
											Submit
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

export default Form2;
