import styled from 'styled-components';

export const LoginIconContainer = styled.nav`
	height: 56px;
	width: 56px;
	border: 1px solid ${({ theme }) => theme.colors.darkGrey};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Logo = styled.img`
	height: 48px;
	width: 48px;
	border: 1px solid ${({ theme }) => theme.colors.gold};
	border-radius: 50%;
`;
