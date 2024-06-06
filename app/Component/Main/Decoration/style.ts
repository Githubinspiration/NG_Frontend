import styled from 'styled-components';

export const DecorationSection = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	max-height: 1244px;
	padding-bottom: 48px;
	@media (max-width: 900px) {
		padding-bottom: 0px;
	}
`;
export const DecorationContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.black};
	padding: 20px 6px 20px 18px;
	border: 1px solid ${({ theme }) => theme.colors.brown};
	@media (max-width: 900px) {
		padding: 18px 12px 0px 12px;
		border: none;
	}
`;
