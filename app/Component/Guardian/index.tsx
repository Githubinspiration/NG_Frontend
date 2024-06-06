'use client';
import IconText from '../IconText';
import GoldXP from '../GoldExp';
import Rating from '../Rating';
import {
	GuardianSellContainer,
	GuardianSellInContainer,
	GuardianSellImg,
	GuardianSellText,
	TagContainer,
	GuardianSellB,
	GoldExpContainer
} from './style';

export default function GuardianSell({
	backImg,
	title,
	firstIcon,
	firstText,
	secondText,
	goldText,
	expText,
	rate
}: GuardianType) {
	return (
		<>
			<GuardianSellContainer>
				<GuardianSellInContainer>
					<div className='guardianImg'>
						<GuardianSellImg src={backImg} alt='GuardianSellImg' />
					</div>
					<GuardianSellText>{title}</GuardianSellText>
					<TagContainer>
						<GuardianSellB>
							<IconText src={firstIcon} text={firstText} />
							<Rating rate={rate} />
							<IconText text={secondText} />
							<IconText src={'assets/quest.jpg'} text={'Standalone'} />
						</GuardianSellB>
						<GoldExpContainer>
							<GoldXP icon={'assets/gold.png'} text={goldText} />
							<GoldXP icon={'assets/exp.png'} text={expText} />
						</GoldExpContainer>
					</TagContainer>
				</GuardianSellInContainer>
			</GuardianSellContainer>
		</>
	);
}
