import React from 'react';

function Budbook() {
	return (
		<>
			<div>
				Create New Budbook
			</div>
			<form action="submit">
				<input type="string" name="title" placeholder="title" /> {' '}
				<input type="string" name="description" placeholder="description"/> {' '}
				<input type="text" name="notes" placeholder="notes" />
			</form>
		</>
	)
}

//Display a list of favorites from the search results with a delete route. 

//Comments field with update route?



export default Budbook;