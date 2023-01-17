import data from '../utils/db'
import { Link, useMatch, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Payment() {
  const match = useMatch('/payment/:id')
  const { id, name, price, } = data.find((res) => res.id === Number(match.params.id))
  // const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Order placed successfully")
    // navigate(`/products`)
  }
  return (
    <>
      <div className="container">
        <div className='my-5 border-bottom pb-4'>
          <Link
            className='text-end text-black bg-dark text-white px-4 py-2 rounded text-decoration-none'
            to={`/productDetails/${id}`}
          >
            <i className="fas fa-long-arrow-left me-2"
            ></i>
            Back
          </Link>
        </div>
        <div className="row">
          <div className='col-md-12'>
            <div className="col-25">
              <div className="container d-flex justify-content-between border-bottom pb-3">
                <h3><a href="#" className='nav-link fw-bold '>{name}</a> </h3>
                <p>Total <span className="price" style={{ color: "black" }}><b>${price}</b></span></p>
              </div>
            </div>
          </div>
          <div className="col-75">
            <div className="container py-4">
              <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="row">
                  <div className="col-12">
                    <h3 className='mb-3'>Billing Address</h3>
                  </div>
                  <div className='col-sm-4'>
                    <label for="fname" className='form-label'><i className="fa fa-user"></i> Full Name</label>
                    <input type="text" className='form-control shadow-none border mb-3' id="fname" name="firstname" placeholder="John M. Doe" required />
                    <label for="email" className='form-label'><i className="fa fa-envelope"></i> Email</label>
                    <input type="text" className='form-control shadow-none border mb-3' id="email" name="email" placeholder="john@example.com" required />
                  </div>
                  <div className="col-sm-4">
                    <label for="adr" className='form-label '><i className="fa fa-address-card-o"></i> Address</label>
                    <input type="text" className='form-control shadow-none border mb-3' id="adr" name="address" placeholder="542 W. 15th Street" required />
                    <label for="city" className='form-label'><i className="fa fa-institution"></i> City</label>
                    <input type="text" id="city" className='form-control shadow-none border' name="city" placeholder="New York" required />
                  </div>
                  <div className='col-sm-4'>
                    <label for="state" className='form-label'>State</label>
                    <input type="text" className='form-control shadow-none border mb-3' id="state" name="state" placeholder="NY" required />
                    <label for="zip" className='form-label'>Zip</label>
                    <input type="text" className='form-control shadow-none border' id="zip" name="zip" placeholder="10001" required />
                  </div>

                </div>

                <div className="row mt-4">
                  <h3>Payment</h3>
                  <div className="col-sm-4">
                    <label for="cname" className='form-label'>Name on Card</label>
                    <input type="text" id="cname" className='form-control shadow-none border mb-3' name="cardname" placeholder="John More Doe" required />
                    <label for="ccnum" className='form-label'>Credit card number</label>
                    <input className='form-control shadow-none border' type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required />
                  </div>
                  <div className="col-sm-4">
                    <label for="expmonth" className='form-label'>Exp Month</label>
                    <input className='form-control shadow-none border mb-3' type="text" id="expmonth" name="expmonth" placeholder="September" required />
                    <label for="expyear" className='form-label'>Exp Year</label>
                    <input className='form-control shadow-none border' type="text" id="expyear" required name="expyear" placeholder="2018" />
                  </div>
                  <div className="col-sm-4">
                    <label for="cvv" className='form-label'>CVV</label>
                    <input className='form-control shadow-none border' type="text" id="cvv" name="cvv" required placeholder="352" />
                  </div>

                </div>
                <div className='d-flex justify-content-between align-items-center mt-3'>
                  <label>
                    <input type="checkbox" required name="sameadr" className='me-2' /> Shipping address same as billing
                  </label>
                  <button type='submit' className='text-end text-black bg-dark text-white px-4 py-2 rounded text-decoration-none' >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
      <ToastContainer />
    </>
  );
}

export default Payment;
