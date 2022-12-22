import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function Mobile1() {
  const [one, setone] = useState([
    {
      title: 'iPhone 14 Pro',
      img_path: 'https://m.media-amazon.com/images/I/61XO4bORHUL._SX679_.jpg',
      offeredPrice: 118499,
      originalPrice: 104999,
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

  //console.log(one);
  return (
    <>
      {one.map((ele) => {
        return (
          <>
            <center>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ele.img_path} />
                <Card.Body>
                  <Card.Title>
                    <h2>{ele.title}</h2>
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    originalPrice : <del>{ele.originalPrice}</del>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {' '}
                    offeredPrice : {ele.offeredPrice}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h4> About Product </h4> <p>{ele.desc}</p>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">
                    <Link>
                      {' '}
                      <button className="btn btn-primary"> Buy </button>
                    </Link>
                  </Card.Link>

                  <Card.Link href="#">
                    <Link to="/">
                      {' '}
                      <button className="btn btn-primary">
                        {' '}
                        Back to Home Page{' '}
                      </button>
                    </Link>
                  </Card.Link>
                </Card.Body>
              </Card>
            </center>
          </>
        );
      })}
    </>
  );
}

export default Mobile1;
