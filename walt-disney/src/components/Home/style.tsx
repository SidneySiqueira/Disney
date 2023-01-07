import styled from 'styled-components'
      
interface Props{
    isMobile: boolean
}
export const Container = styled.div(({isMobile}:Props)=>{
    return{
    width:"100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isMobile? "#ffd627":"",
    border: isMobile? "10px solid black" : "",
    borderRadius: isMobile? "5px" : "",
}
})

export const Mickey = styled.img`
    width: 80%;
`

export const Menu = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    height: 60px;
    margin-bottom: 50px;
    font-family: 'New Walt Disney Font', sans-serif;                                             
    font-size:45px;
    font-weight: bold;
    letter-spacing: 4px;
    color: #ffd627;
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: #231f20;
    background-color: #d3011d;
    border: 2px solid #231f20;
    border-radius: 10px;
    cursor: pointer;
    :hover{
        background-color: #ffd425;
        transition: 0.7s;
        color: #231f20;
    }
`

export const Logo = styled.img`
margin-top: 50px;
    width: 100%;
`