import { useRef, React } from 'react';
import Contextapi from "./Contextapi"


function UseRefHooks() {
    const inputRef = useRef(null); // Initial value of ref is null

    const handleFocus = () => {
        inputRef.current.focus(); // Access the DOM element to focus

    };

    return (
        <>
            <h1>UseRef Hooks in REact </h1>

            <input ref={inputRef} type="text" placeholder="Type something..." />
            <button onClick={handleFocus}>Focus Input</button>
            <Contextapi />
        </>
    )
}

export default UseRefHooks