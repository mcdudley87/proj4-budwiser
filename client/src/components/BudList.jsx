import React from 'react';
import axios from 'axios';

function BudList({budbooks, handleBudbookChange, setNewBudbook, token}) {
	let content;
  if (budbooks.length) {
    // there is some data
    content = budbooks.map((budbook, _id) => {
      return <div onClick={() => handleBudbookChange(budbook._id)} key={_id}>
        <div className="budbook">
          <h4>Strain: {budbook.title} </h4>  
          <h4>Description:</h4> 
            <div className="desc-container"> {budbook.desc} </div>  
          <h4>Notes:</h4> 
            <div className="notes-container"> {budbook.notes} </div>  
          <button onClick={deleteBudbook} value={budbook._id} className="roundedBtn" >Delete</button>
        </div>
      </div>
    })
  } else {
    // there is not data, show a placeholder
    content = <p>No budbooks found!</p>
  }

function deleteBudbook(e) {
  let config = {
      headers: {
          'Authorization': `Bearer ${token}`
      }
  }
  let budbookId = e.target.value
  console.log(budbookId)
  axios.delete(`/api/budbooks/${budbookId}`, config)
    .then(response => {
      setNewBudbook(response.data)
    })
  }

  return (
    <div className="Budbook">
      {content}
    </div>
  );
}

export default BudList;