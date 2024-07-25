import { createContext, useContext, useState } from 'react';

const ContentContext = createContext(null);

export const ContentContextProvider = ({ children }) => {
	const [navbar, setNavbar] = useState(null);
	const [mediaFiles, setMediaFiles] = useState({});
	const [homeContent, setHomeContent] = useState(null);
	const [aboutContent, setAboutContent] = useState(null);
	const [footer, setFooter] = useState(null);

	return (
		<ContentContext.Provider
			value={{
				navbar,
				setNavbar,
				mediaFiles,
				setMediaFiles,
				homeContent,
				setHomeContent,
				aboutContent,
				setAboutContent,
				footer,
				setFooter,
			}}
		>
			{children}
		</ContentContext.Provider>
	);
};

export const useContentContext = () => useContext(ContentContext);
