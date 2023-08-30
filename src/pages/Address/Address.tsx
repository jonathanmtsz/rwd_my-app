import { useEffect, useState } from "react"
import { AddressForm } from "../../components/AddressForm/AddressForm"



export interface AddressProps {
    cep : string
    street : string
    neig : string
    city : string
    state : string
}

export const Address = () => {
    const [addressData, setAddressData] = useState({}as AddressProps)
    useEffect(() => {
        fetch("https://brasilapi.com.br/api/cep/v1/{'07432575'}")
        .then((response)=>{
            console.log(response)
            if (response.ok){
                return response.json()
            }
        }).then((data) =>{
            setAddressData(data)
        } )
    }, [])

    return(
        <AddressForm addressData={addressData}/>
    )
}