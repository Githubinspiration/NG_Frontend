import styled from 'styled-components';
export const GuardianSellContainer = styled.div`
	position: relative;
	z-index: 900;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.darkGrey};
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
	padding: 1px;
	&:hover {
		background-color: ${({ theme }) => theme.colors.lightBrown};
		transition: background-color 0.4s;
	}
`;
export const GuardianSellInContainer = styled.div`
	background: rgb(8, 8, 8);
	height: 100%;
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
	padding: 16px;
	.guardianImg {
		width: 100%;
		height: 100px;
	}
`;
export const GuardianSellImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
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
`;

export const GuardianSellText = styled.h2`
	font-weight: 700;
	font-size: 18px;
	letter-spacing: 0.56px;
	text-transform: capitalize;
	color: ${({ theme }) => theme.colors.white};
	line-height: 24px;
	margin-top: 12px;
	margin-bottom: 8px;
`;
export const GuardianSellB = styled.div`
	display: flex;
	gap: 4px;
	flex-wrap: wrap;
`;

export const GoldExpContainer = styled.div`
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
`;
export const TagContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
