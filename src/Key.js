import "./Key.css"

function Key({note, instrument, vis, isBeingPlayed, keyboardKey}) {
    if (isBeingPlayed === true && vis === false) {
        instrument?.play(note)
        setTimeout(() => {
            instrument?.stop()
        }, 1000)
    }
    return (
        <div className="keyContainer">
        <button className={note.includes("#") === true ? "sharp" : "normal"} style={isBeingPlayed === true ? {backgroundColor: "red"} : null} onKeyDown={(e) => {
            
        }} disabled={vis === true ? true : false} onClick={() => {
            instrument?.play(note)
            setTimeout(() => {
                instrument?.stop()
            }, 1000)
        }}>{note}{keyboardKey}</button>
        </div>
    )
}
export default Key;