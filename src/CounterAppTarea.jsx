import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CounterApp({value}) {

    const [counter, setCounter] = useState(value);

    function handleAddAumentar() {
        // value=1000;
        // console.log(value);
        setCounter(counter + 1);
        // otra forma es:
        // setCounter((c) => c + 1);
    }

    const handleDisminuir = () => {
        setCounter(counter - 1);
    }

    const handleResetear = () => {
        setCounter(value);
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={ handleAddAumentar }> +1 </button>
        <button onClick={ handleDisminuir }> -1 </button>
        <button onClick={ handleResetear }> Reset </button>
    </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}

// rafc + tab => crear functional component