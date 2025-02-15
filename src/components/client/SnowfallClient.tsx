"use client";

import React from 'react';
import Snowfall from "react-snowfall"

const SnowfallClient = () => {
	return (
		<div style={{
			position: 'fixed',
			zIndex: -1,
			left: 0,
			top: 0,
			width: '100%',
			height: '100vh',
		}}>
			<Snowfall
				radius={[0.5, 2]}
				snowflakeCount={30}
			/>
		</div>
	);
};

export default SnowfallClient;