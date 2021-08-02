import React from 'react'

export default function IncrementButton() {
    //set initial state
    const [counter, setCounter] = React.useState(0);

    //handle click event
    function handleClick() {
        //increment counter
        setCounter(prevCount => prevCount + 1);
        
    }

    //render
    return (
        <button onClick={handleClick}>
            {counter}
        </button>
    )
}