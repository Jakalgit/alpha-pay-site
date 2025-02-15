import React from 'react';

const AlfaPayIcon: React.FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> =
	({ ...rest }) => {
	return (
		<img src="alfa-pay-icon.png" alt="alfa-pay-icon" {...rest} />
	);
};

export default AlfaPayIcon;