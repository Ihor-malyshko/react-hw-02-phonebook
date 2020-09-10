import React from 'react';

const ContactEditor = ({ onAddContact }) => {
  return (
    <div>
      {/* <label>label</label> */}
      {/* <input>input</input> */}
      <button type="button" onClick={onAddContact}>
        Add Contact
      </button>
    </div>
  );
};

export default ContactEditor;
