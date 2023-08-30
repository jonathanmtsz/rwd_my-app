import { useEffect, useLayoutEffect, useState } from "react"

export const Form = () => {
    const [name, setName] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [data, setData] = useState("")
    const [select, setSelect] = useState ("")
    const [rg, setDocumentRG] = useState(false)
    const [cpf, setDocumentCPF] = useState(false)
    const [check, setCheck] = useState()

    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeSobrenome = (event) => {
        setSobrenome(event.target.value)
    }
    const handleChangeData = (event) => {
        setData(event.target.value)
    }
    const handleDocumentRG = (event) => {
        setDocumentRG(event.target.checked)
    }
    const handleDocumentCPF = (event) => {
        setDocumentCPF(event.target.checked)
    }
    const handleSelect = (event) => {
        setSelect(event.target.value)
    }
    const handleCheck = (event) =>{
        setCheck(event.target.checked)
    }
    const handleSave = () => {
        const payload = {
            nome: name,
            sobrenome: sobrenome,
            estado_civil: select,
            data: data,
            documento: cpf ? 'CPF' : 'RG',
            termos: check

        }
        console.log(payload)
    }
    /**
     * APENAS COISAS VISUAIS!
     */
    useLayoutEffect(() => {
        setName("Jorge")
    }, [])
    useEffect(() => {
        setSobrenome("Oi")
    }, [] )

    return (
        <form>
            <div>
                <h3>{name}, {sobrenome}, {data}, {select}</h3>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" onChange={handleChangeName} />
                <br></br>
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input type="text" id="sobrenome" onChange={handleChangeSobrenome} />
                <br></br>
                    <label htmlFor="data">Data de Nascimento</label>
                    <input type="date" id="data" onChange={handleChangeData} />
                <br></br>

                <label htmlFor="estadoCivil">Estado Civil: </label>
                <select name="estadoCivil" id="estadoCivil" onChange={handleSelect}>
                    <option value="casado">Casado</option>
                    <option value="solteiro">Solteiro</option>
                    <option value="viuvo">Viuvo</option>
                    <option value="uniao estavel">União Estavel</option>
                </select>

                <fieldset> <legend>Documentos</legend>
                    <input type="radio" id="cpf" name="document" value="CPF" onChange={handleDocumentRG} />
                    <label htmlFor="cpf">CPF</label>
                    <input type="radio" id="rg" name="document" value="RG" onChange={handleDocumentCPF} />
                    <label htmlFor="rg">RG</label>
                </fieldset>
                <input type="checkbox" id="termos" name="termos" value="termos" onChange={handleCheck}/>
                <label htmlFor="termos"> Eu aceito os termos e condições</label><br></br>
                <button onClick={handleSave}>ENVIAR</button>
            </div>
        </form>
    )
}