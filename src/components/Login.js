import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_img from './SIgn_img';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        password: ""
    });

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { name, password } = inpval;
        if (name === "") {
            toast.error('Name field is required', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('Password field is required', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('Password length should be greater than five', {
                position: "top-center",
            });
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el) => {
                    return el.name === name && el.password === password;
                });

                if (userlogin.length === 0) {
                    alert("Invalid details");
                } else {
                    console.log("User login successful");

                    localStorage.setItem("user_login", JSON.stringify(userlogin));

                    history("/details");
                }
            }
        }
    };

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span>SignIn</span> </p>
                    </div>
                    <Sign_img />
                </section>
                <ToastContainer />
            </div>
        </>
    );
};

export default Login;
