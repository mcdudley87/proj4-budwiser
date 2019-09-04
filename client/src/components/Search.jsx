import React, { Component } from 'react';
import axios from 'axios';
import Result from './Result';
import SearchResult from './SearchResult';
import '../App.css';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state ={
			search: '',
			searchType: 'name',
			searchList: [],
			wasSearched: false,
			loading: false,
			sent: false,
			results: [],
			error: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.getResults = this.getResults.bind(this);
		this.getSearchResults = this.getSearchResults.bind(this);
		this.addToSearchedList = this.addToSearchedList.bind(this);
		this.searchAll = this.searchAll.bind(this);
	}

	searchAll() {
		this.getResults();
		console.log('getting results');
	}

	// API Call to get search results
	getResults() {
		let { search, searchType } = this.state;
		const APIkey = 'AJg5spQ';
		let url = `http://strainapi.evanbusse.com/${APIkey}/strains/search/`;

		this.setState({ loading: true });

		search = search
			.toLowerCase()
			.split(' ')
			.map(s => s.charAt(0).toUpperCase() + s.substring(1))
			.join(' ');

		if (search && searchType) {
			url += `${searchType}/${search}`;
		} else if (search) {
			url += search;
		} else { 
			url += 'all';
		}
		console.log(url);

		axios.get(url).then(res => {
			const results = res.data;

			// Object to Array

			const arr = Object.entries(results).reduce(
				(arr, [key, value]) => arr.concat([{ name: key, ...value }]),
				[]
			);

			this.setState({
				results: arr,
				loading: false
			});
		});
	}

	// API call that gets search results

	getSearchResults() {
		let { search, searchType } = this.state
		const APIkey = 'AJg5spQ';
		let url = `http://strainapi.evanbusse.com/${APIkey}/strains/search/`;

		this.setState({ loading: true });

		search = search
			.toLowerCase()
			.split(' ')
			.map(s => s.charAt(0).toUpperCase() + s.substring(1))
			.join(' ');

		if (search && searchType) {
			url += `${searchType}/${search}`;
		} else if (search) {
			url += search;
		} else {
			url += 'all';
		}
		console.log(url);

		axios.get(url).then(res => {
			const results = res.data;

			// Obj. to array

			const arr = Object.entries(results).reduce(
				(arr, [key, value]) => arr.concat([{ name: key, ...value }]),
				[]
			);
			this.addToSearchedList(arr);

			this.setState({
				results: arr, 
				loading: false,
				wasSearched: true
			});
		});
	}

	addToSearchedList(resultsArr) {
		// Ternary operator to return error message if no search result found. 
		let searchedItem = resultsArr[0];
		let searchList = {
			name: [this.state.searchList, searchedItem],
			todoList: false
		};

		this.setState({
			searchList
		});
	}

	onSubmit(e) {
		e.preventDefault();
		this.getSearchResults();
	}

	onChange(e) {
		let name = e.target.name;
		let value = e.target.value;

		this.setState({
			[name]: value
		});
	}

	render() {
		const { search, searchType, results, loading, wasSearched } = this.state;

		return (
			<div className="Search">
				<div className="titlecard">
					<h1>
						<div className="title-bud">Bud</div>
						<div className="title-wiser">Books</div>
						<div className="title-subtitle">Bud, wiser.</div>
					</h1>
				
				</div> 
				<form action="#" onSubmit={this.onSubmit}>
					<input type="text"
								placeholder="Search for a strain..."
								name="search"
								value={search}
								onChange={this.onChange}
					/>

					<select value={searchType} onChange={this.onChange} name="searchType">
						<option value="name"> Search by Name </option>
						<option value="race"> Search by Race </option>
					</select>
					<input type="submit" />
				</form>		
				
				{/* Nifty search widget thing: */}
				{search ? (
						<h4 className="directions-subheader">
							{wasSearched ? `Results: ` : `Searching... `}
						</h4>
					) : (
						<p className="directions-header">
							Search for a strain by name to view details.
						</p>	
					)}	

				<div className="results-display">
					{loading ? (
						<div className="loader">
							<div className="loader-progress" />
						</div>
					) : (
						results.map((result, index) => 
						wasSearched ? (
							<SearchResult result={result} index={index} />
						) : (
							<Result result={result} index={index} />
						)
					)
				)}	
				</div>
			</div>
		);
	}
}

export default Search;



// Rethink searchType functionality and focus on one thing.
// APIkey to .env and import