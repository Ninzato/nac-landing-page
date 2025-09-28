import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';

type TimelineEntry = {
	date: string;
	title: string;
	content: string;
};

export const Timeline = () => {
	const t = useTranslations('timeline');

	const timelineData: TimelineEntry[] = [
		{
			date: t('entries.0.date'),
			title: t('entries.0.title'),
			content: t('entries.0.content'),
		},
		{
			date: t('entries.1.date'),
			title: t('entries.1.title'),
			content: t('entries.1.content'),
		},
		{
			date: t('entries.2.date'),
			title: t('entries.2.title'),
			content: t('entries.2.content'),
		},
		{
			date: t('entries.3.date'),
			title: t('entries.3.title'),
			content: t('entries.3.content'),
		},
	];

	return (
		<section className="py-8 lg:py-20">
			<div className="container">
				<h1 className="text-3xl font-semibold sm:text-5xl mb-8 text-center">
					{t('title')}
				</h1>
				<div className="relative mx-auto max-w-4xl">
					<Separator
						orientation="vertical"
						className="bg-accent absolute left-2 top-4"
					/>
					{timelineData.map((entry, index) => (
						<div
							key={index}
							className="relative mb-10 pl-8"
						>
							<div className="bg-accent absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" />
							<h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
								{entry.title}
							</h4>

							<h5 className="text-md -left-34 text-muted-foreground top-3 rounded-xl tracking-tight xl:absolute">
								{entry.date}
							</h5>

							<Card className="my-5 border-none bg-base-200/60 shadow-sm rounded-xl">
								<CardContent className="px-0 xl:px-2">
									<div
										className="prose dark:prose-invert text-base-content"
										dangerouslySetInnerHTML={{ __html: entry.content }}
									/>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
