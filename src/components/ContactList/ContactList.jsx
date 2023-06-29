import css from "./ContactList.module.css";
import PropTypes from "prop-types";

export const ContactList = ({ contacts, del }) => {
  
  const deleteId = (Id) => {
    del(Id);
  };

  return (
    <div>
      <ul>
        {contacts?.map(({ name, number, id }) => {
          return (
            <div className={css["container-contact"]} key={id}>
              <li>
                {name}: {number}
              </li>
              <button
                className={css["delete-contact"]}
                data-id={id}
                onClick={() => deleteId(id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  del: PropTypes.func,
};