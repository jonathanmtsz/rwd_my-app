import { useState,useEffect } from "react"
import { AddressProps } from "../../pages/Address/Address"

interface AddressDataProps {
    adressData: AddressProps
}

export const AddressForm = ({addressData}:AddressDataProps) => {

    const [PostalCode, setPostalCode] = useState(addressData.cep)
    const [StreetName, setStreetName] = useState(addressData.street)
    const [NeighborhoodName, setNeighborhoodName] = useState(addressData.neighborhood)
    const [CityName, setCityName] = useState(addressData.city)
    const [StateName, setStateName] = useState(addressData.state)

    useEffect(() =>{
        const {cep, street, neighborhood, city, state} = addressData 
        setPostalCode(cep)
        setStreetName(street)
        setNeighborhoodName(neighborhood)
        setCityName(city)
        setStateName(state)
    },[/* Array de Dependencias, toda vez que o valor aqui ser alterado, o use effect é usado */addressData])

    return (
        <form>
            <div>
                <h3>Address Form</h3>
                    <label htmlFor="cep">CEP</label>
                    <input type="text" id="cep" value={PostalCode}/>
                <br></br>
                    <label htmlFor="logradouro">Logradouro</label>
                    <input type="text" id="logradouro" value={StreetName}/>
                <br></br>
                    <label htmlFor="bairro">Bairro</label>
                    <input type="text" id="bairro" value={NeighborhoodName}/>
                <br></br>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" id="bairro" value={CityName}/>
                <br></br>
                    <label htmlFor="estado">Estado</label>
                    <input type="text" id="estado" value={StateName}/>
                <br></br>
            </div>
        </form>
    )
}