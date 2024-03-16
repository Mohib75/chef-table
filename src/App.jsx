import "./App.css"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Recipes from "./components/recipes/Recipes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
	return (
		<>
			<div className='container mx-auto'>
				<Navbar />
				<Header />
				<Recipes />
				<ToastContainer />
			</div>
		</>
	)
}

export default App
