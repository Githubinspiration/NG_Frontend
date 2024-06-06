import GuardianSell from '@/app/Component/Guardian';
import { useQuery } from '@tanstack/react-query';
import { Container, Content, StyledLink } from './style';

export default function InsideContent() {
	const { data, isLoading, isError } = useQuery<Quest[]>({
		queryKey: ['quests'],
		queryFn: async () => {
			const response = await fetch('/api/quests');
			const data = await response.json();
			return data;
		}
	});

	if (isLoading) return <div>Loading...</div>;
	if (!data) return <></>;
	if (isError) return <div>Error fetching data</div>;
	return (
		<>
			<Container>
				<Content>
					{data.map((data, key) => {
						return (
							<li key={key + 1}>
								<StyledLink href={`/quests/${data.slug}`}>
									<GuardianSell
										backImg={data?.cover}
										title={data.title}
										firstIcon={`assets/${data.language.id}.svg`}
										firstText={data.language.label}
										secondText={data.type.label}
										goldText={data.rewards.gold}
										expText={data.rewards.expPoints}
										rate={data.difficulty}
									/>
								</StyledLink>
							</li>
						);
					})}
				</Content>
			</Container>
		</>
	);
}
