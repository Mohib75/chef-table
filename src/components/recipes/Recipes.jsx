import { useState } from "react"
import { useEffect } from "react"
import Recipe from "../recipe/Recipe"

const Recipes = () => {
	const [singleRecipe, setSingleRecipe] = useState([])
	useEffect(() => {
		fetch("../../../public/recipe.json")
			.then((res) => res.json())
			.then((data) => {
				setSingleRecipe(data)
			})
	}, [])

	return (
		<>
			<div className='flex flex-col mt-20'>
				<h3 className='text-4xl text-black font-semibold leading-[50px] text-center'>Our Recipes</h3>
				<p className='leading-6 text-[#150B2B99] text-center self-center max-w-[820px] my-8'>
					Here are some famous recipes of ours. These recipes are famous all over the world. You can see them all. They are given below.
				</p>

				<div className='flex gap-8'>
					<div className='grid grid-cols-2 gap-8'>
						{singleRecipe.map((recipe, index) => (
							<Recipe key={index} recipe={recipe} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Recipes
