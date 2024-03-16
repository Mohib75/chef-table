import PropTypes from "prop-types"
const CurrentlyCooking = ({ currentlyCooking }) => {
	let totalPreparingTime = 0
	let totalCalories = 0

	currentlyCooking.forEach((item) => {
		totalPreparingTime += parseInt(item.preparing_time.replace("min", ""))
		totalCalories += parseInt(item.calories.replace("calories", ""))
	})

	return (
		<div className='flex flex-col mt-8'>
			<h4 className='text-center self-center font-semibold leading-7 text-black'>Currently Cooking: {currentlyCooking.length}</h4>
			<hr className='border-[1px] border-solid border-[#28282826] my-6 w-[60%] max-w-[350px] self-center' />

			<table className='min-w-full text-center rounded-2xl overflow-hidden'>
				<thead>
					<tr className='text-[#878787] leading-5 text-[10px] sm:text-base'>
						<th className='px-2 sm:px-6 py-3'></th>
						<th className='px-2 sm:px-6 py-3'>Name</th>
						<th className='px-2 sm:px-6 py-3'>Time</th>
						<th className='px-2 sm:px-6 py-3'>Calories</th>
					</tr>
				</thead>
				<tbody className='bg-[#28282808]'>
					{currentlyCooking.map((item, index) => (
						<tr key={index} className='text-[#878787] leading-5 text-[10px] sm:text-base'>
							<td className='sm:px-6 py-4'>{index + 1}</td>
							<td className='sm:px-6 py-4'>{item.recipe_name}</td>
							<td className='sm:px-6 py-4'>{item.preparing_time}</td>
							<td className='sm:px-6 py-4'>{item.calories}</td>
						</tr>
					))}
					<tr className='text-[#878787] leading-5 bg-white text-[10px] sm:text-base'>
						<td className='sm:px-6 py-3'></td>
						<td className='sm:px-6 py-3'></td>
						<td className='px-1 sm:px-6 py-3'>Total Time = {totalPreparingTime} min</td>
						<td className='px-1 sm:px-6 py-3'>Total Calories = {totalCalories} calories</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

CurrentlyCooking.propTypes = {
	currentlyCooking: PropTypes.array,
}

export default CurrentlyCooking
