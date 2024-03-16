const Header = () => {
	return (
		<div className="h-full lg:h-[600px] rounded-3xl bg-[url('../../../public/Images/banner.png')] bg-no-repeat bg-cover relative flex flex-col justify-center items-center">
			<h2 className='text-white text-5xl font-bold leading-[76px] text-center'>
				Discover an exceptional cooking <br /> class tailored for you!
			</h2>
			<p className='text-lg leading-7 text-white my-6 w-[890px] text-center'>
				Here you can learn every recipes from the world. We are so much eager to teach you guys how to cook any recipes.
			</p>
			<div className='flex gap-12 items-center'>
				<button className='btn bg-[#0BE58A] rounded-[50px] text-black border-none'>Explore Now</button>
				<button className='btn bg-transparent border-[1px] border-solid border-white text-white rounded-[50px]'>Our Feedback</button>
			</div>
		</div>
	)
}

export default Header
