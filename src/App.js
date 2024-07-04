//section 1
//before coding in frontend we need to install some packages
//npm install axios chart.js moment react-chartjs-2 react-datepicker styled-components
//This is the place where we style the components




import styled from "styled-components";
// lets import the image file:
import bg from './img/bg.png'

//now we are importing the data in styles/Laouts:
import {MainLayout} from './styles/Layouts'

import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation';


function App(){
  return (
    <AppStyled bg= {bg} className="App">
      {/* using this line <MainLayout>: we'll grt access to the MainLayout  */}
      

      {/* the <Orb /> will call the Orb() function in the Styles/Orb file */}
      <Orb /> 
      <MainLayout>
        <Navigation />

      </MainLayout>
    </AppStyled>     
  );
}


const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;

export default App;