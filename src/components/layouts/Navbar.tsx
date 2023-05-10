import { useState } from 'react';
import Headroom from 'react-headroom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../data/navigation';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleMobileNavOpen = () => {
		setOpen(!open);
	};

	return (
		<>
			<Headroom>
				<nav className='w-full p-4 bg-white'>
					<div className='flex items-center justify-between max-w-7xl w-full mx-auto'>
						<Link className='w-32 md:w-40' to='/'>
							<img
								src='/images/xilinx-srm-logo.png'
								className='w-full h-auto object-contain'
								alt='Xilinx Nexus SRM'
							/>
						</Link>
						<ul className='md:flex gap-6 hidden'>
							{NAV_LINKS.map((link, index) => (
								<>
									<li key={index}>
										<Link
											to={link.url}
											className='underline font-semibold decoration-primaryLight underline-offset-4 text-lg hover:text-primary transition-all duration-300'
										>
											{link.name}
										</Link>
									</li>
									<p className='text-primary'>•</p>
								</>
							))}
						</ul>
						<button
							className='text-2xl md:hidden'
							onClick={handleMobileNavOpen}
						>
							{open ? <RxCross2 /> : <GiHamburgerMenu />}
						</button>
					</div>
				</nav>
			</Headroom>
			{open && (
				<div className='w-full h-screen fixed top-0 left-0 bg-primaryEvenLight px-8 py-4 md:hidden z-50'>
					<div className='flex items-center justify-between'>
						<Link className='w-32 md:w-40' to='/'>
							<img
								src='/images/xilinx-srm-logo.png'
								className='w-full h-auto object-contain'
								alt='Xilinx Nexus SRM'
							/>
						</Link>
						<button
							className='text-2xl md:hidden'
							onClick={handleMobileNavOpen}
						>
							{open ? <RxCross2 /> : <GiHamburgerMenu />}
						</button>
					</div>
					<ul className='flex flex-col gap-4 mt-10'>
						{NAV_LINKS.map((link, index) => (
							<li key={index} onClick={() => setOpen(false)}>
								<Link
									to={link.url}
									className='underline decoration-primary underline-offset-4 text-lg'
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
