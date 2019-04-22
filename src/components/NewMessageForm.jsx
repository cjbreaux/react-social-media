import React from 'react';

function NewMessageForm() {
  return(
    <div>
      <h1>New Message</h1>
      <form>
        <label>Title
          <input type="text"></input>
        </label>
        <label>Post Content
          <input type='textarea'></input>
        </label>
      </form>
    </div>
  );
}

export default NewMessageForm;
