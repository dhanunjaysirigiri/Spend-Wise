import React from "react";
import styled, { keyframes } from "styled-components"
//for resizing the User Interface(UI) we need to ping the useWindowSize
import { useWindowSize } from "../../utils/useWindowSize"; 

//Lets create a function as Orb():
function Orb() {    

    const OrbStyled= styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: - 37vh;

    //this below lines give the blur filter to the bg(That's basically acts as gradient)
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(100px);
    animation: ${moveOrb} 1s alternate linear infinite;
    `;

    return(
        <OrbStyled> </OrbStyled>
    )

}
export default Orb