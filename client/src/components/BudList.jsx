import React from 'react';
import axios from 'axios';

function BudList({budbooks, handleBudbookChange, setNewBudbook, token}) {
	let content;
  if (budbooks.length) {
    // there is some data
    content = budbooks.map((budbook, _id) => {
      return <p onClick={() => handleBudbookChange(budbook._id)} key={_id}>
        title: {budbook.title} {' '} ||
        description: {budbook.desc} {' '} ||
        notes: {budbook.notes} {' '} ||
        <button onClick={deleteBudbook} value={budbook._id} className="roundedBtn" >Delete</button>

        {/* can add h1 and style to this */}
      </p>
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