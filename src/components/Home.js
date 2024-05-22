
import Sign_img from "./SIgn_img"
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        profession: "",
        password: ""
    });

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval({ ...inpval, [name]: value });
    };

    const addData = (e) => {
        e.preventDefault();
        const { name, email, profession, password } = inpval;

        if (name === "") {
            toast.error('Name field is required!', { position: "top-center" });
        } else if (email === "") {
            toast.error('Email field is required', { position: "top-center" });
        } else if (!email.includes("@")) {
            toast.error('Please enter a valid email address', { position: "top-center" });
        } else if (profession === "") {
            toast.error('Profession field is required', { position: "top-center" });
        } else if (password === "") {
            toast.error('Password field is required', { position: "top-center" });
        } else if (password.length < 5) {
            toast.error('Password length must be greater than five', { position: "top-center" });
        } else {
            localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
            history("/login");
        }
    };

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicProfession">
                                <Form.Control as="select" name='profession' onChange={getdata}>
                                    <option value="">Select Profession</option>
                                    <option value="Engineer">Engineer</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
                    </div>
                    <Sign_img />
                </section>
                <ToastContainer />
            </div>
        </>
    );
};

export default Home;
