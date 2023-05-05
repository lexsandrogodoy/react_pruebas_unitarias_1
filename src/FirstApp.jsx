//import { Fragment } from 'react';
//Si se esta trabajando con cra se instalan las PropTypes automatico,
//con vite se deben importar manualmente, si fuera typescript no se importan
import PropTypes from 'prop-types';


const newMessage = 'Hola';

const newMessage2 = {
    name: 'Lexsandro',
    age: 33
};

function multiplicar(x,y) {
    return x * y;
}

const sumar = (x,y) => {
    return x + y;
}

export default function FirstApp({title, subTitle, name}) {

    // console.log(props);

    return (
        <>
            <h1>{ title }</h1>
            <h1>{ JSON.stringify(newMessage2) }</h1>
            <h1>{ multiplicar(2,2) }</h1>
            <h1>{ sumar(3,3) }</h1>
            <p>Soy un subtitulo</p>
            <p>{subTitle + 1}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

//se podría definir incluso el valor por defecto a props que no han sido enviadas
FirstApp.defaultProps = {
    name:"name",
    subTitle: 0,
    title: "No hay título",
}