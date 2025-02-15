"use client";
import React from 'react';
import {redirect, useParams} from "next/navigation";
import DocumentPage from "@/components/DocumentPage";

export default function Page() {
	const supportedLocales = ["en"];
	const params = useParams();
	const locale = params.locale as string;

	if (!supportedLocales.includes(locale)) {
		redirect("/en/privacy-policy");
	}

	const numberOfBlocks = 9;

	return (
		<DocumentPage numberOfBlocks={numberOfBlocks} translation={'PrivacyPolicyPage'} />
	);
};