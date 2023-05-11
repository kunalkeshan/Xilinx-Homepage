import Lottie from 'lottie-react';
import HardwareAnimationData from '../../assets/lottie/hardware-animation.json';
import { FaGithub } from 'react-icons/fa';

const ProjectHighlight = () => {
	return (
		<section className='w-full py-16 min-h-fit grid grid-cols-1 mt-8 md:grid-cols-2 max-w-7xl mx-auto items-center justify-center text-center md:text-left'>
			<div>
				<div className='-z-50'>
					<Lottie animationData={HardwareAnimationData} loop={true} />
				</div>
			</div>
			<div className='flex flex-col gap-4 mt-8 md:mt-0'>
				<h2 className='font-heading text-2xl md:text-4xl'>
					Breast Cancer Detection
				</h2>
				<h3 className='font-subHeading text-lg md:text-xl'>
					<q>
						A GUI that is built on the Web and used to communicate
						with the Breast Cancer Detection Neural Network.
					</q>
				</h3>
				<p className='text-sm md:text-lg'>
					This project in SRM University aims to create a user
					interface for a breast cancer detection neural network on
					PYNQ Z-Series hardware, which lacks its own UI. An external
					URL will be used to access the GUI.
				</p>
				<div className='flex items-center gap-8 justify-center md:justify-normal text-sm md:text-base'>
					<a
						href='https://github.com/kunalkeshan/Hardware-Web-UI'
						target='_blank'
						className='btn btn-primary flex gap-2 items-center'
					>
						<FaGithub /> Learn More
					</a>
				</div>
			</div>
		</section>
	);
};

export default ProjectHighlight;
