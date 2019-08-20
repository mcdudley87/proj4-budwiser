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
      <p>Title: </p>
      <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} /><br />
      <p>Description: </p>
      <input type="text" name='desc' value={desc} onChange={e => setDesc(e.target.value)} /><br /> 
      <p>Notes: </p>
      <input type="textarea" name='notes' value={notes} onChange={e => setNotes(e.target.value)} /><br />
      <input type='submit' value='Add Budbook' />
    </form>
  );
}

export default BudbooksForm;


// mounted on API so API before the route.