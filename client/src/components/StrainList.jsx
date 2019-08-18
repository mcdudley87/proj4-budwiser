import React from 'react';

function StrainList ({strainCollection, handleStrainSelect}) {
	let content;
	console.log(strainCollection)
	if (strainCollection.length) {
		content = strainCollection.map((strain, id) => {
			return <p onClick={() => handleStrainSelect(strain.name)} key={id}>{strain.name}</p>
		})
	} else {
		content = <p>...collection of Strains</p>
	}

	return (
		<div className="Strains">
			{content}
		</div>
	);
}



export default StrainList;