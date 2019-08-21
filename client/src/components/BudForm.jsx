import React, {useState} from 'react';
import axios from 'axios';


function BudbooksForm({setNewBudbook, token}) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [notes, setNotes] = useState('')

  function submitBudbook(e) {
    e.preventDefault();
      let config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    axios.post('/api/budbooks', {
      title,
      desc,
      notes
    }, config).then(response => {
      setNewBudbook(response.data)
      setTitle('')
      setDesc('')
      setNotes('')
    })
  }

  return (
    <form onSubmit={submitBudbook}>
      <div className="input-form">
        <h2>Strain: </h2>
        <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} /><br />
        <h2>Description: </h2>
        <input type="text" name='desc' value={desc} onChange={e => setDesc(e.target.value)} /><br /> 
        <h2>Notes: </h2>
        <input type="text" name='notes' value={notes} onChange={e => setNotes(e.target.value)} /><br />
        <input type='submit' value='Add Budnote' />
      </div>
    </form>
  );
}

export default BudbooksForm;


// mounted on API so API before the route.