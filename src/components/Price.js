import React, {useContext} from "react"
import BookContext from "../contexts/BookContext"

export default function Price() {
	const {seats} = useContext(BookContext)
	return (
		<div>
			<p>Selected {seats.totalSeats} seats and the total price is {seats.totalSeats * seats.seatPrice}Won</p>
		</div>
	)
}
