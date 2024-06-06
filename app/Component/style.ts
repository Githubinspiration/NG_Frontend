import styled from 'styled-components';

export const GoldExpContainer = styled.div`
	display: flex;
	gap: 6px;
	align-items: center;
`;
export const GoldExpIcon = styled.img`
	height: 24px;
	width: 24px;
`;
export const GoldExpText = styled.p`
	font-family: __Cinzel_2c1578, __Cinzel_Fallback_2c1578;
	font-style: normal;
	font-weight: 700;
	font-size: 0.875rem;
	letter-spacing: 0.56px;
	text-transform: capitalize;
	color: ${({ theme }) => theme.colors.gold};
	line-height: 1rem;
	margin: 0px;
`;
// Icontext style
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
export const IconTextContent = styled.div`
	background: rgb(8, 8, 8);
	display: flex;
	gap: 4px;
	align-items: center;
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
	padding: 7px 8px;
`;
export const IconTextI = styled.img`
	height: 18px;
	width: 18px;
`;
export const IconTextT = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 0.875rem;
	letter-spacing: 0.56px;
	text-transform: capitalize;
	color: ${({ theme }) => theme.colors.white};
	line-height: 1rem;
	margin: 0px;
`;
