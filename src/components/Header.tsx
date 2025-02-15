"use client";
import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import styles from "@/styles/components/Header.module.css"
import {useTranslations} from "next-intl";
import MenuIcon from "@/components/icons/MenuIcon";
import {AnimatePresence, motion} from "framer-motion";
import {useParams} from "next/navigation";

const Header = () => {

	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const t = useTranslations('links');
	const { locale } = useParams();

	const links = [
		{
			text: t('aboutUs'),
			href: `/${locale}#aboutUs`,
		},
		{
			text: t('advantages'),
			href: `/${locale}#advantages`,
		},
		{
			text: t('ourClients'),
			href: `/${locale}#ourClients`,
		},
		{
			text: t('pricing'),
			href: `/${locale}#pricing`,
		},
		{
			text: t('privacyPolicy'),
			href: `/${locale}/privacy-policy`,
		},
		{
			text: t('terms'),
			href: `/${locale}/terms-and-conditions`,
		}
	];

	const closeMenuAfterScroll = () => {
		setTimeout(() => setIsOpenMenu(false), 800);
	}

	return (
		<>
			<motion.header
				transition={{ duration: 0.2 }}
				animate={isOpenMenu ? {height: '100vh'} : {height: 50}}
				className={`fixed z-3 flex flex-col w-full top-0 backdrop-blur-[8px]`}
			>
				<Container className={`flex items-center flex-shrink-0 justify-between ${styles.header}`}>
					<a
						id="#cpName"
						href={`/${locale}`}
						className="lexend-giga font-bold text-[color:--gold-color-1]"
					>
						ALFA PAY
					</a>
					<div className={`flex ${styles.lineLinks}`}>
						{links.map((link, i) =>
							<a
								key={i}
								href={link.href}
								className="geologica text-[color:--gold-color-1]"
							>
								{link.text}
							</a>
						)}
					</div>
					<button
						onClick={() => setIsOpenMenu(!isOpenMenu)}
						className={`flex items-center justify-center !border border-[color:--gold-color-1] ${styles.button}`}
					>
						<MenuIcon className="fill-[color:--gold-color-1]"/>
					</button>
				</Container>
				<AnimatePresence>
					{isOpenMenu && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={`flex flex-col ${styles.columnLinks}`}
						>
							{links.map((link, i) =>
								<a
									onClick={closeMenuAfterScroll}
									key={i}
									href={link.href}
									className="geologica text-[color:--gold-color-1]"
								>
									{link.text}
								</a>
							)}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.header>
		</>
	);
};

export default Header;