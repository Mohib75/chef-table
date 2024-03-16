import "./App.css"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Recipes from "./components/recipes/Recipes"

function App() {
	return (
		<>
			<div className='container mx-auto'>
				<Navbar />
				<Header />
				<Recipes />
			</div>
		</>
	)
}

export default App
