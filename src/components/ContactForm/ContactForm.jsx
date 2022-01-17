import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  // const [number, setNumber] = useState();

  const submitForm = (e) => {
    const form = e.target;
    e.preventDefault();
    submitForm();
    form.reset();
  };

  const setNameAndNumber = (e) => {
    const { name, value } = e.target;
    setName({ [name]: value });
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={setNameAndNumber}
        />
      </label>
      <label>
        {" "}
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={setNameAndNumber}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
