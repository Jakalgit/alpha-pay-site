import React from 'react';
import stylesBlock from "@/styles/components/client/adavntages-block/Advantages.module.css";
import styles from "@/styles/components/client/adavntages-block/Conversion.module.css"
import {useTranslations} from "next-intl";

const Conversion = () => {

	const t = useTranslations('HomePage.section3.menuItems.i5');

	return (
		<div className={`flex bg-[color:--purple-color-3] ${stylesBlock.descriptionBlock} ${styles.block}`}>
			<div className={styles.left}>
				<h4
					style={{ marginBottom: 0 }}
					className={`golos-text text-[color:--gold-color-1] font-semibold ${stylesBlock.largeText}`}
				>
					{t("head")}
				</h4>
			</div>
			<div className={styles.left}>

			</div>
		</div>
	);
};

export default Conversion;