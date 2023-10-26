import Name from "./Name";
import Image from "./Image";
import Price from "./Price";
import Description from "./Description";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image from "./img/Pasta 3.jpg";
import './App.css';




function BasicExample() {
let firstName="sana"
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <div >
        <Image />
      </div>
     
      <Card.Body>
        
        <Name />
        
       
        <div className="price" >
          <Price />
        </div>
        <div >
        <Description />
        </div>
        <button  >Add To Card</button>
      
      </Card.Body>
      
    </Card>
   <p >{firstName==="sana"? `Hello my name is ${firstName}` : "Hello there"}</p>
    {
      firstName=="sana" && (
        <img style={{height:300,width:300}} src={image} />
      )
    }
    </>

  );
}

export default BasicExample;
