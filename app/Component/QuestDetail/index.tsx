import IconText from '../IconText';
import Rating from '../Rating';
import GoldExp from '../GoldExp';
import { QuestBack, QuestTitle, TagContainer, QuestTag, QuestReward, QuestDescription } from './style';

export default function QuestDetail({
	cover,
	title,
	treeLabel,
	treeImg,
	goldText,
	expText,
	description,
	rate
}: QuestDetailType) {
	return (
		<div>
			<QuestBack src={cover} />
			<QuestTitle>{title}</QuestTitle>
			<TagContainer>
				<QuestTag>
					<IconText src={treeImg} text={treeLabel} />
					<Rating rate={rate} />
				</QuestTag>
				<QuestReward>
					<GoldExp icon={'https://nodeguardians.io/assets/shared/image-icon-gold.webp'} text={goldText} />
					<GoldExp icon={'https://nodeguardians.io/assets/shared/image-icon-exp.webp'} text={expText} />
				</QuestReward>
			</TagContainer>
			<QuestDescription>{description}</QuestDescription>
		</div>
	);
}
