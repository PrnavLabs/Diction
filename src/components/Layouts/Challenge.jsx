import ProgressBar from "../ProgressBar"

export default function Challenge(){
    const word= 'Diction'
    const definition= 'the choice and use of words and phrases in speech or writing'
    return(
        <section id="challenge">
            <h1>{word}</h1>
            <p>{definition}</p>
            <div className="helper">
                <div>
                    {[...Array(definition.length).keys()]
                        .map((char, elementIdx) => {
                            <div key={elementIdx}></div>
                        })}
                </div>
                <input type="text" placeholder="Enter the definition..."/>
            </div>
            <div className="challenge-btns">
                <button className="card-button-secondary">
                    <h6>Quit</h6>
                </button>
                <button className="card-button-primary">
                    <h6>I Forgot😔</h6>
                </button>
            </div>
            <ProgressBar/>
        </section>
    )
}