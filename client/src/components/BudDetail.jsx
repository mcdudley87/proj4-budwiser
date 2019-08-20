import React from 'react';


function BudDetail({budbook}) {
	let content;
	if (Object.keys(budbook).length > 0) {
		// there are budbooks
		content = (
			<>
				<h1>{budbook.title}</h1>
				<h3>Description: {budbook.desc}</h3>
				<p>Notes: {budbook.notes}</p>
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