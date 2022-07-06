import React from "react"
import Seat from './Seat'
import './styles/Seat.css'

const GenerateSeats = (seatNumbers) => {
	return (
		<div className="row">
			{
				seatNumbers.map((seatNumber) => {
					return <Seat seatno={seatNumber} key={seatNumber}/>
				})
			}
		</div>
	)
}

export default function SeatMatrix(){
	return (
		<div className="class">
			<p>(칠판)</p>
			<div className="seats">
				{GenerateSeats([1, 2, 3, 4])}
				{GenerateSeats([5, 6, 7, 8])}
				{GenerateSeats([9, 10, 11, 12])}
				{GenerateSeats([13, 14, 15, 16])}
			</div>
		</div>
	)
}
