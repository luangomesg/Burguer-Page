import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { ContainerImg, ContainerTree, ContainerTwo, BtnOrder, Main, ContainerOne, H2, ContainerOrder } from './styles.js';
import { useNavigate } from 'react-router-dom';
import burguer from '../../assets/burguer2.svg';
import trash from '../../assets/trash.svg';


function Home() {
  const navigate = useNavigate();
  const [users, setUser] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const data = await axios.get("http://localhost:3002/order")
      setUser(data.data)
      
    }
    fetchUser()
  }, [users])

  function backPage() {
    navigate("/")
  }

  async function deleteOrder(userId) {
    await axios.delete(`http://localhost:3002/order/${userId}`)
    
  }

  

  return (
    <Main >
      <ContainerOne>
        <img alt='Burguer-Logo' src={burguer} />
        <H2>Pedidos</H2>
      </ContainerOne>

      <ContainerOrder>
          {
            users.map((user) => {
              return <ContainerTwo key={user.id}>
              <ContainerTree>
                  <p>{user.order}</p>
                  <p>{user.clienteName}</p>
              </ContainerTree>
              <ContainerImg><img onClick={() => deleteOrder(user.id)} alt='Delete-Img' src={trash}/></ContainerImg>
            </ContainerTwo>
            })
          }
          <BtnOrder onClick={backPage}>Voltar</BtnOrder>
      </ContainerOrder>


    </Main>
  )
}


export default Home