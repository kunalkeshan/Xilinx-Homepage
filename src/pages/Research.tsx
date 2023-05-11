/**
 * Research Page
 */

import ProjectHighlight from '../components/home/ProjectHighlight';

const ResearchPage = () => {
	return (
		<main className='w-full px-4 py-12 max-w-7xl mx-auto text-center md:text-left'>
			<h1 className='font-heading text-3xl md:text-7xl'>Research</h1>
			<h2 className='font-subHeading text-xl md:text-3xl'>
				Early detection of breast cancer
			</h2>
			<section className='flex flex-col gap-4 mt-4 text-base md:text-lg text-justify md:text-left'>
				<p>
					Under the XilinxNexus program, which was initiated as a
					Xilinx WIT awardee for 2021, we have begun developing and
					porting an ML model to Xilinx hardware.
				</p>
				<p>
					Breast cancer is a prevalent disease among Indian women,
					with poor prognosis at an early stage. Unfortunately, most
					cancer cases are detected only at an advanced stage due to a
					shortage of radiologists, pathologists, and trained
					technicians in our country.
				</p>
				<p>
					Additionally, the diagnosis procedure is operator-dependent
					and requires experienced pathologists, which can lead to
					misdetection due to human factors such as exhaustion and
					insufficient concentration. In response to this need, we are
					developing a computer-assisted diagnostic system based on
					recent developments in Deep Learning (DL) methods/networks,
					namely capsule networks and transfer learning.
				</p>
				<p>
					This project aims to provide an effective screening and
					diagnostic system for the early detection of breast cancer,
					using DL methods to analyze digital mammograms and
					histopathology images.
				</p>
				<p>
					The Xilinx embedded hardware developer kit will interface
					with both the digital mammogram unit and the camera unit of
					the microscope, which is used to investigate tissue
					specimens. The DL model will provide screening and diagnosis
					reports for images acquired through the DM unit, providing
					predictions for Benign (B) and Malignant (M) findings.
				</p>
			</section>
			<ProjectHighlight />
		</main>
	);
};

export default ResearchPage;
