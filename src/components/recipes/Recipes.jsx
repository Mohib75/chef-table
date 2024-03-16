import { useState } from "react"
import { useEffect } from "react"
import Recipe from "../recipe/Recipe"
import WantToCook from "../Cook/WantToCook"
import CurrentlyCooking from "../Cook/CurrentlyCooking"
import { toast } from "react-toastify"

const Recipes = () => {
	const [singleRecipe, setSingleRecipe] = useState([])
	const [wantToCook, setWantToCook] = useState([])
	const [currentlyCooking, setCurrentlyCooking] = useState([])
	useEffect(() => {
		fetch("../../../public/recipe.json")
			.then((res) => res.json())
			.then((data) => {
				setSingleRecipe(data)
			})
	}, [])

	const handleWantToCook = (recipe) => {
		const isAdded = wantToCook.find((item) => item.recipe_id == recipe.recipe_id)

		if (!isAdded) {
			setWantToCook([...wantToCook, recipe])
			toast.success("Successfully added to wantToCook")
		} else {
			toast.error("already added in wantToCook")
		}
	}

	const handleDelete = (id) => {
		const newCart = wantToCook.filter((item) => item.recipe_id != id)
		const deletedCart = wantToCook.find((item) => item.recipe_id == id)
		setWantToCook(newCart)
		setCurrentlyCooking([...currentlyCooking, deletedCart])
		toast.success("Successfully added to currentlyCooking")
	}

	return (
		<>
			<div className='flex flex-col mt-20 mx-4 sm:mx-0'>
				<h3 className='text-2xl sm:text-4xl text-black font-semibold leading-[50px] text-center'>Our Recipes</h3>
				<p className='leading-6 text-[#150B2B99] text-center self-center max-w-[820px] my-8'>
					Here are some famous recipes of ours. These recipes are famous all over the world. You can see them all. They are given below.
				</p>

				<div className='flex flex-col lg:flex-row lg:justify-between gap-4 items-center justify-center lg:items-start'>
					<div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
						{singleRecipe.map((recipe, index) => (
							<Recipe key={index} recipe={recipe} handleWantToCook={handleWantToCook} />
						))}
					</div>

					<div className='lg:w-[600px] h-full border-[1px] border-solid border-[#28282833] rounded-2xl flex flex-col mb-20'>
						<WantToCook wantToCook={wantToCook} handleDelete={handleDelete} />
						<CurrentlyCooking currentlyCooking={currentlyCooking} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Recipes
