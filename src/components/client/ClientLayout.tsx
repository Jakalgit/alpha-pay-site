"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default function ClientLayout(
	{ children, info }:
	{ children: React.ReactNode, info?: any }) {
	return (
		<>
			<Header />
			{children}
			<Footer
				contacts={info?.contacts}
			/>
		</>
	);
}