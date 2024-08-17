import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

import LanguageSwitcher from '../LanguageSwitcher';
import { useContentContext } from '../../context/ContentContext';
import { navLinks } from '../../libs/navLinks';
import useBreakpoint from '../../hooks/useBreakpoints';

const Navbar = () => {
	const [CTA, setCTA] = useState(null);
	const [navItems, setNavItems] = useState(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { navbar, mediaFiles } = useContentContext();
	const router = useRouter();
	const breakpoint = useBreakpoint();

	useEffect(() => {
		if (navbar) {
			setCTA(navbar['registerNow']);
			setNavItems(
				Object.keys(navbar).reduce((acc, key) => {
					if (key !== 'entryTitle' && key !== 'registerNow') {
						acc[key] = navbar[key];
					}
					return acc;
				}, {})
			);
		}
	}, [navbar]);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	useEffect(() => {
		if (isMobileMenuOpen) {
			disableScroll();
		} else {
			enableScroll();
		}
	}, [isMobileMenuOpen]);

	const enableScroll = () => {
		window.onscroll = function () {};
	};

	const disableScroll = () => {
		// Get the current page scroll position in the vertical direction
		const scrollTop =
			window?.pageYOffset || document?.documentElement?.scrollTop;

		// Get the current page scroll position in the horizontal direction

		const scrollLeft =
			window?.pageXOffset || document?.documentElement?.scrollLeft; // if any scroll is attempted,
		// set this to the previous value
		window.onscroll = function () {
			window.scrollTo(scrollLeft, scrollTop);
		};
	};

	return (
		<nav className="w-full max-h-[120px] py-5 text-xl text-white navbar bg-navbar-gradient ">
			<div className="lg:px-5 xl:px-0 xl:container">
				<div className="items-start content-center justify-between px-5 md:flex lg:px-0 lg:items-center">
					{/* MOBILE MENU BTN && LOGO */}
					<div className="flex justify-between">
						{/* MOBILE MENU BUTTON */}
						<div className="px-5 pt-5 lg:hidden">
							<motion.button
								initial="hide"
								animate={isMobileMenuOpen ? 'show' : 'hide'}
								onClick={toggleMobileMenu}
								className="relative z-10 flex flex-col space-y-1"
							>
								<motion.span
									variants={{
										hide: {
											rotate: 0,
										},
										show: {
											rotate: 45,
											y: 7.5,
										},
									}}
									className="sticky block w-8 h-1 rounded-lg bg-green-darker"
								></motion.span>
								<motion.span
									variants={{
										hide: {
											opacity: 1,
										},
										show: {
											opacity: 0,
										},
									}}
									className="sticky block w-5 h-1 rounded-lg bg-green-darker"
								></motion.span>
								<motion.span
									variants={{
										hide: {
											rotate: 0,
										},
										show: {
											rotate: -45,
											y: -7.5,
										},
									}}
									className="sticky block w-8 h-1 rounded-lg bg-green-darker"
								></motion.span>
							</motion.button>
						</div>

						{/* LOGO */}
						<Link href="/">
							<div className="cursor-pointer ">
								<div className="xl:mx-8">
									{mediaFiles.whiteLogo && (
										<Image
											src={`http:${mediaFiles?.whiteLogo?.url}`}
											width={
												breakpoint === 'lg'
													? 85
													: breakpoint === 'xl'
													? 85
													: breakpoint === '2xl'
													? 85
													: 60
											}
											height={
												breakpoint === 'lg'
													? 85
													: breakpoint === 'xl'
													? 85
													: breakpoint === '2xl'
													? 85
													: 60
											}
											alt="sahseh whiteLogo"
											className=""
										/>
									)}
								</div>
							</div>
						</Link>
					</div>
					{/* DESKTOP NAVBAR ITEMS */}
					<div className="hidden lg:flex md:items-center">
						{navItems &&
							Object.values(navItems).map((item, i) => (
								<Link
									onClick={() => setIsMobileMenuOpen(false)}
									href={navLinks[Object.keys(navItems)[i]]}
									key={i}
									className="font-semibold capitalize md:mx-4"
								>
									{item}
								</Link>
							))}
					</div>
					{/* CTA && LANGUAGE SWITCHER*/}
					<div className="items-center justify-between hidden md:flex justify-self-end">
						{/* CALL TO ACTION BUTTON */}
						<div className="hidden sm:inline-block">
							<button
								onClick={() => router.push('/register-now')}
								className="px-8 py-5 text-sm font-semibold text-black capitalize transition duration-500 lg:text-base hover:bg-green-secondary bg-yellow-primary rounded-xl"
							>
								{CTA}
							</button>
						</div>

						{/* LANGUAGE SWITCHER */}
						<div className="hidden md:mx-5 md:inline-block">
							<LanguageSwitcher />
						</div>
					</div>
				</div>
			</div>

			{/* MOBILE MENU */}
			<div className="container z-[100] mx-auto md:mt-0">
				<AnimatePresence>
					{isMobileMenuOpen && (
						<MotionConfig
							transition={{
								type: 'spring',
								bounce: 0.1,
							}}
						>
							<motion.div
								key="mobile-nav"
								variants={{
									hide: {
										x: '-100%',
										transition: {
											type: 'spring',
											bounce: 0.1,
											when: 'afterChildren',
											staggerChildren: 0.25,
										},
									},
									show: {
										x: '0%',
										transition: {
											type: 'spring',
											bounce: 0.1,
											when: 'beforeChildren',
											staggerChildren: 0.25,
										},
									},
								}}
								initial="hide"
								animate="show"
								exit="hide"
								className="fixed z-[100] inset-0 flex flex-col justify-start p-6 space-y-10 bg-white right-[30%] lg:top-16 md:hidden"
							>
								<motion.ul
									variants={{
										hide: {
											y: '25%',
											opacity: 0,
										},
										show: {
											y: '0%',
											opacity: 1,
										},
									}}
									className="list-none divide-y-2 divide-gray-200"
								>
									{navItems &&
										Object.values(navItems).map((item, i) => (
											<li key={i} className="py-6 ">
												<Link
													onClick={() => setIsMobileMenuOpen(false)}
													href={navLinks[Object.keys(navItems)[i]]}
													className="font-semibold text-black capitalize"
												>
													{item}
												</Link>
											</li>
										))}
									<li className="py-6">
										<LanguageSwitcher className="text-black" />
									</li>
								</motion.ul>
								<motion.div
									variants={{
										hide: {
											y: '25%',
											opacity: 0,
										},
										show: {
											y: '0%',
											opacity: 1,
										},
									}}
									className="w-full h-1 bg-white/30"
								></motion.div>
								<button
									onClick={() => router.push('/register-now')}
									className="px-8 py-5 text-sm font-semibold text-black capitalize transition duration-300 lg:text-base hover:bg-green-secondary bg-yellow-primary rounded-xl"
								>
									{CTA}
								</button>
								<motion.ul
									variants={{
										hide: {
											y: '25%',
											opacity: 0,
										},
										show: {
											y: '0%',
											opacity: 1,
										},
									}}
									className="flex justify-center list-none gap-x-4"
								>
									<li className="flex items-center justify-center p-0 rounded-lg">
										{mediaFiles.logo && (
											<Image
												src={`http:${mediaFiles?.logo?.url}`}
												width={60}
												height={60}
												alt="sahseh logo"
											/>
										)}
									</li>
									<li className="flex items-center justify-center p-0 rounded-lg">
										{mediaFiles.careLogo && (
											<Image
												src={`http:${mediaFiles?.careLogo?.url}`}
												width={60}
												height={60}
												alt="sahseh logo"
											/>
										)}
									</li>
									<li className="flex items-center justify-center p-0 rounded-lg">
										{mediaFiles.couponLogo && (
											<Image
												src={`http:${mediaFiles?.couponLogo?.url}`}
												width={60}
												height={60}
												alt="sahseh couponLogo"
											/>
										)}
									</li>
								</motion.ul>
							</motion.div>
						</MotionConfig>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};

export default Navbar;
