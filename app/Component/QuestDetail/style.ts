import styled from 'styled-components';

export const QuestBack = styled.img`
	width: 100%;
	height: 100%;
	max-height: 175.5px;
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

export const QuestTitle = styled.h1`
	color: ${({ theme }) => theme.colors.white};
	font-size: 18px;
	font-weight: 700;
	line-height: 24px;
	margin-bottom: 16px;
`;

export const TagContainer = styled.div`
	display: flex;
	justify-content: space-between;
	transition: 0.3s;
	@media (max-width: 440px) {
		transition: 0.3s;
		display: flex;
		flex-direction: column;
		gap: 10px;
		justify-content: space-between;
		align-items: center;
	}
`;

export const QuestTag = styled.div`
	display: flex;
	gap: 4px;
`;

export const QuestDescription = styled.p`
	color: ${({ theme }) => theme.colors.lightGrey};
	font-size: 14px;
	font-weight: 400;
	line-height: 19px;
	margin-bottom: 14px;
`;

export const QuestReward = styled.div`
	display: flex;
	gap: 20px;
`;
