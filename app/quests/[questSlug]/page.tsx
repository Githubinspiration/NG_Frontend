'use client';

import { useQuery } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import DecorationBorder from '@/app/Component/Main/Decoration/DecorationBorder';
import ButtonGroup from '@/app/Component/Button';
import QuestDetail from '@/app/Component/QuestDetail';
import { userStateAtom, UserState } from '../../store/atoms';
import { Section, Container, DecorationSection, DecorationContainer, QuestDetails } from './style';

const QuestPage = ({ params: { questSlug } }: { params: { questSlug: string } }) => {
	const setUserState = useSetAtom(userStateAtom);
	const { data, isLoading, isError } = useQuery({
		queryKey: ['quests', questSlug],
		queryFn: async () => {
			const response = await fetch(`/api/quest?questSlug=${questSlug}`);
			const data = await response.json();
			return data;
		}
	});

	if (isLoading) return <div>Loading...</div>;
	if (!data) return <></>;
	if (isError) return <div>Error fetching data</div>;

	const handleAirdropClick = () => {
		// Simulate giving the user experience points and gold
		setUserState((prevState: UserState) => ({
			...prevState,
			experiencePoints: prevState.experiencePoints + data.rewards.expPoints,
			goldAmount: prevState.goldAmount + data.rewards.gold
		}));
	};

	return (
		<Section>
			<Container>
				<DecorationSection>
					<DecorationContainer>
						<DecorationBorder />
						<QuestDetails>
							<QuestDetail
								cover={data?.cover}
								title={data.title}
								treeLabel={data.language.label}
								treeImg={`../assets/${data.language.id}.svg`}
								goldText={data.rewards.gold}
								expText={data.rewards.expPoints}
								description={data.description}
								rate={data.difficulty}
							/>
							<div className='buttonB'>
								<ButtonGroup buttonName={'back'} isBack={true} />
								<ButtonGroup
									buttonName={'Airdrop rewards to The Guardian'}
									isBack={false}
									onclick={handleAirdropClick}
								/>
							</div>
						</QuestDetails>
					</DecorationContainer>
				</DecorationSection>
			</Container>
		</Section>
	);
};

export default QuestPage;
