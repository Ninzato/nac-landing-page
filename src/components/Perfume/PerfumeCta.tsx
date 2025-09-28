import {Link} from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const PerfumeCta = () => {
	const t = useTranslations('perfume.cta');

	return (
		<section
			className="relative py-8 lg:py-20 bg-accent/10"
			id="brands"
		>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
					<div className="flex flex-col gap-8 md:gap-10">
						<h1 className="text-5xl leading-13 font-bold md:text-6xl md:leading-18">
							{t('title')}
						</h1>
						<Link href="/perfume/catalog?perfume=raras-anisa" className='w-full'>
							<button className="btn btn-outline btn-accent btn-lg flex rounded-none w-full">
								{t('buttonText')}{' '}
								<span className="iconify ph--arrow-right-light size-5"></span>
							</button>
						</Link>
					</div>
					<div className="flex flex-col gap-4">
						<h2 className="text-3xl font-bold">
							{t('subtitle')}
						</h2>
						<p className="text-xl leading-8">
							{t('description')}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PerfumeCta;
