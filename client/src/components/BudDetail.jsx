import React from 'react';


function BudDetail({budbooks}) {
	let content;
	if (budbooks.length > 0) {
		// there are budbooks
		// map budbooks to display
		content = (
			<>
				<h1>{budbooks.title}</h1>
				<h3>Description: {budbooks.desc}</h3>
				<p>Notes: {budbooks.notes}</p>
				<button>DELETE budbook ADD FUNCTIONALITY</button>
			</>
		)
	} else {
		// no budbooks
		content = <p>No budbook selected</p>
	}
	return (
		<>
			{content}
		</>
	);
}

export default BudDetail;