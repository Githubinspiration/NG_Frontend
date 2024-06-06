import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-flow: row;
	width: 100%;
	height: 100%;
	-webkit-box-pack: start;
	justify-content: flex-start;
	align-items: flex-start;
`;
export const Content = styled.ul`
	scrollbar-color: rgba(142, 142, 142, 0.4) rgba(15, 15, 15, 0.4);
	padding: 0px 4px 0px 0px;
	margin: 0px;
	position: absolute;
	inset: 0px;
	display: flex;
	flex-flow: wrap;
	width: 100%;
	max-height: 100%;
	overflow: hidden auto;
	align-items: flex-start;
	gap: 8px;
	li {
		width: 32.9%;
		height: 240px;
		@media (max-width: 1400px) {
			width: 49%;
		}
		@media (max-width: 920px) {
			width: 100%;
		}
		@media (max-width: 375px) {
			height: auto;
		}
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
`;
