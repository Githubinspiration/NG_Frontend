import styled from 'styled-components';

export const IconTextContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.darkGrey};
	justifycontent: space-between;
	clip-path: polygon(
		calc(100% - 6px) 0%,
		100% 6px,
		100% calc(100% - 6px),
		calc(100% - 6px) 100%,
		6px 100%,
		0% calc(100% - 6px),
		0% 6px,
		6px 0%
	);
	padding: 1px 1px;
`;
export const IconTextSmallContainer = styled.div`
	background: rgb(8, 8, 8);
	clip-path: polygon(
		calc(100% - 6px) 0%,
		100% 6px,
		100% calc(100% - 6px),
		calc(100% - 6px) 100%,
		6px 100%,
		0% calc(100% - 6px),
		0% 6px,
		6px 0%
	);
	padding: 4px;
`;
export const SwordContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SwordIcon = styled.i<SwordIconProps>`
	font-size: 18px;
	font-weight: 700;
	color: ${(props) => (props.filled ? 'white' : '#7C7C7C')};
	cursor: pointer;
	margin: 0 1px;
	transform: rotate(150deg);
`;
