import "./CustomerFrom.css";

function CustomerFrom() {
  return (
    <form className="customer-form">
      <input
        type="text"
        className="customer-input"
        placeholder="Add a new customer"
      />
      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
}

export default CustomerFrom;
