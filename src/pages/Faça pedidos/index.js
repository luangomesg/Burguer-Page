import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnOrder, Label, Input, Main, ContainerOne, H2, ContainerOrder } from './styles.js';
import burguer1 from '../../assets/burguer1.svg';
import axios from 'axios';


function Home() {

    const order = useRef();
    const clienteName = useRef();
    const navigate = useNavigate();

  async function createOrder() {
    const data = await axios.post("http://localhost:3002/order", {order: order.current.value, clienteName: clienteName.current.value})
    navigate("/Pedidos");
    console.log(data);
    
  }

  return (
    <Main>
      <ContainerOne>
        <img alt='Burguer-Logo' src={burguer1} />
        <H2>Faça seu pedido!</H2>
      </ContainerOne>

      <ContainerOrder>
          <Label>Pedido</Label>
          <Input ref={order} placeholder='1 Coca-Cola, 1 X-Salada'/>
          <Label>Nome do Cliente</Label>
          <Input ref={clienteName} placeholder='Steve Jobs'/>
          <BtnOrder onClick={createOrder}>Novo Pedido</BtnOrder>
      </ContainerOrder>


    </Main>
  )
}


export default Home