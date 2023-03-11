import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../config/constants';
import './Details.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const imgListe = ["/assets/images/img_1.png", '/assets/images/img_2.png', '/assets/images/img_3.png', '/assets/images/img_4.png']

const Details = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [notification, setNotification] = useState('');
    const params = useParams();
    const [property, setProperty] = useState(null);
    const [propertyPictures, setPropertyPictures] = useState([]);

    useEffect(() => {
        fetch(API_URL + 'api/details/' + params.id)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setProperty(result.property[0]);
                setPropertyPictures(result.PropertyPictures);

            })
    }, [params]);



    const contact = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(API_URL + 'api/contact', { name, email, phone, message })
            setNotification(res.data.success)
        } catch (error) {
            setNotification(error.data.error)
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <section className='container row my-5 py-4 mx-auto'>
            <div className='col-lg-8 mx-auto my-4 py-2'>
                {property && propertyPictures.length > 0 && <div className='imageList border rounded-3 shadow-sm text-center'>
                    <div className='mx-auto mb-3'>
                        <Swiper style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff", }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2">

                            {propertyPictures.map(elt => (
                                <SwiperSlide >
                                    <img src={API_URL + elt.picture} alt='img' className='img-fluid' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper">
                        {propertyPictures.map(elt => (
                            <SwiperSlide>
                                <img src={API_URL + elt.picture} alt="img" className='img-fluid' />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>}
                <div className='details  border rounded-3 shadow-sm p-4 my-4'>
                    <span className="text-warning bg-warning px-3 py-1 rounded-5 bg-opacity-25 text-bold">{property?.type}</span>
                    <h3 className='text-warning fw-bold my-3'>{property?.price} Dh</h3>
                    <h3 className='fw-bold'>{property?.title}</h3>
                    <address className='text-secondary my-4'><i class="bi bi-geo-alt-fill"></i> {property?.zip_code}, N° {property?.property_num}, {property?.district.name}, {property?.sector.name}, {property?.city.name}</address>
                    <div className="d-flex align-items-center">
                        <p className='fontSize17 me-4'><i class="fa-solid fa-bed text-warning me-1 fs-5"></i> <span>{property?.bedroom}</span> Chambre</p>
                        <p className='fontSize17 me-4'><i class="fa-solid fa-bath text-warning me-1 fs-5"></i> <span>{property?.bathroom}</span> S.bain</p>
                        <p className='fontSize17'><i class="fa-solid fa-vector-square text-warning me-1 fs-5"></i> <span>{property?.area}</span> m²</p>
                    </div>
                </div>
                <div className='description  border rounded-3 shadow-sm p-4 pe-5 my-4'>
                    <h3 className='fw-bold'>Details</h3>
                    <div className='row mt-4'>
                        <p className='col-lg-4 col-md-6  fw-semibold fontSize17'>Type: <span className='text-secondary fw-normal ms-1'>{property?.category.name}</span></p>
                        <p className='col-lg-4 col-md-6  fw-semibold fontSize17'>Salon: <span className='text-secondary fw-normal ms-1'>{property?.living_room} Salon</span></p>
                        <p className='col-lg-4 col-md-6  fw-semibold fontSize17'>Chambre: <span className='text-secondary fw-normal ms-1'>{property?.bedroom} Chambre</span></p>
                        <p className='col-lg-4 col-md-6  fw-semibold fontSize17'>Salle de bain: <span className='text-secondary fw-normal ms-1'>{property?.bathroom} salle de bain</span></p>
                        <p className='col-lg-4 col-md-6  fw-semibold fontSize17'>Etage: <span className='text-secondary fw-normal ms-1'>{property?.floor} etage</span></p>
                        <p className='col-lg-4 col-md-6  fw-semibold fontSize17'>Surface: <span className='text-secondary fw-normal ms-1'>{property?.area} m²</span></p>
                    </div>
                </div>
                <div className='description  border rounded-3 shadow-sm p-4 pe-5 my-4'>
                    <h3 className='fw-bold'>Description</h3>
                    <p className='mt-3 lh-lg fontSize17'>{property?.description}</p>
                </div>
            </div>
            <div className='col-lg-4 my-4 py-2'>
                <div className='border rounded-3 shadow-sm text-center p-4 mb-4'>
                    <div className='mb-2'>
                        <img src={API_URL + property?.user.picture} alt="profile_img" className='rounded-circle ' width='70px' />
                    </div>
                    <div>
                        <p className='fontSize18 mb-2 fw-semibold'>{property?.user.name}</p>
                        <p className='fontSize18 shadow-sm phone fw-semibold mx-4 rounded-2' style={{ backgroundColor: 'rgba(5, 175, 120,0.1)', padding: '12px 0', color: '#05af78' }}><i class="bi bi-telephone-fill me-2"></i> {property?.user.phone}</p>
                    </div>
                </div>
                <div className='border rounded-3 shadow-sm p-4 mb-4'>
                    <h4 className='fw-bold mb-4 text-center'>Envoyer un message</h4>
                    <form onSubmit={contact} className="mx-auto">
                        <div className='mb-2'>
                            <label className="form-label">Nom et Prénom <span class="text-danger">*</span></label>
                            <input type="text" className="form-control" name='email' value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className='mb-2'>
                            <label className="form-label">Email <span class="text-danger">*</span></label>
                            <input type="email" className="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className='mb-2'>
                            <label className="form-label">Téléphone </label>
                            <input type="tel" className="form-control" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div >
                            <label class="form-label">Message <span class="text-danger">*</span></label>
                            <textarea name="message" class="form-control" rows="4" onChange={(e) => setMessage(e.target.value)} required>{message}</textarea >
                        </div>
                        <div className="message">{notification ? <p>{notification}</p> : null}</div>
                        <div className="mt-4">
                            <button type="submit" className="btn btn-warning col-12 fw-semibold ">Envoyer</button>
                        </div>
                    </form>
                </div>
                <div className='border rounded-3 shadow-sm' style={{ height: '300px' }}>
                    <h4 className='fw-bold m-3 text-center'>Emplacement</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.987764131213!2d-6.837296785047434!3d34.0185250269542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d4ee9e69ded%3A0x148138a74b343466!2s3w%20Academy!5e0!3m2!1sfr!2sma!4v1677440084818!5m2!1sfr!2sma"
                        className='w-100 h-100  mx-auto' allowfullscreen="" title='map' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Details