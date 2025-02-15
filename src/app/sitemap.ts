import { MetadataRoute } from 'next';
import {SITE_URL} from "@/consts";

const locales = ["en"];
const pages = [""];

export default function sitemap(): MetadataRoute.Sitemap {
	return locales.flatMap((locale) =>
		pages.map((page) => ({
			url: `${SITE_URL}/${locale}${page ? `/${page}` : ""}`,
			lastModified: new Date().toISOString(),
		}))
	);
}