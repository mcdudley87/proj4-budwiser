import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StrainList from "./StrainList";
import StrainFaves from "./StrainFaves";
import StrainDetail from "./StrainDetail";

function Strains() {
	const [strainCollection, setStrainCollection] = useState([])
	const [strainFavorites, setStrainFavorites] = useState([])
	const [strain, setStrain] = useState({})
	const [strainName, setStrainName] = useState('')

	useEffect (() => {
		console.log("running axios to get strains")
		axios.get('http://strainapi.evanbusse.com/AJg5spQ/strains/search/all').then((response) => {
			setStrainCollection(response.data);
			console.log('hi!')
		})
		axios.get('/budwiser/').then((response) => {
			setStrainFavorites(response.data);
		})
	}, [])

	useEffect(() => {
		axios.get(`http://strainapi.evanbusse.com/AJg5spQ/strains/${strainName}`).then((response) => {
			setStrain(response.data);
			console.log('sup!')
		})
	}, [strainName])
	console.log(strainCollection)
	return(
		<div className='Strains'>
			<StrainDetail strain={strain} setStrainFavorites={setStrainFavorites} />
			<hr />
			<StrainFaves strainFavorites={strainFavorites} handleStrainSelect={setStrainName} />
			<hr />
			<h1>Strains</h1>
			<StrainList strainCollection={strainCollection} handleStrainSelect={setStrainName} />
		</div>

	);

}









export default Strains;