import maryLamb from "./lamb.jpg"
//import twinkleStar from "./twinkleStar.png"
import odeJoy from "./odeJoy.png"

function SheetViewer() {
    return (
        <section>
            <img src={maryLamb} alt="Mary Had a Little Lamb Sheet Music" />
            {/* <img src={twinkleStar} alt="Twinkle Twinkle Little Star Sheet Music" /> */}
            <img src={odeJoy} alt="Ode to Joy Sheet Music" />
        </section>
    )
}

export default SheetViewer