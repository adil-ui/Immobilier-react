import React from 'react'
import { NavLink } from 'react-router-dom'
import './Cardd.css'
const Cardd = (elt) => {
    return (
        <article className="shadow-sm mb-4 p-0 rounded-3" >
            <div className="border-0 row g-0 bg-white rounded-3  mx-auto">
                <div className='card_img col-md-5  rounded-start-3'>
                    <NavLink to='/details'><img src="/assets/images/apartement-01.jpg" alt="user_image" className="img-fluid h-100 rounded-start-3" /></NavLink>
                </div>
                <div className="col-md-7 d-flex justify-content-between flex-column pt-4 ps-0">
                    <div className='d-flex justify-content-between align-items-center px-4'>
                        <div>
                            <span className="text-danger fw-bolder py-2 px-4 rounded-5 bg-opacity-25 me-2 bg-danger">{elt.elt.category}</span>
                            <span className='fw-bolder py-2 px-4 rounded-5  text-light bg-warning text-dark'>{elt.elt.type}</span>
                        </div>
                        <h4 className="fw-bolder text-warning ms-3 mb-2" >{elt.elt.price} Dh</h4>
                    </div>
                    <div className='ps-4 mt-5'>
                        <NavLink to='/details'><h5 className="fw-semibold mb-3">{elt.elt.title}</h5></NavLink>
                        <address className='text-secondary'><i class="bi bi-geo-alt-fill"></i> {elt.elt.address}</address>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-0  border-top pt-3 px-4">
                        <p className='fontSize17'><i class="fa-solid fa-bed text-warning me-1 fs-5"></i> <span>{elt.elt.bedroom}</span> Chambre</p>
                        <p className='fontSize17'><i class="fa-solid fa-bath text-warning me-1 fs-5"></i> <span>{elt.elt.bathroom}</span> S.bain</p>
                        <p className='fontSize17'><i class="fa-solid fa-vector-square text-warning me-1 fs-5"></i> <span>{elt.elt.square_meter}</span> m²</p>
                    </div>
                </div>

            </div>
        </article>
    )
}

export default Cardd