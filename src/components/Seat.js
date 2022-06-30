import React, {useContext} from 'react'
import BookContext from "../contexts/BookContext"

import './styles/Seat.css'

const Seat = (props) => {
    const { seats } = useContext(BookContext)
    const context = useContext(BookContext)

    const seatNumber = props.seatno
    const seatStatus = props.seatColor ? props.seatColor : "seat-grey" 

    const seatClickHandler = (event, seatNumber) => {
        event.stopPropagation()
        const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
        if (seats.seatNumbers.includes(seatNumber)) {
            const newSeats = seats.seatNumbers.filter((seat) => {
                return seat !== seatNumber
            })
            seatColor.remove("seat-black")
            seatColor.add("seat-grey")
            context.changeState({...seats, seatNumbers: newSeats, totalSeats: seats.totalSeats-1 })
        } else {
            seatColor.remove("seat-grey")
            seatColor.add("seat-black")
            context.changeState({...seats, seatNumbers: [...seats.seatNumbers, seatNumber], totalSeats: seats.totalSeats+1 })
        }
    }

    return (
        <div className="col-2 col-md-2">
            <div className={`seat seat-${seatNumber} ${seatStatus}`}
                onClick={(e) => seatClickHandler(e,props.seatno)} />
        </div>
    )
}

export default Seat