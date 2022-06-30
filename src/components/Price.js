import React, {useContext} from "react"
import BookContext from "../contexts/BookContext"

const Price = () => {
	const {seats} = useContext(BookContext)
	return (
		<div>
			<p>Selected {seats.totalSeats} seats and the total price is {seats.totalSeats * seats.seatPrice}(Won)</p>
		</div>
	)
}

export default Price
