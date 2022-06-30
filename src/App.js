import React, {useState} from "react"
import "./App.css"

import Selector from "./components/Selector"
import SeatAvailability from "./components/SeatAvailability"
import SeatMatrix from "./components/SeatMatrix"
import Price from "./components/Price"
import BssmLogo from './components/BssmLogo'

import BookContext from './contexts/BookContext'

const App = () => {

	const [seats, EditSeats] = useState({
		students: {
			여학생: 1000,
			남학생: 1000
		},
		seatPrice: 1000,
		totalSeats: 0,
		seatNumbers: []
	})

	return (
		<div className="main container">
			<BookContext.Provider value={{ seats, changeState: EditSeats }}>
				<BssmLogo/>
				<Selector />
				<SeatMatrix />
				<SeatAvailability />
				<Price />
			</BookContext.Provider>
		</div>
	)
}

export default App
