import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StrainList from "./components/StrainList";
import StrainDetail from "./components/StrainDetail";
import StrainFaves from "./components/StrainFaves";

function Strains() {
	const [strainCollection, setStrainCollection] = useState({})
	const [strainFavorites, setStrainFavorites] = useState([])
	const [strain, setStrain] = useState({})
	const [strainName, setStrainName] = useState('')

	useEffect (() => {
		console.log("running axios to get strains")
		axios.get('http://strainapi.evanbusse.com/AJg5spQ/strains/search/all?limit=5').then((response) => {
			setStrainCollection(response.data.results);
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