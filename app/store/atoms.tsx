import { atom } from 'jotai';

export interface UserState {
	experiencePoints: number;
	goldAmount: number;
}

const initialUserState: UserState = {
	experiencePoints: 0,
	goldAmount: 0
};

export const userStateAtom = atom<UserState>(initialUserState);
