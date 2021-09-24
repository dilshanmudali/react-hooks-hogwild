import React from 'react'
import OneHog from './OneHog'


const MainContent = ({hogs , showHogs, greaseOption}) => {

    const hogCards = hogs.map(hog => {
        return(
            <>  
                <h2>{hog.name}</h2>
                <img src={hog.image} alt={hog.name}/>
                <OneHog greaseOption={greaseOption} hog={hog}/> 
            </>
        )
    })
    return (
        <>
            <button onClick={showHogs} >Greased</button>
            {hogCards}
        </>
    )
}

export default MainContent
