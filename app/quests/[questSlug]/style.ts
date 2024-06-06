import styled from 'styled-components';

export const Section = styled.main`
	position: relative;
	margin: 0px auto;
	max-width: 735px;
	padding: 0px 20px;
	min-height: 100vh;
`;
export const Container = styled.div`
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const DecorationSection = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	max-height: 507px;
	@media (max-width: 560px) {
		max-height: 580px;
	}
	@media (max-width: 450px) {
		max-height: 600px;
	}
`;
export const DecorationContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.black};
	padding: 20px 6px 20px 18px;
	border: 1px solid ${({ theme }) => theme.colors.brown};
`;
export const QuestDetails = styled.div`
	background-color: ${({ theme }) => theme.colors.black};
	padding-right: 12px;
	width: 100%;
	.buttonB {
		margin-top: 30px;
		display: flex;
		justify-content: space-between;
		@media (max-width: 560px) {
			transition: 0.3s;
			display: flex;
			flex-direction: column;
			gap: 10px;
			justify-content: space-between;
			align-items: center;
			margin-top: 10px;
		}
	}
`;
