import React from 'react'

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
					<div className='search'>
						<input id='search' name='search' type='text' placeholder='Artist' />
					</div>
				</div>
			</div>
		);
}

export default Instructions