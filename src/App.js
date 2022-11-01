import React from 'react';
import Countdown,{ zeroPad } from 'react-countdown';
import './App.css';
import SocialMediaIcons from './app/SocialMediaIcons';
import logo from './media/amazone_mini.png';

// Random component
const Completionist = () => <span>Презентация начинается перейдите по ссылке</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span className="timer">
              <span className="column"><span className="dateWithDigit">{zeroPad(days)}-</span><span className="dateWithString">День</span></span>
              <span className="column"><span className="dateWithDigit">{zeroPad(hours)}:</span><span className="dateWithString">Часы</span></span>
              <span className="column"><span className="dateWithDigit">{zeroPad(minutes)}:</span><span className="dateWithString">Минута</span></span>
              <span className="column"><span className="dateWithDigit">{zeroPad(seconds)}</span><span className="dateWithString">Секунда</span></span>
          </span>
}
}

function App() {
  let exactDate = new Date('December 31, 2022 00:00:00')
  return (
    <div className="App">
      <p>Презентация</p>
      <h3><span className="redText">Кыргызстанда</span> отуруп, <span className="redText">Америкада</span> бизнес кылуу реалдуу.</h3>
      <img src={logo} alt="logo"/>
      <Countdown
        date={Date.parse(exactDate)}
        renderer={renderer}
      />  
      <div className="date">2022-10-12 00:00</div>
      <a href="https://www.youtube.com/channel/UCaS-gz_O5IBdsjgnjy_iJQg"><strong>&#8594;</strong>  Ссылка для презентации <strong>&#8592;</strong></a>
      <SocialMediaIcons/> 
    </div>
  );
}

export default App;
