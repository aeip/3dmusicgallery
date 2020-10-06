import React from 'react';
import './App.css';
import Gallery from './Components/Objects/InWorld/Gallery'


function App() {
  return (
		<div className='App'>
			<Gallery />
			<div id='blocker'>
				<div id='instructions'>
					<span>Click to play</span>
					<br />
					<br />
					Move: WASD
					<br />
					Jump: SPACE
					<br />
					Look: MOUSE
				</div>
			</div>
		</div>
	);
}

export default App;
