import React from 'react';

function NewMessageForm() {
  let _title = null;
  let _postBody = null;
  function handleNewPostSubmission(event) {
    event.preventDefault();
    console.log(_title.value)
    console.log(_postBody.value)
    let _title = '';
    let _postBody = '';
  }
  
  return(
    <div>
      <h1>New Message</h1>
      <form onSubmit={handleNewPostSubmission}>
        <label>Title
          <input type="text" ref={(input)=>{_title = input;}}></input>
        </label>
        <label>Post Content
          <input type='textarea' ref={(textarea)=>{_postBody = textarea}}></input>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewMessageForm;
