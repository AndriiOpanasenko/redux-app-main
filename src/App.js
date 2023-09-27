import React from 'react'
import './App.css';
import Likes from './Likes';
import Title from './Title';
import Comments from './Comments';
import Spin from './Spin';



function App() {

  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          <div className="card-image">
            <img src="https://img5.goodfon.ru/wallpaper/nbig/9/8c/poberezhe-portugaliia-visentina.jpg" alt="" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
