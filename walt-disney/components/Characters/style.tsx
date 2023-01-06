import styled from 'styled-components'

interface Props{
    isMobile: boolean;
}

export const Container = styled.div(({isMobile}: Props)=>{
    return{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundImage: isMobile ? "":"url(https://img.elo7.com.br/product/zoom/355A4E5/tecido-mickey-disney-pronta-entrega-140-cm-x-50-cm-painel-festa.jpg)",
        backgroundColor: isMobile? "#ffd627" : "",
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        border: isMobile? "10px solid black" : "",
        borderRadius: isMobile? "5px" : "",
    }
})
        
export const Search = styled.div`
        width: 75%;
        display: flex;
        align-Items: center;
        margin: 10px 10px 0 10px;
`

export const Image = styled.img(({isMobile}:Props)=>{
    return {
        width: "80%",
        maxWidth: isMobile? "":"100px",
}
})
   
export const Input = styled.input`
    height: 50px;
    margin: 20px;
    border: 2px solid black;
    border-radius: 10px;
`
export const Button = styled.button`
   height: 50px;
   font-family: 'New Walt Disney Font', sans-serif;                                             
   font-size: 35px;
   font-weight: bold;
   letter-spacing: 4px;
   color: #ffd425;
   cursor: pointer;
   border: 2px solid #231f20;
   border-radius: 10px;
   background-color: #d3011d;
   -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: #231f20;
    :hover {
        background-color: #ffd425;
        transition: 0.7s;
        color: #231f20;
    }
`

export const Card = styled.div`
   width: 280px;
   height: 350px;
   background: linear-gradient( #231f20 70% , #d3011d 30%);
   border: 3px solid #231f20;
   border-radius:10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 10px;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`
export const BoxCard = styled.div`
    display:flex; 
    justify-content: center; 
    flex-wrap: wrap; 
    max-width: 1550px;
    width: 90%;
`
export const ImageCard = styled.img`
    margin: 10px 10px 0 10px;
    border: 1px solid white;
    border-radius: 5px;
    overflow: hidden;
    width: 250px;
    height: 250px;
`
export const NameCard = styled.p`
    font-family: 'New Walt Disney Font', sans-serif;                                             
    font-size: 45px;
    font-weight: bold;
    letter-spacing: 4px;
    color: #ffd627;
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: #231f20;
    margin: 5px 10px;
    text-align: center;
`

export const Pagination = styled.div`
    display:flex; 
    justify-content: center; 
    background-color: #d3011d;
    margin: 50px 0 50px 0;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #231f20;
`

export const AllCharacters = styled.p`
    font-family: 'New Walt Disney Font', sans-serif;                                             
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 4px;
    background-color: #d3011d;
    padding: 10px;
    color: #ffd627;
    border: 2px solid #231f20;
    border-radius: 10px;
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: #231f20;
    cursor:pointer;
    :hover {
        background-color: #ffd425;
        transition: 0.7s;
        color: #231f20;
    }
`


