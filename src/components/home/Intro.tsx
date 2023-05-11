import Lottie from 'lottie-react';
import WomenInTechAnimationData from '../../assets/lottie/women-in-tech.json';
import { Link } from 'react-router-dom';

const Intro = () => {
	return (
		<section className='z-0 w-full min-h-fit grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center justify-center text-center md:text-left'>
			<div className='flex flex-col gap-4'>
				<h1 className='font-heading text-5xl md:text-7xl'>
					Xilinx Nexus SRM
				</h1>
				<h2 className='font-subHeading text-2xl md:text-4xl'>
					<q>Towards Technical Empowerment</q>
				</h2>
				<p className='text-base md:text-xl'>
					The Xilinx NEXUS is a novel initiative of SRMIST, made
					possible by grants from Xilinx, Inc. It aims to support
					Women in Technology (WIT) programs within the university, by
					providing the necessary funding.
				</p>
				<div className='flex items-center gap-8 justify-center md:justify-normal text-sm md:text-base'>
					<a href='/#vision' className='btn btn-primary'>
						Learn More
					</a>
					<Link to='/events' className='btn btn-secondary'>
						View Events
					</Link>
				</div>
			</div>
			<div>
				<div className='-z-50'>
					<Lottie
						animationData={WomenInTechAnimationData}
						loop={true}
					/>
				</div>
			</div>
		</section>
	);
};

export default Intro;
