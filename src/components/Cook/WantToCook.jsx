import PropTypes from "prop-types"
const WantToCook = ({ wantToCook, handleDelete }) => {
	// console.log(wantToCook)
	return (
		<div className='flex flex-col mt-8'>
			<h4 className='text-center self-center text-lg sm:text-2xl font-semibold leading-7 text-black'>Want to cook: {wantToCook.length}</h4>
			<hr className='border-[1px] border-solid border-[#28282826] my-6 w-[60%] max-w-[350px] self-center' />

			<table className='min-w-full text-center'>
				<thead>
					<tr className='text-[#878787] leading-5 text-[10px] sm:text-base'>
						<th className='sm:px-6 py-3'></th>
						<th className='sm:px-6 py-3'>Name</th>
						<th className='sm:px-6 py-3'>Time</th>
						<th className='sm:px-6 py-3'>Calories</th>
						<th className='sm:px-6 py-3'></th>
					</tr>
				</thead>
				<tbody className='bg-[#28282808]'>
					{wantToCook.map((item, index) => (
						<tr key={index} className='text-[#878787] leading-5 text-[10px] sm:text-base'>
							<td className='sm:px-6 py-4'>{index + 1}</td>
							<td className='sm:px-6 py-4'>{item.recipe_name}</td>
							<td className='sm:px-6 py-4'>{item.preparing_time}</td>
							<td className='sm:px-6 py-4'>{item.calories}</td>
							<td className='sm:px-6 py-4'>
								<button
									onClick={() => handleDelete(item.recipe_id)}
									className='btn text-[10px] sm:text-base sm:w-[115px] rounded-[50px] bg-[#0BE58A] text-black font-medium leading-5 hover:bg-[#0BE58A] hover:scale-110 hover:transform transition-all duration-500'>
									Preparing
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

WantToCook.propTypes = {
	wantToCook: PropTypes.array,
	handleDelete: PropTypes.func,
}

export default WantToCook
