import React from 'react';
import styles from "@/styles/pages/page-document.module.css"
import {Container} from "react-bootstrap";
import {BreakText} from "@/components/BreakText";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

interface IProps {
	numberOfBlocks: number;
	translation: string,
}

const DocumentPage: React.FC<IProps> = ({ numberOfBlocks, translation }) => {

	const t = useTranslations(translation);

	return (
		<motion.main
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			className={`flex flex-col ${styles.main}`}
		>
			<Container>
				<h1 className={`golos-text font-semibold text-[color:--gold-color-1] ${styles.pageHead}`}>
					{t("head")}
				</h1>
				<div className={`flex flex-col ${styles.list}`}>
					{Array(numberOfBlocks).fill(0).map((_, index) =>
						<div
							key={index}
							className={`flex flex-col ${styles.listBlock}`}
						>
							<h2 className="golos-text text-[color:--gold-color-1] font-semibold">
								{index + 1}. {t(`b${index + 1}.head`).toUpperCase()}
							</h2>
							<p className="geologica text-[color:--purple-color-1]">
								<BreakText text={t(`b${index + 1}.text`)}/>
							</p>
						</div>
					)}
				</div>
			</Container>
		</motion.main>
	);
};

export default DocumentPage;