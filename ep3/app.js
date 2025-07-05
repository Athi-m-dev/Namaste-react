import React from "react";
import ReactDOM from "react-dom/client";
/**
 Header
  - logo
  - navitems
 Body
  - Search
  - RestaurentContainer
    - ReataurentCard
 Footer
  - Copyright
  - Links
  - Address
  - contanct    
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXm-Lz1wqab2UY4q-vR2b1nEBH3NHEPpIsA&s"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>contanct</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resList = [
  {
    id: "1001",
    name: "Santosh Family Dhaba",
    receipe: "Tomato Soup",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "22 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mkcibe6x1ychvzjkywxk",
  },
  {
    id: "1002",
    name: "Cafe Niloufer",
    receipe: "Maska Bun",
    rating: "4.5",
    price: "₹400 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dc9t0kiq7lhsd3pndohf",
  },
  {
    id: "1003",
    name: "Santosh Family Dhaba",
    receipe: "Crispy Corn",
    rating: "4.5",
    price: "₹560 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dwqb8nhiop8fvqya0alq",
  },
  {
    id: "1004",
    name: "Grameen Kulfi",
    receipe: "Sitaphal Stick Kulfi",
    rating: "4.6",
    price: "₹120 for two",
    deliveryTime: "18 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vu0thsifji9wgfuzfmic",
  },
  {
    id: "1005",
    name: "Nrs Nandini",
    receipe: "Idli",
    rating: "4.4",
    price: "₹150 for two",
    deliveryTime: "21 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9fa5ca30c3db622c69cec0326ff63b41",
  },
  {
    id: "1006",
    name: "Utsav Vegetarian",
    receipe: "Kaju Paneer Biryani",
    rating: "4.1",
    price: "₹300 for two",
    deliveryTime: "32 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/y2lkcxxax3794vepe2se",
  },
  {
    id: "1007",
    name: "Subbayya Gari Hotel",
    receipe: "Butta Bojanam",
    rating: "4.0",
    price: "₹300 for two",
    deliveryTime: "24 MINS",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
  },
];

const RestoCards = (props) => {
  console.log(props);
  const { resdata } = props;
  return (
    <div className="restocards">
      <img src={resdata.image}></img>
      <h3>{resdata.name}</h3>
      <h3>{resdata.receipe}</h3>
      <h3>{resdata.rating}</h3>
      <h3>{resdata.price}</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search-bar">
        <input type="text"></input>
      </div>
      <div className="resto-Container">
        {resList.map((rescard ,index) => (
         <RestoCards key = {index} resdata = { rescard } />
        ))}
      </div>
    </div>
  );
};
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
