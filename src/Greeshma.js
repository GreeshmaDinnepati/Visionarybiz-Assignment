import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Ex1() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'iPhone 14 Pro',
      img_path: 'https://m.media-amazon.com/images/I/61XO4bORHUL._SX679_.jpg',
      offeredPrice: 118499,
      originalPrice: 104999,
      cart: false,
      quantity: 0,
      desc: [
        '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
        '17.02 cm (6.7 inch) HD+ Display',
        '50MP + 2MP | 5MP Front Camera',
        '6000 mAh Lithium Polymer Battery',
        'Qualcomm Snapdragon 680 Processor',
        '1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories',
      ],
    },
    {
      id: 2,
      title: 'REALME 10',
      img_path:
        'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70',
      offeredPrice: 18999,
      originalPrice: 14999,
      cart: false,
      quantity: 0,
      desc: [
        '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
        '17.02 cm (6.7 inch) HD+ Display',
        '50MP + 2MP | 5MP Front Camera',
        '6000 mAh Lithium Polymer Battery',
        'Qualcomm Snapdragon 680 Processor',
        '1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories',
      ],
    },
    {
      id: 3,
      title: 'Samsung J6',
      img_path:
        'https://rukminim1.flixcart.com/image/832/832/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70',
      offeredPrice: 19499,
      originalPrice: 12999,
      cart: false,
      quantity: 0,
      desc: [
        '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
        '17.02 cm (6.7 inch) HD+ Display',
        '50MP + 2MP | 5MP Front Camera',
        '6000 mAh Lithium Polymer Battery',
        'Qualcomm Snapdragon 680 Processor',
        '1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories',
      ],
    },
  ]);

  const addtocart = (item) => {
    console.log(products);
    const cart2 = [...cart];

    if (!cart2.includes(item)) {
      cart2.push(item);
    }
    const index = cart2.indexOf(item);
    cart2[index].quantity++;
    setCart(cart2);
  };

  function increase(item) {
    let x = cart.map((i) => {
      if (item.id == i.id) {
        console.log('hola');
        i.quantity += 1;
      }
      return i;
    });
    setCart(x);
  }
  function decrease(item) {
    let x = cart.map((i) => {
      if (item.id == i.id && i.quantity > 1) {
        console.log('hola');
        i.quantity -= 1;
      }
      return i;
    });
    setCart(x);
  }
  function total() {
    let x = 0;
    cart.map((i) => {
      x += i.price * i.quantity;
    });
    return x;
  }

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        {products.map((item) => (
          <div className="col-sm-12 col-md-6 col-lg-3" key={item.id}>
            <div className="card">
              <center>
                {' '}
                <h6>{item.title}</h6>{' '}
              </center>
              <img src={item.img_path} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title">
                  ₹ <del>{item.offeredPrice}</del> - ₹ {item.originalPrice}
                </h6>
                <center>
                  {item.cart == false && (
                    <button
                      className="btn btn-primary"
                      onClick={() => addtocart(item)}
                    >
                      Buy
                    </button>
                  )}

                  <Link to="/Mobile1">
                    {' '}
                    <button className="btn btn-primary"> Read More </button>
                  </Link>
                </center>

                {item.cart == true && (
                  <button
                    className="btn btn-success"
                    onClick={() => addtocart(item)}
                  >
                    Added
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-3">
        <table className="table  text-center">
          <thead>
            <tr>
              <th scope="col">Sno</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((i, index) => (
              <tr key={i.id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">
                  <img src={i.img_path} style={{ width: '4rem' }} />
                </th>
                <td>{i.title}</td>
                <td>{i.offeredPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Ex1;
