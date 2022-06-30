import React, { useContext } from "react"
import BookContext from "../contexts/BookContext"
import "./styles/Seat.css"

const Header = () => {

	const { seats } = useContext(BookContext)
	const seatData = useContext(BookContext)

	const GenerateOptions = () => {
		const seatsObject = seats.students
		return Object.keys(seatsObject).map((seat, key) => {
			return <option value={seat} key={key}>{seat} - ${seatsObject[seat]}</option>
		})
	}

	const seatSwitchHandler = (e) => {
		const newSeatPrice = seats.seatNames[e.target.value]
		seatData.changeState({...seats, seatPrice: newSeatPrice})
	}

	return (
		<div className="container" style={{ textAlign: "center" }}>
			<select className="seat-selector" onChange={seatSwitchHandler}>
				{GenerateOptions()}
			</select>
		</div>
	)
}

export default Header
