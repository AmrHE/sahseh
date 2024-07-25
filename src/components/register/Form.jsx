import { useState } from 'react';
import { createClient } from 'contentful-management';

const client = createClient({
	accessToken: 'CFPAT-c6kkjOIVXHoD_I1L3_hPXgl4SZnpM6AAjka5hhJ5MD4',
});

const ContactForm = () => {
	const [managerName, setManagerName] = useState('asdasd');
	const [organizationName, setOrganizationName] = useState('asdasd');
	const [jobTitle, setJobTitle] = useState('asasd');
	const [phoneNumber, setPhoneNumber] = useState('015');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await client
				.getSpace('wuaodgwk96ui')
				.then((space) => space.getEnvironment('master'))
				.then((environment) =>
					environment.createEntry('formSubmissions', {
						fields: {
							organizationName: {
								'en-US': organizationName,
								'ar-SA': organizationName,
							},
							jobTitle: { 'en-US': jobTitle, 'ar-SA': jobTitle },
							phoneNumber: { 'en-US': phoneNumber, 'ar-SA': phoneNumber },
							managerName: { 'en-US': managerName, 'ar-SA': managerName },
						},
					})
				);
			setSubmitted(true);
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	return (
		<div>
			{submitted ? (
				<p>Thank you for your submission!</p>
			) : (
				<form onSubmit={handleSubmit}>
					<div>
						<label>Manager Name</label>
						<input
							type="text"
							value={managerName}
							onChange={(e) => setManagerName(e.target.value)}
							required
						/>
					</div>
					<div>
						<label>Org Name</label>
						<input
							type="text"
							value={organizationName}
							onChange={(e) => setOrganizationName(e.target.value)}
							required
						/>
					</div>
					<div>
						<label>Phone Number</label>
						<input
							type="text"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							required
						/>
					</div>
					<div>
						<label>Job Title</label>
						<input
							type="text"
							value={jobTitle}
							onChange={(e) => setJobTitle(e.target.value)}
							required
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			)}
		</div>
	);
};

export default ContactForm;
