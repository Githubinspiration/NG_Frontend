import { IconTextContainer, IconTextSmallContainer, SwordContainer, SwordIcon } from './style';
export default function Rating({ rate }: { rate: number }) {
	return (
		<IconTextContainer>
			<IconTextSmallContainer>
				<SwordContainer>
					{Array.from({ length: 5 }, (x, i) => i).map((sword) => (
						<SwordIcon key={sword} filled={sword <= rate}>
							🗡
						</SwordIcon>
					))}
				</SwordContainer>
			</IconTextSmallContainer>
		</IconTextContainer>
	);
}
