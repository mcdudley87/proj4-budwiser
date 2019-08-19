import React, { Component } from 'react';
import axios from 'axios';

class SearchResult extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false,
			loading: false,
			positive: [],
			negative: [],
			medical: [],
			flavor: []
		};

		this.handleClick = this. handleClick.bind(this);
		this.setEffectsState = this.setEffectsState.bind(this);
		this.getPositive = this.getPositive.bind(this);
		this.getNegative = this.getNegative.bind(this);
		this.getFlavor = this.getFlavor.bind(this);
	}

	handleClick(e) {
		let elem = e.currentTarget;
		let infoContainer = elem.childNodes[1];
		let effectsContainer = elem.childNodes[2];
		let clickedElemID = elem.getAttribute('data-key');

		if (elem.classList.contains('active')) {
			elem.classList.remove('active');
			infoContainer.classList.remove('active');
			effectsContainer.classList.remove('active');
		} else {
			elem.classList.add('active');
			infoContainer.classList.add('active');
			effectsContainer.classList.add('active');
		}

		this.setState(
			{
				clickedID: clickedElemID
			},
			this.setEffectsState
		);
	}

	setEffectsState() {
		let { clickedID } = this.state;
		const APIkey = 'AJg5spQ';

		let url = `http://strainapi.evanbusse.com/${APIkey}/strains/data/effects/${clickedID}`;
		let flavorURL = `http://strainapi.evanbusse.com/${APIkey}/strains/data/flavors/${clickedID}`;
		
		this.setState({ loading: true });

		axios.get(url).then(res => {
			const results = res.data;

			// obj to array

			const arr = Object.entries(results).reduce(
				(arr, [key, value]) => arr.concat([{ name: key, ...value }]),
				[]
			);

			const positive = Object.values(arr[0]);
			const negative = Object.values(arr[1]);
			const medical = Object.values(arr[2]);

			axios.get(flavorURL).then(res => {
				const flavor = res.data;
				this.setState({
					flavor,
					positive,
					negative,
					medical
				});
			});
		});
	}

	getPositive() {
		const positives = this.state.positive;

		return(
			<ul>
				{positives.map(positive => (
					<li key={positive}>{positive}</li>
				))}
			</ul>
		);
	}

	getNegative() {
		const negatives = this.state.negative;

		return(
			<ul>
				{negatives.map(negative => (
					<li key={negative}>{negative}</li>
				))}
			</ul>
		);
	}
	getMedical() {
		const medicals = this.state.medical;

		return (
			<ul>
				{medicals.map(medical => (
					<li key={medical}>{medical}</li>
				))}
			</ul>
		);
	}

	getFlavor() {
		const flavors = this.state.flavor;

		return (
			<ul>
				{flavors.map(flavor => (
					<li key={flavor}>{flavor}</li>
				))}
			</ul>
		);
	}

	render() {
		const { result, index } = this.props;

		return(
			<div 
				key={index}
				className="result"
				onClick={this.handleClick}
				data-key={result.id}
			>
				<div className="result-name-type">
					<h1 className="result-name">{result.name}</h1>
					<div className="result-race">{result.race}</div>
				</div>
				<div className="result-effect">
					<p>{result.desc}</p>
				</div>
				<div className="result-effect">
					<h4>Positive Effects: </h4>
					{this.getPositive()}
				</div>
				<div>
					<h4>Negative Effects: </h4>
					{this.getNegative()}
				</div>
				<div>
					<h4>Medicinal: </h4>
					<p>{this.getMedical()}</p>
				</div>
				<div>
					<h4>Flavor Profile: </h4>
					<p>{this.getFlavor()}</p>
				</div>
				<h1> Favorite to Savor It </h1>
			</div>	
		);
	}
}





export default SearchResult;