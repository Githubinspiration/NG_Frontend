'use client';
/* eslint-disable @next/next/no-img-element */
import InsideContent from './InsideContent';
import DecorationBorder from './DecorationBorder';
import { DecorationSection, DecorationContainer } from './style';

const Decoration = () => {
	return (
		<DecorationSection>
			<DecorationContainer>
				<DecorationBorder />
				<InsideContent />
			</DecorationContainer>
		</DecorationSection>
	);
};

export default Decoration;
