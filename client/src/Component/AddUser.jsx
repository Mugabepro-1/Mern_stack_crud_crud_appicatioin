import React, { useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import './Adduser.css'
export default function AddUser() {
    const [value, setValue] = useState({
        title: '',
        firstName: '',
        lastName: '',
        position: '',
        company: '',
        businArena: '',
        employees: '',
        street: '',
        addInfo: '',
        zipCode: '',
        place: '',
        country: '',
        code: '',
        phone: '',
        email: '',

    })
    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };


    const CloseRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const adduser = await axios.post('http://localhost:3000/api/create', value)
            const response = adduser.data
            if (response.success) {
                toast.success(response.Message)
                CloseRef.current.click()

            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }


    };
    return (
        <>
<div className="page-content">
      <div className="form-v10-content">
        <form className="form-detail" action="#" method="post" id="myform">
          <div className="form-left">
            <h2>General Infomation</h2>
            <div className="form-row">
              <select name="title">
                <option className="option" value="title">Title</option>
                <option className="option" value="reporter">Student</option>
                <option className="option" value="secretary">Teacher</option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down"></i>
              </span>
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="input-text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="input-text"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <select name="position">
                <option value="position">Position</option>
                <option value="manager">Cashier</option>
                <option value="employee">Worker</option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down"></i>
              </span>
            </div>
            <div className="form-row">
              <input
                type="text"
                name="company"
                className="company"
                id="company"
                placeholder="Company"
                required
              />
            </div>
            <div className="form-group">
              <div className="form-row form-row-3">
                <input
                  type="text"
                  name="business"
                  className="business"
                  id="business"
                  placeholder="Business Arena"
                  required
                />
              </div>
              <div className="form-row form-row-4">
                <select name="employees">
                  <option value="employees">Employees</option>
                  <option value="trainee">Learner</option>
                  <option value="colleague">Student</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="form-right">
            <h2>Contact Details</h2>
            <div className="form-row">
              <input
                type="text"
                name="street"
                className="street"
                id="street"
                placeholder="Street + Nr"
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="additional"
                className="additional"
                id="additional"
                placeholder="Additional Information"
                required
              />
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="zip"
                  className="zip"
                  id="zip"
                  placeholder="Zip Code"
                  required
                />
              </div>
              <div className="form-row form-row-2">
                <select name="place">
                  <option value="place">Place</option>
                  <option value="Province">Province</option>
                  <option value="District">District</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
            </div>
            <div className="form-row">
              <select name="country">
                <option value="country">Country</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Burundi">Burundi</option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down"></i>
              </span>
            </div>
            <div className="form-group">
              <div className="form-row form-row-1">
                <input
                  type="text"
                  name="code"
                  className="code"
                  id="code"
                  placeholder="Code +"
                  required
                />
              </div>
              <div className="form-row form-row-2">
                <input
                  type="text"
                  name="phone"
                  className="phone"
                  id="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <input
                type="text"
                name="your_email"
                id="your_email"
                className="input-text"
                required
                pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                placeholder="Your Email"
              />
            </div>
            <div className="form-checkbox">
              <label className="container"
                ><p>
                  I do accept the
                  <a href="#" className="text">Terms and Conditions</a> of your
                  site.
                </p>
                <input type="checkbox" name="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="form-row-last">
              <input
                type="submit"
                name="register"
                className="register"
                value="Register Badge"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
        </>
    )
}
