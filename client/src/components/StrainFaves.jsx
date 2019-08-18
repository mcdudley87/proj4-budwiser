import React from 'react';

function StrainFaves ({strainFavorites, handleStrainSelect}) {
	let content;
	if (strainFavorites.length) {
		content = strainFavorites.map((strains, id) => {
			return <p onClick={() => handleStrainSelect(strain.name)} key={id}>{strain.name}</p>
		})
	} else {
		content = <p>...collection of Strains</p>
	}

	return (
		<div className="Strains" >
			<h1>Favorite Strains</h1>
			{content}
		</div>
	);
}



export default StrainFaves;