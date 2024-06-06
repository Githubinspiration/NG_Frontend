'use client';
import { IconTextContainer, IconTextContent, IconTextI, IconTextT } from './style';

export default function IconText({ text, src }: IconText) {
	return (
		<>
			<IconTextContainer>
				<IconTextContent>
					{src && <IconTextI src={src} alt={text + 'Icon'} />}
					{text && <IconTextT>{text}</IconTextT>}
				</IconTextContent>
			</IconTextContainer>
		</>
	);
}
