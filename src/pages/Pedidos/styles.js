import styled from 'styled-components';



export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    min-height: 100vh;
    background-color: #000;
`

export const ContainerOne = styled.div`
    display: flex;
    width: 100%;
    max-width: 350px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    img {
        width: 60%;
    }
`

export const H2 = styled.h2`
    color: #fff;

`

export const ContainerOrder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 300px;
    margin-top: 30px;
    
   
`

export const ContainerTwo = styled.div`
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    max-width: 342px;
    padding: 15px 0;
    justify-content: space-around;
    

`

export const ContainerImg = styled.div`
    align-self: center;
    cursor: pointer;
`

export const ContainerTree = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    height: 100%;
    padding: 0 10px;
    p {
        color: #fffffff9;
        font-size: 13px;
        word-wrap: break-word;
        
    }

    p:nth-child(2) {
        margin-top: 30px;
    }

   
    
`



export const BtnOrder = styled.button`
    color: #fff;
    margin-top: 50px;
    background-color:  #D93856;
    width: 100%;
    max-width: 342px;
    height: 68px;
    font-style: normal;
    font-weight: 900;
    cursor: pointer;
`