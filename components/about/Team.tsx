import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const team = [
	{
		name: 'Surendar PD',
		photoUrl:
			'https://res.cloudinary.com/dm5excyly/image/upload/v1673215258/assets/members/surendar-pd.png',
		description: 'I drink coffee to code.',
		designation: 'Co-Founder',
		links: {
			instagram: '',
			twitter: '',
			linkedin: '',
			github: '',
		},
	},
	{
		name: 'Jayanth Srinivasan',
		photoUrl:
			'https://res.cloudinary.com/dm5excyly/image/upload/v1673215257/assets/members/jayanth-srinivasan.png',
		description: 'I drink coffee to code.',
		designation: 'Co-Founder',
		links: {
			instagram: '',
			twitter: '',
			linkedin: '',
			github: '',
		},
	},
	{
		name: 'Kunal Keshan',
		photoUrl:
			'https://res.cloudinary.com/dm5excyly/image/upload/v1673215257/assets/members/kunal-keshan.png',
		description: 'I drink coffee to code.',
		designation: 'Co-Founder',
		links: {
			instagram: '',
			twitter: '',
			linkedin: '',
			github: '',
		},
	},
];

const Team = () => {
	return (
		<div
			id='teams'
			className='mx-auto grid max-w-[1440px] scroll-mt-24 px-3 py-16 md:px-5 lg:grid-cols-3 lg:px-[5vw] lg:pb-[148px]'
		>
			<div className='flex flex-col items-center justify-start p-[8px] text-center md:p-4 lg:col-span-3'>
				<h1 className='mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
					Who we are?
				</h1>
				<p className='text-[18px] text-[#4c4f58]'>
					We are a team of passionate web developers, designers and
					what not!
				</p>
			</div>
			{team.map((member, idx) => (
				<div key={idx} className='w-full px-[8px] py-4 md:p-4 '>
					<div className='group h-full w-full select-none rounded-3xl border border-slate-200 px-[24px] py-10 transition-all duration-300 md:px-10 md:py-14'>
						<div className='mb-4 flex w-full items-center justify-between'>
							<Image
								src={member.photoUrl}
								alt={member.photoUrl}
								width={100}
								height={100}
								className='h-16 w-16 rounded-full grayscale transition-all duration-300 group-hover:grayscale-0'
							/>
							<span className='self-start rounded-full bg-primary bg-opacity-20 py-2 px-4 text-primary'>
								{member.designation}
							</span>
						</div>
						<h1
							className={`mb-4 font-semibold text-[#23262f] md:text-[22px]`}
						>
							{member.name}
						</h1>
						<p className='mb-[24px] text-justify text-[#777a85]'>
							{member.description}
						</p>
						<div className='mb-4 flex items-center gap-4'>
							<Link
								target='_blank'
								rel='noopener noreferrer'
								href={member.links.linkedin}
								className='transition-all duration-300 hover:text-[#00E07B]'
							>
								<LinkedInIcon />
							</Link>
							<Link
								target='_blank'
								rel='noopener noreferrer'
								href={member.links.twitter}
								className='transition-all duration-300 hover:text-[#00E07B]'
							>
								<TwitterIcon />
							</Link>
							<Link
								target='_blank'
								rel='noopener noreferrer'
								href={member.links.instagram}
								className='transition-all duration-300 hover:text-[#00E07B]'
							>
								<InstagramIcon />
							</Link>
							<Link
								target='_blank'
								rel='noopener noreferrer'
								href={member.links.github}
								className='transition-all duration-300 hover:text-[#00E07B]'
							>
								<GitHubIcon />
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Team;
