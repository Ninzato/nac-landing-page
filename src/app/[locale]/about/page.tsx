import { OurStory } from '@/components/About/OurStory';
import { Timeline } from '@/components/About/Timeline';
import { MainFooter } from '@/components/Main/MainFooter';
import { MainTopbar } from '@/components/Main/MainTopbar';

export default function About() {
	return (
		<>
			<MainTopbar />
			<OurStory />
            <Timeline/>
			<MainFooter />
		</>
	);
}
