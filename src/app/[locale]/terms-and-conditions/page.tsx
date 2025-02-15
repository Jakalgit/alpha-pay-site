"use client";
import {redirect, useParams} from "next/navigation";
import React from "react";
import DocumentPage from "@/components/DocumentPage";

export default function Page() {
	const supportedLocales = ["en"];
	const params = useParams();
	const locale = params.locale as string;

	if (!supportedLocales.includes(locale)) {
		redirect("/en/terms-and-conditions");
	}

	const numberOfBlocks = 14;

	return (
		<DocumentPage numberOfBlocks={numberOfBlocks} translation={'TermsAndConditionsPage'} />
	)
}