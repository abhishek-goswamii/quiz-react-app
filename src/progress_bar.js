import React from 'react'
import './progress_bar.css'

const Progress_bar = (props) => {
    
    

    return (
        <>
            <div className="progress_container">

                <div className="correct_container">
                    <div style={{width: props.correctwidth}}>
                    </div>
                    <p>{props.total_correct}/{props.total}</p>
                </div>
                <div className="incorrect_container">
                    <div style={{width: props.incorrectwidth}}>
                    </div>
                    <p>{props.total_incorrect}/{props.total}</p>
                </div>

            </div>

        </>
    )
}

export default Progress_bar