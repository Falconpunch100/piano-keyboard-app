import maryLamb from "./lamb.jpg"
import twinkleStar from "./twinkleStar.png"
import odeJoy from "./odeJoy.png"
import { useState } from "react"
import "./SheetViewer.css"

function SheetViewer() {
    let sheet =  [{image: maryLamb, alt: "Mary Had a Little Lamb" }, { image: twinkleStar, alt: "Twinkle, Twinkle Little Star" }, { image: odeJoy, alt: "Ode to Joy" }]
    let [position, setPosition] = useState(0)
    return (
        <section id="sheet">
            <div className={`arrow ${position === 0 ? "disabled" : ""}`} onClick={() => {
                if (position !== 0) {
                    setPosition(position - 1)
                }
            }}>&#8592;</div>
            <img className="image" src={sheet[position].image} alt={sheet[position].alt} />
            <div className={`arrow ${position === 2 ? "disabled" : ""}`} onClick={() => {
                if (position !== 2) {
                    setPosition(position + 1)
                }
            }}>&#8594;</div>
        </section>
    )
}
export default SheetViewer