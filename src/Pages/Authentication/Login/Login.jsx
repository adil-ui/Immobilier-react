import { useContext, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config/constants';
import AuthContext from '../../../context/auth-context';
import './Login.css'
import axios from 'axios';
import validator from 'validator';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (validator.isEmail(e.target.value)) {
            emailRef.current.style.color = "black";
            emailRef.current.style.border = "1px solid #dee2e6";
        } else {
            emailRef.current.style.color = "red";
            emailRef.current.style.border = "1px solid red";
        }
    }

    const clickLogin = async (e) => {
        e.preventDefault();
        if (validator.isEmail(email)) {
            try {
                let res = await axios.post(API_URL + "api/login", { email, password })
                console.log(res);
                setUser({ ...res.data.user, token: res.data.token });
                localStorage.setItem('user', JSON.stringify({ ...res.data.user, token: res.data.token }));
                navigate('/admin')
            } catch (err) {
                console.log(err);
                setMessage('User not Found');
            }
        }else{
            setMessage('email invalid');

        }
    }
    return (
            <section className="container row  mx-auto my-5 py-5">
                <div className="login  mx-auto my-5 d-flex align-items-center col-xl-4 col-lg-6 cold-md-8 col-sm-10 col-11 shadow p-5 rounded-4">
                    <form onSubmit={clickLogin} className="row g-3 col-11 mx-auto ">
                        <h3 className='text-center fw-bolder mb-4 text-warning'>Login</h3>
                        <div className="mb-2 ">
                            <label className="form-label fw-semibold">Email</label>
                            <input type="email" ref={emailRef} className="form-control" name='email' value={email} onChange={handleEmailChange} required />
                        </div>
                        <div className="">
                            <label className="form-label fw-semibold">Mot de passe</label>
                            <input type="password" className="form-control" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="message">{message ? <p>{message}</p> : null}</div>
                        <div className="mt-4 d-flex align-items-center justify-content-between">
                            <NavLink to={'/inscription'} className="text-warning fw-semibold">S'inscire ?</NavLink>
                            <NavLink to={'/mot-de-passe-oublier'} className="text-warning fw-semibold">Mot de passe oublier ?</NavLink>
                        </div>
                        <div className="mt-4">
                            <button disabled={!validator.isEmail(email)} type="submit" className="btn btn-warning col-12 fw-semibold px-4">Se Connecter</button>
                        </div>
                    </form>
                </div>
            </section>
    )
}

export default Login