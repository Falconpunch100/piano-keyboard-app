import Key from "./Key.js"
import AllInstruments from "./all-instruments.json"
import AllNotes from "./notes.json"
import Soundplayer from "soundfont-player"
import { useState, useEffect } from "react"
import Loader from "./Loader.js"
import "./Piano.css"
let sound = new AudioContext()

function Piano() {
    let [instrument, setInstrument] = useState(null)
    let [chosenInst, setChosenInst] = useState("")
    let [pressedKeys, setPressedKeys] = useState([])
    let [vis, setVis] = useState(false)
    useEffect(() => {
        async function makeSound() {
            const selectedInstrument = await Soundplayer.instrument(sound, chosenInst)
            setVis(false)
            setInstrument(selectedInstrument)
        }
        if (chosenInst !== "") {
            setVis(true)
            makeSound()
        }
    }, [chosenInst])
    function onKeyPress(e) {
        if (e.repeat) {
            return
        }
        setPressedKeys(oldState => {
            const copy = [...oldState]
            copy.push(e.key)
            return copy
        })
    }

    function onKeyRelease(e) {
        setPressedKeys(oldState => {
            const copy = [...oldState]
            let deleteIndex = copy.findIndex((currKey) => {
                if (currKey === e.key) {
                    return true
                }
                else {
                    return false
                }
            })
            if (deleteIndex !== -1) {
                copy.splice(deleteIndex, 1)
            }
            return copy
        })
    }

    useEffect(() => {
        window.addEventListener("keydown", onKeyPress)
        window.addEventListener("keyup", onKeyRelease)
        return () => {
            window.removeEventListener("keydown", onKeyPress)
            window.removeEventListener("keyup", onKeyRelease)
        }
    }, [])
    return (
        <>
            <h1>Welcome to the Keyboard App!</h1>
            <h3>On this app, you can create your own music with just the click of a mouse! All you have to do is select the instrument of your desire and get to playing!</h3>
            <form>
                <select onChange={(e) => {
                    setChosenInst(e.target.value)
                }}>
                    <option value=""></option>
                    {AllInstruments.map((currInstrument) => {
                        return (
                            <option key={currInstrument} value={currInstrument}>{currInstrument[0].toUpperCase() + currInstrument.slice(1, currInstrument.length)}</option>
                        )
                    })}

                </select>
            </form>
            <section id="piano">
                {vis === true ? <Loader></Loader> : null}
                {AllNotes.map((currNote) => {
                    return (
                        <Key key={currNote.noteName} vis={vis} instrument={instrument} note={currNote.noteName} isBeingPlayed={pressedKeys.includes(currNote.keyboardKey)} keyboardKey={currNote.keyboardKey}></Key>
                    )
                })}
            </section>
        </>
    )
}
export default Piano;