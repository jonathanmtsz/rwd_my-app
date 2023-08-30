import { Button } from "./components/Button/Button"
import { Header } from "./components/Header/Header"
import { Card } from "./components/Card/Card"
import { Counter } from "./components/Counter/Counter"
import { Form } from "./components/Form/Form"
import { AddressForm } from "./components/AddressForm/AddressForm"
import { Address } from "./pages/Address/Address"

function App() {
  const user = {
    name: 'JNTN',
    image: ""
  
  }  

  return (
    <>
      {/* <Header userName={user.name}/>
      <p>{user.name}</p>
      <Button success>Salvar</Button>
      <Button danger>Cancelar</Button>
      <Button disabled>Cancelar desabilidado</Button>
      
        {products.map((product) => (
          <Card key={product.id}> 
          <h3>{product.name}</h3> 
          <p>{product.value}</p> 
          <Button>Adicionar</Button>
          </ Card>
        ) )}
        <Counter start={1}>

        </Counter> */}
        <Address />
    </>
  )
}

export default App
