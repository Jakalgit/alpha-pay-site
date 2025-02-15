"use client";
import React from 'react';
import styles from "@/styles/components/Footer.module.css"
import {Container} from "react-bootstrap";
import {useTranslations} from "next-intl";
import {BreakText} from "@/components/BreakText";
import TelegramIcon from "@/components/icons/TelegramIcon";
import MailIcon from "@/components/icons/MailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import {useParams} from "next/navigation";
import Link from "next/link";

interface FooterProps {
	contacts: {
		telegramAccount: string,
		contactEmail: string,
		address: string,
	}
}

const Footer: React.FC<FooterProps> = ({contacts}) => {

	const linksT = useTranslations('links');
	const t = useTranslations('footer');
	const { locale } = useParams();

	const links = [
		{
			text: linksT("aboutUs"),
			href: `/${locale}#aboutUs`,
		},
		{
			text: linksT("advantages"),
			href: `/${locale}#advantages`,
		},
		{
			text: linksT("ourClients"),
			href: `/${locale}#ourClients`,
		},
		{
			text: linksT("pricing"),
			href: `/${locale}#pricing`,
		},
	]

	return (
		<footer className={`flex flex-col bg-[color:--foreground-color] ${styles.footer}`}>
			<div className={`flex items-center border-b border-b-[color:--purple-color-6] ${styles.footerLine}`}>
				<Container className={`flex items-center justify-between ${styles.footerLineContainer}`}>
					<p className={`lexend-giga font-bold text-[color:--gold-color-1] ${styles.name}`}>
						ALFA PAY
					</p>
					<div className={`flex ${styles.links}`}>
						{links.map(link =>
							<a
								key={link.href}
								href={link.href}
								className="geologica text-[color:--gold-color-1]"
							>
								{link.text}
							</a>
						)}
					</div>
				</Container>
			</div>
			<Container>
				<div className={`flex ${styles.middleLine}`}>
					<div className={styles.leftMiddle}>
						<p className={`golos-text text-[color:--gold-color-1] font-semibold largeText`}>
							<BreakText text={t('largeText')} />
						</p>
						<p className={`geologica text-[color:--purple-color-1] ${styles.smallText}`}>
							<span className={`lexend-giga text-[color:--gold-color-1] font-semibold`}>ALFA PAY&nbsp;</span>
							{t("smallText")}
						</p>
					</div>
					<div className={`flex items-center flex-1 ${styles.rightMiddle}`}>
						<div className={`grid w-full ${styles.contacts}`}>
							<a
								className={`flex items-center bg-[color:--purple-color-3] !border border-[color:--purple-color-6] 
									${styles.firstContact} ${styles.contactBlock}`}
								href="#"
							>
								<TelegramIcon/>
								<div className="geologica flex flex-col justify-between min-w-0">
									<p className={`text-[color:--purple-color-6] ${styles.smallContactText}`}>
										Connect
									</p>
									<p className={`text-[color:--purple-color-1] ${styles.largeContactText}`}>
										{contacts?.telegramAccount}
									</p>
								</div>
							</a>
							<a
								className={`flex items-center bg-[color:--purple-color-3] !border border-[color:--purple-color-6] 
									${styles.secondContact} ${styles.contactBlock}`}
								href="#"
							>
								<MailIcon/>
								<div className="geologica flex flex-col justify-between min-w-0">
									<p className={`text-[color:--purple-color-6] ${styles.smallContactText}`}>
										Connect
									</p>
									<p className={`text-[color:--purple-color-1] ${styles.largeContactText}`}>
										{contacts?.contactEmail}
									</p>
								</div>
							</a>
							<a
								className={`flex items-center bg-[color:--purple-color-3] !border border-[color:--purple-color-6] 
									${styles.thirdContact} ${styles.contactBlock}`}
								href="#"
							>
								<MailIcon/>
								<div className="geologica flex flex-col justify-between min-w-0">
									<p className={`text-[color:--purple-color-6] ${styles.smallContactText}`}>
										Address
									</p>
									<p className={`text-[color:--purple-color-1] ${styles.largeContactText}`}>
										{contacts?.address}
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</Container>
			<div className={`flex items-center border-t border-t-[color:--purple-color-6] ${styles.footerLine} ${styles.bottomLine}`}>
				<Container className={`flex items-center ${styles.description}`}>
					<p className={`geologica text-[color:--purple-color-1]`}>
						© 2025&nbsp;
						<span className="lexend-giga text-[color:--gold-color-1] font-semibold">
							ALFA PAY
						</span>
						&nbsp;- All rights reserved.
					</p>
					<Link
						href={`/${locale}/privacy-policy`}
						className="geologica text-[color:--purple-color-1]"
					>
						{linksT("privacyPolicy")}
					</Link>
					<Link
						href={`/${locale}/terms-and-conditions`}
						className="geologica text-[color:--purple-color-1]"
					>
						{linksT("terms")}
					</Link>
					<div className="ml-auto">
						<button className={`flex items-center geologica text-[color:--purple-color-1] ${styles.langButton}`}>
							<LocationIcon className="fill-[color:--purple-color-1]" />
							English
						</button>
					</div>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;