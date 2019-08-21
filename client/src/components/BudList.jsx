import React from 'react';
import axios from 'axios';

function BudList({budbooks, handleBudbookChange, setNewBudbook, token}) {
	let content;
  if (budbooks.length) {
    // there is some data
    content = budbooks.map((budbook, _id) => {
      return <div onClick={() => handleBudbookChange(budbook._id)} key={_id}>
        <div className="budbook">
          <div className="budbook-inner">
            Strain: {budbook.title} <br />      
            Description: {budbook.desc} <br />       
            Notes: {budbook.notes} <br />      
          </div>
          <button onClick={deleteBudbook} value={budbook._id} className="deleteBtn">Delete</button>
        </div>
      </div>
    })
  } else {
    // there is not data, show a placeholder
    content = <p>No Budnotes Found.</p>
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
    <div className="budbook">
      {content}
    </div>
  );
}

export default BudList;