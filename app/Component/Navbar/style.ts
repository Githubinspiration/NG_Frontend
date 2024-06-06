import styled from 'styled-components';
import Link from 'next/link';

export const NavbarContainer = styled.nav`
	position: fixed;
	width: 100%;
	z-index: 9999;
`;

export const NavbarWidth = styled.div`
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 24px;
	height: 60px;
	max-width: 1880px;
	margin: auto;
`;

export const LogoLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #fff;
`;

export const Logo = styled.img`
	width: 80px;
	margin-right: 1rem;

	@media (max-width: 900px) {
		width: 60px;
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
`;

export const LoginBarContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const Parallel = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 8px;
	height: 8px;
	background-color: ${({ theme }) => theme.colors.lightBrown};
	transform: rotate(45deg);
`;
