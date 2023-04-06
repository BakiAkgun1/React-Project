// import logo from './logo.svg';
import { Carousel } from 'bootstrap';
import './App.css';
import Button from 'react-bootstrap/Button';
import FirstComponent from './FirstComponent';
// import List from './List';
import Carosel from './Carosel';
 import CarouselItem from 'react-bootstrap/esm/CarouselItem';
 import Nav from 'react-bootstrap/Nav';
 import Fill from './Fill';
import FormComp from './FormComp';
function App() {
  const marker=true;
  return (
     <div className='App'>  
     <Fill></Fill>
     <FormComp></FormComp>
     {/* <br>
     </br><br></br>
       <><FirstComponent      >  </FirstComponent><span class="material-symbols-outlined">
     keyboard_command_key
   </span></>
   <FirstComponent></FirstComponent>
   {ShowList()}
   {marker? ShowList():<FirstComponent></FirstComponent>} */}
   
   </div>

  );
}
  function ShowList(){
    return(
      <div>
        <form><input></input></form>
      </div>
    )
  }

export default App;
 