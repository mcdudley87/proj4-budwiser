import React, {useState} from 'react';
import axios from 'axios';


function BudbooksForm({setNewBudbook}) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [notes, setNotes] = useState('')

  axios.defaults.xsrfHeaderName = "X-CSRFToken";
  axios.defaults.xsrfCookieName = "csrftoken";

  function submitBudbook(e) {
    e.preventDefault();
    axios.post('/api/budbooks', {
      title,
      desc,
      notes
    }).then(response => {
      setNewBudbook(response.data)
      setTitle('')
      setDesc('')
      setNotes('')
    })
  }

  return (
    <form onSubmit={submitBudbook}>
      <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} /><br />
      <input type="text" name='desc' value={desc} onChange={e => setDesc(e.target.value)} /><br />
      <input type="text" name='notes' value={notes} onChange={e => setNotes(e.target.value)} /><br />
      <input type='submit' value='Add Budbook' />
    </form>
  );
}

export default BudbooksForm;


// mounted on API so API before the route.