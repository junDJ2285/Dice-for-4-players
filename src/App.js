import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './model';

let player1 = prompt("Enter your name");
let player2 = prompt("Player 2 Enter your name");
let player3 = prompt("Player 3 Enter your name");
let player4 = prompt("Player 4Enter your name");
function App() {
  const [head, sethead] = useState({
    head:'click button and start the match'
  });
  const [show, setshow] = useState(false)
  const [plyr1, setplyr1] = useState({
    name : player1,
    score: 0,
    active: true,
  })

  console.log(plyr1.score)
  const [plyr2, setplyr2] = useState({
    name : player2,
    score: 0,
    active: true,
  })
  const [plyr3, setplyr3] = useState({
    name : player3,
    score: 0,
    active: true,
  })
  const [plyr4, setplyr4] = useState({
    name : player4,
    score: 0,
    active: true,
  })
  // console.log(plyr2.score)
  const [dice, setdice] = useState(0);


  const Rolldice = () => {
    const num = Math.floor(Math.random() * 7)
    setdice(num)
    sethead("")

    if (plyr1.active) {
      setplyr1({
        ...plyr1,
        score: plyr1.score + num,
        active: num !== 0,
      })
      setplyr2({
        ...plyr2,
        active: num === 0,
      })
      setplyr3({
        ...plyr3,
        active: num === 0,
      })
      setplyr4({
        ...plyr4,
        active: num === 0,
      })
    } else if (plyr2.active) {
      setplyr2({
        ...plyr2,
        score: plyr2.score + num,
        active: num !== 0,
      })
    } else if (plyr3.active) {
      setplyr3({
        ...plyr3,
        score: plyr3.score + num,
        active: num !== 0,
      })
    } else if (plyr4.active) {
      setplyr4({
        ...plyr4,
        score: plyr4.score + num,
        active: num !== 0,

      })
    }
    else {
      if (plyr1.score > plyr2.score && plyr1.score > plyr3.score && plyr1.score > plyr4.score) {
        alert("Player 1 wins the match");
    } 
    else if (plyr2.score > plyr1.score && plyr2.score > plyr3.score && plyr2.score > plyr4.score) {
        alert("Player 2 wins the match");
    } 
    else if (plyr3.score > plyr1.score && plyr3.score > plyr2.score && plyr3.score > plyr4.score) {
        alert("Player 3 wins the match");
    } 
    else if (plyr4.score > plyr1.score && plyr4.score > plyr2.score && plyr4.score > plyr3.score) {
        alert("Player 4 wins the match");
    } 
    else {
        alert("It's a tie!"); // Handle the tie case if scores are equal
    }
     
    }


    if (num === 0) {
      // head.head1 = head.head4
      alert( " your move is over "  + "  start the next player")

    }
    }
  
  

  return (
    <div className="App">
      <div className='container'>
      <div className='head'>
        {/* <h1>{plyr1.name}</h1> */}
        <h1>DICE</h1>
      </div>
        <div id='dice'>
          <div className='players'>
            <h1 className='plyr1'>{plyr1.name}</h1>
            <span className='score'>{plyr1.score}</span>
          </div>
          <div className='players'>
            <h1 className='plyr2'>{plyr2.name}</h1>
            <span className='score'>{plyr2.score}</span>
          </div>
          {/* <img src=''> */}
        </div>
        
        <div className='diceRoll'>
          <h1>{head.head}</h1>
          <h1 className='score'>{dice}</h1>
          
          <button onClick={Rolldice} > <img src={require(`./assets/images/image${dice}.png`)} style={{width: "51px"}}/></button>
          {/* <button onClick={() => setshow(true)}> show</button> */}
        </div>
        <div id='dice'>
          <div className='players'>
            <h1 className='plyr1'>{plyr3.name}</h1>
            <span className='score'>{plyr3.score}</span>
          </div>
          <div className='players'>
            <h1 className='plyr2'>{plyr4.name}</h1>
            <span className='score'>{plyr4.score}</span>
          </div>
          {/* <div >{images}</div> */}
          {/* <img src=''> */}
        </div>
       
      </div>
      <Modal show={show} onclose={() => setshow(false)}>

      </Modal>
    </div>
  );
}

export default App;
