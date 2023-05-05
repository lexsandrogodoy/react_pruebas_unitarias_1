import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CounterApp({value}) {

    const [counter, setCounter] = useState(value);

    function handleAdd() {
        // value=1000;
        // console.log(value);
        setCounter(counter + 1);
        // otra forma es:
        // setCounter((c) => c + 1);
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={ handleAdd }>
            +1
        </button>
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