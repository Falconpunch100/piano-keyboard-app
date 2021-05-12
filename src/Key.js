import "./Key.css"

function Key({note, instrument, vis, isBeingPlayed, keyboardKey}) {
    if (isBeingPlayed === true) {
        instrument?.play(note)
    }
    return (
        <div className="keyContainer">
        <button className={note.includes("#") === true ? "sharp" : "normal"} onKeyDown={(e) => {
            
        }} disabled={vis === true ? true : false} onClick={() => {
            instrument?.play(note)
        }}>{note}{keyboardKey}</button>
        </div>
    )
}
export default Key;