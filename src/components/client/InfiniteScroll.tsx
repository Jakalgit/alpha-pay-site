"use client";

import React from 'react';
import styles from "@/styles/components/client/InfiniteScroll.module.css"
import {motion} from "framer-motion";

interface InfiniteScrollProps {
	items: React.ReactNode[];
	speed?: number; // Скорость движения
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ items, speed = 50}) => {

	const duplicatedItems = Array(8).fill(items).flat();

	return (
		<div className={styles.scrollContainer}>
			<motion.div
				className={styles.scrollContent}
				animate={{x: ["0%", `-${100 / 2}%`]}} // Уезжаем на половину (потом повтор)
				transition={{repeat: Infinity, duration: speed, ease: "linear"}}
			>
				{duplicatedItems.map((item, i) => (
					<div key={i} className={styles.item}>
						{item}
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default InfiniteScroll;