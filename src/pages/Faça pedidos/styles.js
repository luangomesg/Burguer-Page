import styled from 'styled-components';



export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100vw;
    height: 100vh;
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
        width: 80%;
    }
`

export const H2 = styled.h2`
    color: #fff;

`

export const ContainerOrder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
`

export const Label = styled.label`
    color: #fff;
    margin-top: 30px;
    margin-left: 20px;
`

export const Input = styled.input`
    width: 100%;
    max-width: 342px;
    height: 48px;
    border-radius: 14px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.25);
    color: #fff;
    border: none;
    outline: none;

    &::placeholder{
        color: #A9A9A9
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