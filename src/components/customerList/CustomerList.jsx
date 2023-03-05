import CustomerItem from "../customerItem/CustomerItem";
import "./CustomerList.css";

const customerData = [
  {
    id: 1,
    customerName: "Ferhat Sümer",
  },
  {
    id: 2,
    customerName: "Savaş Sümer",
  },
  {
    id: 3,
    customerName: "Ateş Sümer",
  },
];

function CustomerList() {
  return (
    <ul className="cutomer-list">
      {customerData.map((customer) => (
        <CustomerItem   customer={customer} key={ customer.id} />
      ))}
    </ul>
  );
}

export default CustomerList;
