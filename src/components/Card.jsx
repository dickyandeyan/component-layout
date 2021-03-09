import React from 'react'
import Image from '../assets/gibson.jpg'

function Card() {
  return (
    <section>
      <div className="card">
        <img src={Image} width="100%" />
        <div className="card-text">
          <h1>Gibsol Les Paul Black</h1>
          <p>
            The Gibson Les Paul is a solid body electric guitar that was first
            sold by the Gibson Guitar Corporation in 1952.[1] The Les Paul was
            designed by Gibson president Ted McCarty, factory manager John Huis
            and their team with input from and endorsement by guitarist Les
            Paul. Its typical design features a solid mahogany body with a
            carved maple top and a single cutaway, a mahogany set-in neck with a
            rosewood fretboard, two pickups with independent volume and tone
            controls, and a stoptail bridge, although variants exist.
          </p>
        </div>
        <button type="button" className="btn-learn-more">
          Learn More
        </button>
      </div>
    </section>
  )
}
export default Card
