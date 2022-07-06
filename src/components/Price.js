import React, {useContext} from "react"
import BookContext from "../contexts/BookContext"

export default function Price() {
	const {seats} = useContext(BookContext)
	return (
		<div>
			<p>선택된 자리는 {seats.totalSeats} 좌석이고, 총 가격은 {seats.totalSeats * seats.seatPrice}Won 입니다.</p>
		</div>
	)
}
