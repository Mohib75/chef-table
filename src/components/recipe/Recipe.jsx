import { IoTimeOutline } from "react-icons/io5"
import { AiOutlineFire } from "react-icons/ai"
import PropTypes from "prop-types"
const Recipe = ({ recipe, handleWantToCook }) => {
	const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe
	return (
		<div className='sm:w-[370px] flex flex-col p-6 border-[1px] border-solid border-[#28282833] rounded-2xl'>
			<div className='sm:w-[330px] h-[200px]'>
				<img className='w-full h-full object-cover rounded-2xl' src={recipe_image} alt='' />
			</div>

			<h4 className='text-lg sm:text-xl font-semibold leading-6 my-4'>{recipe_name}</h4>
			<p className='leading-7 mb-8 min-h-[80px]'>{short_description}</p>
			<h4 className='text-lg sm:text-xl font-semibold leading-6 my-4'>Ingredients:{ingredients.length}</h4>
			<ul className='list-disc pl-6 my-2 min-h-[170px]'>
				{ingredients.map((ingredient, index) => (
					<li key={index} className='text-lg text-[#878787] leading-8'>
						{ingredient}
					</li>
				))}
			</ul>
			<div className='flex gap-4 items-center mt-6'>
				<div className='flex gap-2 items-center'>
					<IoTimeOutline />
					<p className='leading-4 text-[#282828CC]'>{preparing_time}</p>
				</div>

				<div className='flex gap-2 items-center'>
					<AiOutlineFire />
					<p className='leading-4 text-[#282828CC]'>{calories}</p>
				</div>
			</div>

			<button
				onClick={() => handleWantToCook(recipe)}
				className='btn bg-[#0BE58A] rounded-[50px] text-black border-none w-[170px] mt-8 text-lg font-medium leading-6 hover:bg-[#0BE58A] hover:scale-110 hover:transform transition-all duration-500'>
				Want to Cook
			</button>
		</div>
	)
}

Recipe.propTypes = {
	recipe: PropTypes.object.isRequired,
	handleWantToCook: PropTypes.func.isRequired,
}

export default Recipe
