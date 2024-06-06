import { Cinzel, Inter } from 'next/font/google';
import { DefaultTheme, createGlobalStyle } from 'styled-components';
import backImg from '../public/assets/background.png';

export const cinzel = Cinzel({ weight: '700', subsets: ['latin'] });
export const interRegular = Inter({ weight: '400', subsets: ['latin'] });
export const interBold = Inter({ weight: '700', subsets: ['latin'] });

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	//========================================================================================================
	// GENERAL
	//========================================================================================================
	* {
		box-sizing: border-box;
	}
	*::before {
		box-sizing: border-box;
	}
	*::after {
		box-sizing: border-box;
	}

	body {
		width: 100%;
		height: 100vh;
		margin: 0px;
		background-image: url(${({ theme }) => theme.colors.image});
		background-size: cover;
		background-position: center;
	}

	ul.::-webkit-scrollbar {
		height: 1px;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	button {
		font-family: ${cinzel.style.fontFamily};
		font-weight: ${cinzel.style.fontWeight};
	}

	b {
		font-weight: 700;
	}

	p,
	span,
	input,
	textarea {
		font-family: ${interRegular.style.fontFamily};
		font-weight: ${interRegular.style.fontWeight};
	}
`;

export default GlobalStyle;
