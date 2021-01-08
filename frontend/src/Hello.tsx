import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello({ message }: Props){
 
    useEffect(() => {
        //console.log('Componente iniciou')
    }, [])
 
    return(
        <h1>Hello {message}!</h1>
    )
}

/*
function Hello() {
    return(
        <h1>Componente Hello</h1>
    )
}
*/


export default Hello;