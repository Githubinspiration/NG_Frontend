interface backType {
	isBack: boolean;
}

interface ButtonType {
	buttonName: string;
	isBack: boolean;
	onclick?: () => void;
}

interface GuardianType {
	backImg?: string;
	title: string;
	firstIcon: string;
	firstText: string;
	secondText: string;
	goldText: number;
	expText: number;
	rate: number;
}

interface Quest {
	slug: string;
	cover: string;
	title: string;
	difficulty: number;
	language: {
		id: string;
		label: string;
	};
	type: {
		label: string;
	};
	rewards: {
		expPoints: number;
		gold: number;
	};
}

interface GoldExpType {
	icon: string;
	text: number;
}

interface IconText {
	text?: string;
	src?: string;
}

interface QuestDetailType {
	cover: string;
	title: string;
	treeLabel: string;
	treeImg: string;
	goldText: number;
	expText: number;
	description: string;
	rate: number;
}

interface SwordIconProps {
	filled: boolean;
}
