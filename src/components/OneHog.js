import React from 'react'

const OneHog = ({hog, greaseOption}) => {

    function changeHog() {
        if(hog.greased === true){
            greaseOption(hog)
        }else{
            greaseOption(hog)
        }
    }
    

    return (
        <>
            <div key={hog.name}>  
                <p>{hog.specialty}</p>
                <p>{hog.weight}</p>
                <p>{hog.greased}</p>
                <p>{hog[4]}</p>
            </div>

        </>
    )
}

export default OneHog
