import { IconTextContainer, StyledLink, IconTextSmallContainer, IconTextT } from './style';

export default function ButtonGroup({ buttonName, isBack, onclick }: ButtonType) {
	return (
		<IconTextContainer isBack={isBack}>
			<StyledLink href={isBack ? '/' : ''} onClick={onclick}>
				<IconTextSmallContainer isBack={isBack}>
					<IconTextT isBack={isBack}>{buttonName}</IconTextT>
				</IconTextSmallContainer>
			</StyledLink>
		</IconTextContainer>
	);
}
