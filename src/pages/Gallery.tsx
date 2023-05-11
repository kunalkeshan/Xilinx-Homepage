import GalleryImageCard from '../components/cards/GalleryImageCard';
import { IMAGES } from '../data/gallery';

const GalleryPage = () => {
	return (
		<main className='w-full px-4 py-12 max-w-7xl mx-auto text-center md:text-left'>
			<h1 className='font-heading text-3xl md:text-7xl'>Gallery</h1>
			<h2 className='font-subHeading text-xl md:text-3xl'>
				A snapshot of what we've done
			</h2>
			<section className='mt-2 w-full grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:mt-8'>
				{IMAGES.map((image, index) => (
					<GalleryImageCard key={index} data={image} />
				))}
			</section>
		</main>
	);
};

export default GalleryPage;
