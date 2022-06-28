import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DigitalTimer1 from './components/DigitalTimer1';
import DigitalTimer2 from './components/DigitalTimer2';
import DigitalTimer3 from './components/DigitalTimer3';
import DigitalTimer4 from './components/DigitalTimer4';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Link from "next/Link";
// import {useState} from "react";

// const data = useState({name:"正方"})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="container">

      <section class="one">
        <div className='timer-heading'>
        <div className='timer-heading'>全国中学华语辩论赛<br/>正方任一辩手陈词</div>
        <DigitalTimer1/>
        </div>
      </section>

      <section class="two">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>反方任一辩手陈词</div>
        <DigitalTimer1/>
        </div>
      </section>

      <section class="two">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>盘问(一):反方提问正方</div>
        <DigitalTimer3/>
        </div>
      </section>

      <section class="one">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>盘问(一):正方提问反方</div>
        <DigitalTimer3/>
        </div>
      </section>

      <section class="two">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>驳论(一):反方辩手发言</div>
        <DigitalTimer3/>
        </div>
      </section>

      <section class="one">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>驳论(一):正方辩手发言</div>
        <DigitalTimer3/>
        </div>
      </section>

      <section class="one">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>盘问(二):正方提问反方</div>
        <DigitalTimer3/>
        </div>
      </section>

      <section class="two">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>盘问(二):反方提问正方</div>
        <DigitalTimer3/>
        </div>
      </section>

      <section class="one">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>驳论(二):正方辩手发言</div>
        <DigitalTimer3/>
        </div>
      </section>

      <section class="two">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>驳论(二):反方辩手发言</div>
        <DigitalTimer3/>
        </div>
      </section>

      <section class="three">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>攻辩(一):正方先发言</div>
          <DigitalTimer2/>
        </div>
      </section>

      <section class="three">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>攻辩(二):反方先发言</div>
          <DigitalTimer4/>
        </div>
      </section>


      <section class="two">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>反方:总结陈词</div>
        <DigitalTimer1/>
        </div>
      </section>

      <section class="one">
        <div className='timer-heading'>
        <div>全国中学华语辩论赛<br/>正方:总结陈词</div>
        <DigitalTimer1/>
        </div>
      </section>


      
    </div>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
