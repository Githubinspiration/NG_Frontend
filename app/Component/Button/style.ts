import styled from 'styled-components';
import Link from 'next/link';

export const IconTextContainer = styled.div<backType>`
	background-color: ${(props) => (props.isBack ? '#B69E72' : '#F6CF8F')};
	width: fit-content;
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
export const IconTextSmallContainer = styled.div<backType>`
	background: ${(props) => (props.isBack ? 'black' : '#B69E72')};
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
	padding: 12.5px 26px;
`;
export const StyledLink = styled(Link)`
	text-decoration: none;
`;

export const IconTextT = styled.h1<backType>`
	font-weight: 700;
	font-size: 1rem;
	letter-spacing: 0.56px;
	text-transform: capitalize;
	color: ${(props) => (props.isBack ? '#B69E72' : 'black')};
	line-height: 1rem;
	margin: 0px;
`;
