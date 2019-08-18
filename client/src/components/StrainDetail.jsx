import React from 'react';
import axios from 'axios';

function StrainDetail({strain, setStrainFavorites}) {
	let content;
	content = (
		<>
			<h1>YOU WANNA GET HIGH?</h1>
			<h3>{strain.name}</h3>

		</>
	)
	
	function saveFave() {
		axios.post('/budwiser/', {
			name: strain.name
		}).then (() => {
			axios.get('/budwiser/').then((response) => {
				setStrainFavorites(response.data);
			})
		})
	}

	return(
		<div className="Strains">
			{content}
		</div>
	)
}



export default StrainDetail;