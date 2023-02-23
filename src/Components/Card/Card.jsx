import { NavLink } from 'react-router-dom'
import './Card.css'
const Card = (elt) => {
    console.log(elt);
    return (
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-10 col-10 mb-4 mx-auto card_container" >
            <div className="card border-0">
                <div className='card_img position-relative '>
                    <a href="/"><img src="/assets/images/apartement-01.jpg" alt="user_image" class="img-fluid" /></a>
                    <h4 className=" fw-bolder position-absolute bottom-0 text-light ms-3 mb-2" >{elt.elt.price} Dh</h4>
                    <p className='fw-bolder position-absolute top-0 py-1 px-3 rounded-5 end-0 text-light mt-2 me-2 bg-warning text-dark'>{elt.elt.type}</p>
                </div>
                <div>
                    <div className="pt-4 pb-1 px-4">
                        <p className="text-danger">{elt.elt.category}</p>
                        <NavLink to={''}><h5 className="fw-semibold mt-3 mb-4">{elt.elt.title}</h5></NavLink>
                        <address className='text-secondary'><i class="bi bi-geo-alt-fill"></i> {elt.elt.address}</address>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3  border-top px-4 pt-3">
                            <p className='fontSize17'><i class="fa-solid fa-bed text-warning me-1 fs-5"></i> <span>{elt.elt.bedroom}</span> Chambre</p>
                            <p className='fontSize17'><i class="fa-solid fa-bath text-warning me-1 fs-5"></i> <span>{elt.elt.bathroom}</span> S.bain</p>
                            <p className='fontSize17'><i class="fa-solid fa-vector-square text-warning me-1 fs-5"></i> <span>{elt.elt.square_meter}</span> m²</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Card