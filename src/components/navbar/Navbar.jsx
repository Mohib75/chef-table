const Navbar = () => {
	return (
		<nav className='navbar bg-base-100 my-8'>
			<div className='navbar-start justify-center gap-8 lg:gap-0 w-full lg:justify-start'>
				<div className='dropdown'>
					<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</div>
					<ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-50 rounded-box w-52'>
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>Recipes</a>
						</li>
						<li>
							<a>About</a>
						</li>
						<li>
							<a>Search</a>
						</li>
						<a className='btn bg-[#150B2B0D] rounded-[50px] justify-start px-8 mt-4'>
							<img className='' src='../../../public/Images/search.png' alt='search' />
							<p className='text-[#150B2BB3]'>Search</p>
						</a>

						<div className='w-12 h-12 bg-[#0BE58A] rounded-full flex items-center justify-center mt-4 self-center'>
							<img src='../../../public/Images/profile.png' alt='' />
						</div>
					</ul>
				</div>
				<h1 className='text-xl sm:text-3xl text-[#150B2B] font-bold leading-10'>Recipe Calories</h1>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>Recipes</a>
					</li>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Search</a>
					</li>
				</ul>
			</div>
			<div className='navbar-end gap-4 hidden lg:flex'>
				<a className='btn bg-[#150B2B0D] rounded-[50px] w-[260px] justify-start px-8'>
					<img className='' src='../../../public/Images/search.png' alt='search' />
					<p className='text-[#150B2BB3]'>Search</p>
				</a>

				<div className='w-12 h-12 bg-[#0BE58A] rounded-full flex items-center justify-center'>
					<img src='../../../public/Images/profile.png' alt='' />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
