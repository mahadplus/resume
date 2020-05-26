import React from 'react'
import TitleAndItems from './selection/TitleAndItems'
import AboutItem from './selection/AboutItem'
import MenuBar from './selection/MenuBar'
import SnowStorm from 'react-snowstorm'
import './App.css'
import Skils from './selection/Skils'
function App() {
  return (
    <div className="App">
      <div>
				<SnowStorm />
			</div>
      <MenuBar />
      <TitleAndItems />
      <AboutItem />
      <Skils/>
    </div>
  );
}

export default App;
