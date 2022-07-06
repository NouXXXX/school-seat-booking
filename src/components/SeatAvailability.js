import React from "react"
import Seat from './Seat'

export default function SeatAvailability() {
	return (
		<div className="row">
			남은 좌석 : <Seat seatColor="seat-grey" />
			예약된 좌석 : <Seat seatColor="seat-black" />
		</div>
	)
}
