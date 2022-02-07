import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megasena() {

    const [numeros, setNumeros] = useState(mega())

    function renderNumeros() {
        return numeros.map(numero => <NumeroDisplay key={numero} numero={numero} />)
    }


    return (
            <div style={{
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center' 
                
                }}>
                    <h1>Mega Sena</h1>
                  <div style={{display: 'flex', marginBottom: '25px'}}>{renderNumeros()}</div>
                  <button onClick={() => setNumeros(mega())}>Gerar Aposta</button>

        </div>
    )
}