import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Space } from 'antd';
import anime from 'animejs'; // Import Anime.js library
import RunawayButton from './RunawayButton';

function App() {

    const [open,setOpen] = useState(false)
    const onClick = () =>{
        setOpen((open) => !open);
    }

  return (
   <>
   <h1>Will you come on a date with me?</h1>
   <RunawayButton/>
   <Button className='btn-yes' onClick={onClick}>Yes</Button>
   {open ?(
    <div class="popup" id="popup">
          <p>Aww, thank you!</p>
      </div>
   ):(
    <></>
   )
   }
   </>
  );
};
export default App
