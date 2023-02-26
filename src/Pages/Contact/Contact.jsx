import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/constants';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [notification, setNotification] = useState('');
    const contact = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(API_URL + 'api/contact', { name, email, subject, phone, message })
            setNotification(res.data.success)
        } catch (error) {
            setNotification(error.data.error)
        }
    };
    return (
        <section className="container row  mx-auto my-5 py-5">
            <h2 className='text-center fw-bolder my-4 text-warning'>Contactez-nous</h2>
            <div className="row justify-content-center my-4 mx-auto">
                <div className="col-lg-4 col-md-7 col-10 text-center mx-auto mb-4">
                    <div className="info__item shadow  p-4 h-100 rounded-2">
                        <div className="info__item-inner">
                            <div className="info__item-icon">
                                <i className="bi bi-geo-alt-fill fs-3 text-warning"></i>
                            </div>
                            <div className="info__item-content">
                                <h5 className='fw-semibold'>Addresse</h5>
                                <address>18 Hay Al Firdouss , Témara 20000</address>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-7 col-10 text-center  mx-auto mb-4">
                    <div className="info__item shadow  p-4 h-100 rounded-2">
                        <div className="info__item-inner">
                            <div className="info__item-icon">
                                <i className="bi bi-telephone-fill fs-3 text-warning"></i>
                            </div>
                            <div className="info__item-content">
                                <h5 className='fw-semibold'>Téléphone</h5>
                                <p>+212 625 856 345</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-7 col-10 text-center  mx-auto mb-4">
                    <div className="info__item shadow  p-4 h-100 rounded-2">
                        <div className="info__item-inner">
                            <div className="info__item-icon">
                                <i className="bi bi-envelope-fill fs-3 text-warning"></i>
                            </div>
                            <div className="info__item-content">
                                <h5 className='fw-semibold'>Email </h5>
                                <Link to="mailto:email@example.com">immopro@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-lg-6  mx-auto rounded-4 my-3 shadow">
                <form onSubmit={contact} className="row px-4 py-5 col-12 mx-auto">
                    <div className='col-md-6 mb-2'>
                        <label className="form-label fw-semibold">Nom et Prénom <span class="text-danger">*</span></label>
                        <input type="text" className="form-control" name='email' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='col-md-6 mb-2'>
                        <label className="form-label fw-semibold">Email <span class="text-danger">*</span></label>
                        <input type="email" className="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='col-md-6 mb-2'>
                        <label className="form-label fw-semibold">Objet <span class="text-danger">*</span></label>
                        <input type="text" className="form-control" name='object' value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    </div>
                    <div className='col-md-6 mb-2'>
                        <label className="form-label fw-semibold">Téléphone </label>
                        <input type="tel" className="form-control" name='phone' value={subject} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div >
                        <label class="form-label fw-semibold">Message <span class="text-danger">*</span></label>
                        <textarea name="message" class="form-control" rows="4" onChange={(e) => setMessage(e.target.value)} required>{message}</textarea >
                    </div>
                    <div className="message">{notification ? <p>{notification}</p> : null}</div>
                    <div className="mt-4">
                        <button type="submit" className="btn btn-warning col-12 fw-semibold ">Envoyer</button>
                    </div>
                </form>
            </div>
            <div className=" col-lg-6  px-5 my-3 mx-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.987764131213!2d-6.837296785047434!3d34.0185250269542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d4ee9e69ded%3A0x148138a74b343466!2s3w%20Academy!5e0!3m2!1sfr!2sma!4v1677440084818!5m2!1sfr!2sma"
                    className='w-100 h-100 rounded-4 shadow-sm' style={{ border: "0" }} allowfullscreen="" title='map' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Contact