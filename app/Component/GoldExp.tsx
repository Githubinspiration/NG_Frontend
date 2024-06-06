import { GoldExpContainer, GoldExpIcon, GoldExpText } from './style';

export default function GoldExp({ icon, text }: GoldExpType) {
	return (
		<GoldExpContainer>
			<GoldExpIcon src={icon} alt='avatar' />
			<GoldExpText>{text}</GoldExpText>
		</GoldExpContainer>
	);
}
