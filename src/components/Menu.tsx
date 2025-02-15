import React from 'react';
import styles from "@/styles/components/Menu.module.css"
import {motion} from 'framer-motion';

const Menu = () => {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			className={`fixed z-10 w-full backdrop-blur-[8px] ${styles.menu}`}
		>

		</motion.div>
	);
};

export default Menu;