import React from 'react';

function BudList({budbooks, handleBudbookChange}) {
	let content;
  if (budbooks.length) {
    // there is some data
    content = budbooks.map((budbook, _id) => {
      return <p onClick={() => handleBudbookChange(budbook._id)} key={_id}>
        title: {budbook.title} {' '} ||
        description: {budbook.desc} {' '} ||
        notes: {budbook.notes} {' '} ||
        <button> delete me! </button>
        {/* can add h1 and style to this */}
      </p>
    })
  } else {
    // there is not data, show a placeholder
    content = <p>No budbooks found!</p>
  }
  return (
    <div className="Budbook">
      {content}
    </div>
  );
}

export default BudList;