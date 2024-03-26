import { useEffect } from "react"
import { useState } from "react"
import Menu from "./components/Menu"


export const Media = () => {
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [n3, setN3] = useState()
    const [n4, setN4] = useState()
    const [n5, setN5] = useState()
    const [media, setMedia] = useState()

    useEffect (() => {
        if(n1 !== undefined && n2 !== undefined && n3 !== undefined && n4 !== undefined && n5 !== undefined){
            setMedia((n1+n2+n3+n4+n5)/5)
        }
    }), [n1,n2,n3,n4,n5]

    return(
        <>
            <Menu/>
            <div>
                <input type="number" name="" id="" placeholder="Digite a nota 1" onChange={(e) => setN1(e.target.value) }/>
                <input type="number" name="" id="" placeholder="Digite a nota 2" onChange={(e) => setN1(e.target.value) }/>
                <input type="number" name="" id="" placeholder="Digite a nota 3" onChange={(e) => setN1(e.target.value) }/>
                <input type="number" name="" id="" placeholder="Digite a nota 4" onChange={(e) => setN1(e.target.value) }/>
                <input type="number" name="" id="" placeholder="Digite a nota 5" onChange={(e) => setN1(e.target.value) }/>
            </div>
            <div>
                <h2>Media</h2>
                {!isNaN(media) && <p>{media}</p>}
            </div>
        </>
    )
}