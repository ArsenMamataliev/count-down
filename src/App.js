import React from 'react';
import Countdown,{ zeroPad } from 'react-countdown';
import './App.css';
import SocialMediaIcons from './app/SocialMediaIcons';

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
  let birthday = new Date('December 18, 2021 19:00:00')
  return (
    <div className="App">
      <p>Презентация</p>
      <h3>Мы научим вас как за короткое время начать бизнес на амазон.</h3>
      <Countdown
        date={Date.parse(birthday)}
        renderer={renderer}
      />  
      <div className="date">2021-12-18 19:00</div>
      <a href="http://"><strong>&#8594;</strong>  Ссылка для презентации <strong>&#8592;</strong></a>
      <SocialMediaIcons/> 
    </div>
  );
}

export default App;