import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../utils/db'

function Products() {

  const [state, setState] = useState([])

  const getProductData = async () => {
    // const apiRes = await axios.get(data)
    setState(data)
  }

  console.log(data);
  console.log(state);

  useEffect(() => { getProductData() }, [])
  return (
    <div className='products-wrapper'>
      <div className='container'>
        <div className='d-flex justify-content-between border-0 border-bottom pb-4'>
          <h3 className="m-0 fw-bold">
            List of all products
          </h3>
          <div><Link to="/" className='text-end text-black bg-dark text-white px-4 py-2 rounded text-decoration-none'>Logout</Link></div>
        </div>
        <div className="ibox animated fadeInRight">
          <div
            className="ibox-title d-flex align-items-center justify-content-between"
            style={{ color: "#000000" }}
          >

            <div className="dropdown theme me-3">
            </div>
          </div>
          <div className="ibox-content">
            <div className="table-responsive">
              <table className="table table-stripedList">
                <thead>
                  <tr style={{ color: "#000000", fontSize: "14px" }}>
                    <th>Sr. No.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {state.map((item, index) => (
                  <tbody>
                    <tr style={{ fontSize: "14px" }}
                      key={index}
                    >
                      <td>
                        {item.id}
                      </td>
                      <td className="justify-content-center">
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src={item.image}
                          className="me-2 imageSize"
                          alt="Profile"
                        />
                      </td>
                      <td>
                        {item.name}
                      </td>
                      <td>{item.brand}</td>
                      <td>{item.color}</td>
                      <td>${item.price}</td>

                      <td>
                        <div className="d-flex">
                          <Link className='d-flex align-items-center text-decoration-none '
                            to={`/productDetails/${item.id}`}
                          >
                            <i className="fas fa-eye me-1"></i>
                            View
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>

          </div>
        </div>

      </div>
    </div >
  )
}

export default Products
