import './CustomerItem.css';

function CustomerItem() {
  return (
    <div>
      <li className="customer-item">
        <div className="customer-info">
          <img
            src="https://i.pravatar.cc/300"
            alt=""
            className="customer-avatar"
          />
          <span className="customer-name">Ferhat Sümer</span>
        </div>
        <button className="delete-button">
          <i className="bi bi-trash3"></i>
        </button>
      </li>
    </div>
  );
}
export default CustomerItem;
