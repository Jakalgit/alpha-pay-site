import { MetadataRoute } from 'next';
import {SITE_URL} from "@/consts";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{ userAgent: '*', allow: '/' },
			{ userAgent: 'Googlebot', allow: '/' },
		],
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}