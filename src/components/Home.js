import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Section1 from "./Section1";
function Home(){
    return(
        <Main>
        <Container>
            <Section
            Title="Model S"
            backgroungImage="model-s.jpg"
            BtnText="Order"
            />
            <Section
            Title="Model Y"
            backgroungImage="model-y.jpg"
            BtnText="Order"
            />
        </Container>
        
        <Container>
            <Section1
            Title="Model 3"
            backgroungImage="model-3.jpg"
            BtnText="Order"
            />
        </Container>

       
        

        </Main>
    )
}

export default Home
const Container=styled.div`
width: 100vw;
height: 50vh
`
const Main=styled.div``