import React from 'react';

export interface FeatureCardProps {
    iconBg: string;
    iconVariant: string;
    iconSize: string;
    titleColor: string;
    titleContent: string;
    textContent: string;
}

const FeatureCard = ({
    iconBg,
    iconVariant,
    iconSize,
    titleColor,
    titleContent,
    textContent
}: FeatureCardProps ) => {
	return (
		<div
			className="flex flex-col justify-center items-center"
		>
			<figure className={`w-20 h-20 ${iconBg} flex justify-center items-center rounded-full`}>
				<span className={`iconify ${iconVariant} ${iconSize} ${titleColor}`}></span>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className={`card-title ${titleColor}`}>{titleContent}</h2>
				<p className="text-base-content">{textContent}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
