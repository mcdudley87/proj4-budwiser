import React from 'react';

function StrainFaves ({strainFavorites, handleStrainSelect}) {
	let content;
	if (strainFavorites.length) {
		content = strainFavorites.map((name, id) => {
			return <p onClick={() => handleStrainSelect(strainFavorites.name)} key={id}>{strainFavorites.name}</p>
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