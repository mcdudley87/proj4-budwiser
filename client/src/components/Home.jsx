import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = props => (
	<>
		<div className="titlecard">
					<h1>
						<div className="title-bud">Bud,</div>
						<div className="title-wiser">Wiser.</div>
						<h4>Welcome to Bud Wiser,</h4>
						<h4>Your modern Smok&eacute;dex.</h4>
					</h1>
					<p><Link to="/Search">SEARCH</Link> different strains of cannabis by name keyword or strain.</p>
					<p>Save notes on your strains in your <Link to="/Budbook">BUDBOOK</Link>.</p>
		</div> 
	</>
)

export default Home; 