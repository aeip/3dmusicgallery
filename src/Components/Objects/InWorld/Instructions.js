import React from 'react'
import Search from './Search'

const Instructions = () => {
    return (
			<div id='blocker'>
				<div id='instructions'>
					Move: WASD or Arrow keys
					<br />
					Jump: SPACE
					<br />
					Look: MOUSE
                    <br />
					<Search />
				</div>
			</div>
		);
}

export default Instructions