import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config/constants';
import './Register.css'

const Register = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("address", address);
        formData.append("phone", phone);
        formData.append("picture", picture);
        formData.append("email", email);
        formData.append("password", password);
        try {
          const res = await axios.post(API_URL + "api/register", formData);
          console.log(res.data);
            navigate('/login');
        } catch (err) {
            setMessage(err.message);
            console.log(err.response);
        }
      };

    return (
        <section class="container row  mx-auto mt-5 py-5">
            <div className='row mx-auto mt-2 col-xl-5 col-lg-7 cold-md-8 col-sm-10 col-12 shadow px-4 py-5 rounded-4'>
                <form className='row ' onSubmit={handleSubmit} encType="multipart/form-data">
                    <h4 className='text-center fw-bold mb-2 text-warning'>S'inscrire</h4>
                    <div class=" col-md-12 mb-2 ">
                        <label class="form-label fw-semibold">Nom et Prénom <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name='name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div class=" col-md-12 mb-2 ">
                        <label class="form-label fw-semibold">Téléphone <span class="text-danger">*</span></label>
                        <input type="tel" class="form-control" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div class="col-md-12 mb-2">
                        <label for="formFile" class="form-label fw-semibold">Photo</label>
                        <input class="form-control" type="file" id="formFile" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
                    </div>
                    <div class=" col-md-12 mb-2 ">
                        <label class="form-label fw-semibold">Addresse <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" name='address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div class=" col-md-6 mb-2">
                        <label class="form-label fw-semibold">Email <span class="text-danger">*</span></label>
                        <input type="email" class="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div class="col-md-6 mb-2">
                        <label class="form-label fw-semibold">Mot de passe <span class="text-danger">*</span></label>
                        <input type="password" class="form-control" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    {message ? <div className="message text-warning"><p>{message}</p></div> : null}
                    <div class="col-md-12 mb-2 mt-3 ">
                        <button type="submit" class="btn btn-warning fw-semibold col-12 px-4">Envoyer</button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Register