'use client';
import { useAtomValue } from 'jotai';
import UserLoginIcon from '../Login';
import GoldExp from '../GoldExp';
import { NavLink, NavbarContainer, NavbarWidth, LogoLink, Logo, LoginBarContainer, Parallel } from './style';
import { userStateAtom } from '@/app/store/atoms';

export default function Navbar() {
	const userState = useAtomValue(userStateAtom);

	return (
		<NavbarContainer>
			<NavbarWidth>
				<LogoLink href='/'>
					<Logo src='/logo.svg' alt='Logo' />
				</LogoLink>
				<LoginBarContainer>
					<GoldExp icon='/assets/gold.png' text={userState.goldAmount} />
					<Parallel />
					<GoldExp icon='/assets/exp.png' text={userState.experiencePoints} />
					<NavLink href='/'>
						<UserLoginIcon />
					</NavLink>
				</LoginBarContainer>
			</NavbarWidth>
		</NavbarContainer>
	);
}
