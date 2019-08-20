import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BudList from './BudList';
import BudDetail from './BudDetail';
import BudForm from './BudForm';


function Budbook() {
  const [budbooks, setbudbooks] = useState([])
  const [budbookId, setBudbookId] = useState(1)
  const [budbook, setbudbook] = useState({})
  const [newbudbook, setNewbudbook] = useState({})

  useEffect(() => {
    console.log('running the first effect')
    axios.get('/api/budbooks').then((response) => {
      setbudbooks(response.data);
    })
  }, [newbudbook])

  useEffect( () => {
    console.log('running the second effect')
    axios.get(`/api/budbooks/${budbookId}/`).then((response) => {
      setbudbook(response.data);
    })
  }, [budbookId])

  return (
    <div className="Budbook">
      <BudList budbooks={budbooks} handlebudbookChange={setBudbookId} />
      <BudDetail budbook={budbook} />
      <BudForm setNewbudbook={setNewbudbook} />
    </div>
  );
}

export default Budbook;




















// import React from 'react';

// function Budbook() {
// 	return (
// 		<>
// 			<div>
// 				Create New Budbook
// 			</div>
// 			<form action="submit">
// 				<input type="string" name="title" placeholder="title" /> {' '}
// 				<input type="string" name="description" placeholder="description"/> {' '}
// 				<input type="text" name="notes" placeholder="notes" />
// 			</form>
// 		</>
// 	)
// }

// //Display a list of favorites from the search results with a delete route. 

// //Comments field with update route?
// //Use useState hook 
// //Cat collector, pokedex



// export default Budbook;