import Head from "next/head";
import { usePathname } from "next/navigation";
import {SITE_URL} from "@/consts";

const Seo = () => {
	const pathname = usePathname();
	const locales = ["en"];

	return (
		<Head>
			{/* Основные SEO теги */}
			<meta name="description" content="Your Secure Oasis for Global Transactions" />
			<meta name="keywords" content="p2p, ecom, processing, casino, betting, internet acquiring" />
			<meta property="og:title" content="The best internet acquiring" />
			<meta property="og:description" content="Найдите свою машину мечты!" />
			<meta property="og:image" content={`${SITE_URL}/favicon.ico`} />

			{/* hreflang для локализации */}
			{locales.map((locale) => (
				<link
					key={locale}
					rel="alternate"
					href={`${SITE_URL}/${locale}${pathname}`}
					hrefLang={locale}
				/>
			))}
		</Head>
	);
};

export default Seo;