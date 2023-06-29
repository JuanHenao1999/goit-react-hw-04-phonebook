import css from "./ContactForm.module.css";
import PropTypes from "prop-types";

const ContactForm = ({ onSubmitData }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    let contactForAdd = { name: form.name.value, number: form.number.value };
    onSubmitData(contactForAdd);
    form.reset();
  };

  return (
    <div className={css["form-container"]}>
      <form className={css["contact-form"]} onSubmit={handleSubmit}>
        <div className={css["input-container"]}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={css["input-container"]}>
          <label>Number</label>
          <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Ejemplo: 123-45-78"
            required
          />
        </div>
        <div>
          <button className={css["add-contact"]} type="submit">
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

export default ContactForm;