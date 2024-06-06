import styled from 'styled-components';

export const DecorationContent = styled.div`
	position: absolute;
	inset: 0px;
	z-index: 300;
	pointer-events: none;
	@media (max-width: 900px) {
		display: none;
	}
`;
export const DecorationTop = styled.div`
	position: absolute;
	inset: 0px 0px 0px 36px;
	width: calc(100% - 64px);
	margin: 4px 0px;
	border-top: 2px solid ${({ theme }) => theme.colors.lightBrown};
	border-bottom: 2px solid ${({ theme }) => theme.colors.lightBrown};
`;

export const DecorationLeftTop = styled.div`
	position: absolute;
	width: 2px;
	top: 36px;
	left: 4px;
	height: calc(50% - 40px);
	background-color: ${({ theme }) => theme.colors.lightBrown};
	::after {
    content: url(/assets/containers/ornamented-segment.svg);
    position: absolute;
    left: 0px;
    bottom: -10px;
    width: 6px;
    height: 16px;
`;
export const DecorationLeftBottom = styled.div`
	position: absolute;
	width: 2px;
	left: 4px;
	height: calc(50% - 40px);
	bottom: 36px;
	background-color: ${({ theme }) => theme.colors.lightBrown};
`;

export const DecorationRightTop = styled.div`
	position: absolute;
	top: 36px;
	right: 4px;
	height: calc(50% - 40px);
	width: 2px;
	background-color: ${({ theme }) => theme.colors.lightBrown};
	::after {
    content: url(/assets/containers/ornamented-segment.svg);
    position: absolute;
    right: 0px;
    bottom: -10px;
    width: 6px;
    height: 16px;
    transform: scaleX(-1);
`;
export const DecorationRightBottom = styled.div`
	position: absolute;
	bottom: 36px;
	right: 4px;
	width: 2px;
	height: calc(50% - 40px);
	background-color: ${({ theme }) => theme.colors.lightBrown};
`;
export const DecorationA = styled.div`
	position: absolute;
	height: 32px;
	width: 32px;
	top: 4px;
	left: 4px;
	img {
		position: absolute;
		height: 100%;
		width: 100%;
		inset: 0px;
		object-fit: cover;
		color: transparent;
	}
`;
export const DecorationB = styled.div`
	position: absolute;
	height: 32px;
	width: 32px;
	top: 4px;
	right: 4px;
	transform: scaleX(-1);
	img {
		position: absolute;
		height: 100%;
		width: 100%;
		inset: 0px;
		object-fit: cover;
		color: transparent;
	}
`;
export const DecorationC = styled.div`
	position: absolute;
	height: 32px;
	width: 32px;
	bottom: 4px;
	left: 4px;
	transform: scaleX(-1) rotate(180deg);
	img {
		position: absolute;
		height: 100%;
		width: 100%;
		inset: 0px;
		object-fit: cover;
		color: transparent;
	}
`;
export const DecorationD = styled.div`
	position: absolute;
	height: 32px;
	width: 32px;
	bottom: 4px;
	right: 4px;
	transform: rotate(180deg);
	img {
		position: absolute;
		height: 100%;
		width: 100%;
		inset: 0px;
		object-fit: cover;
		color: transparent;
	}
`;
