import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BudList from './BudList';
import BudDetail from './BudDetail';
import BudForm from './BudForm';


function Budbook(props) {
  const [budbooks, setBudbooks] = useState([])
  const [budbookId, setBudbookId] = useState('')
  const [budbook, setBudbook] = useState({})
  const [newBudbook, setNewBudbook] = useState({})

  const config = {
    headers: {
        'Authorization': `Bearer ${props.token}`
    }
  }

  useEffect(() => {
    console.log('running the GET ALL BUDBOOKS effect')
    axios.get('/api/budbooks', config).then((response) => {
      console.log("Dis da data:", response.data);
      setBudbooks(response.data.budbooks);
    })
  }, [newBudbook])

  useEffect( () => {
    console.log('running the GET ONE BUDBOOK effect')
    if (budbookId !== '') { 
      axios.get(`/api/budbooks/${budbookId}/`, config).then((response) => {
        console.log("response from get one budbook:", response.data)
        setBudbook(response.data); 
      })
    }
  }, [budbookId])

  return (
    <div className="Budbook">
      <BudList budbooks={budbooks} handleBudbookChange={setBudbookId} />
      <BudDetail budbooks={budbooks} />
      <BudForm token={props.token} setNewBudbook={setNewBudbook} />
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