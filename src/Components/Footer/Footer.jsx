import { Link} from "react-router-dom"
import './Footer.css'
const Footer = () => {
  return (
    // <footer classNameName="p-5 pb-2 ">
	// 			<div classNameName="">
	// 				<div classNameName="container">
	// 					<div classNameName="row">
							
	// 						<div classNameName="col-lg-5 col-md-5">
	// 							<div classNameName="">
    //                             <NavLink to="/" ><img src="/assets/images/logo.png" alt="logo" width="120px" /></NavLink>
	// 								<h4 classNameName="extream my-4">Do you require assistance with anything?</h4>
	// 								<p>Every month, receive updates, hot deals, tutorials, and discounts delivered directly to your inbox.</p>
	// 								<div classNameName="">
	// 									<div classNameName="input-group">
	// 									  <input type="text" classNameName="form-control py-3 rounded-0" placeholder="Votre Email" />
	// 										<div classNameName="">
	// 											<button type="button" classNameName="btn btn-warning  py-3 rounded-0">Subscribe</button>
	// 										</div>
	// 									</div>
	// 								</div>
	// 							</div>
	// 						</div>
							
	// 						<div classNameName="col-lg-6 col-md-7 ml-auto">
	// 							<div classNameName="row">
								
	// 								<div classNameName="col-lg-4 col-md-4">
	// 									<div classNameName="">
	// 										<h4 classNameName="">Layouts</h4>
	// 										<ul classNameName="">
	// 											<li><Link to='' classNameName='text-secondary fw-semibold'>Home Page</Link></li>
	// 											<li><Link to='' classNameName='text-secondary fw-semibold'>About Page</Link></li>
	// 											<li><Link to='' classNameName='text-secondary fw-semibold'>Service Page</Link></li>
	// 											<li><Link to='' classNameName='text-secondary fw-semibold'>Property Page</Link></li>
	// 											<li><Link to='' classNameName='text-secondary'>Contact Page</Link></li>
	// 											<li><Link to='' classNameName='text-secondary'>Single Blog</Link></li>
	// 										</ul>
	// 									</div>
	// 								</div>
											
	// 								<div classNameName="col-lg-4 col-md-4">
	// 									<div classNameName="">
	// 										<h4 classNameName="">All Sections</h4>
	// 										<ul classNameName="">
												
	// 											<li><Link to='' classNameName='text-secondary'>Features</Link></li>
	// 											<li><Link to='' classNameName='text-secondary'>Attraction</Link></li>
	// 											<li><Link to='' classNameName='text-secondary'>Testimonials</Link></li>
	// 											<li><Link to='' classNameName='text-secondary'>Videos</Link></li>
												
	// 										</ul>
	// 									</div>
	// 								</div>
							
	// 								<div classNameName="col-lg-4 col-md-4">
	// 									<div classNameName="footer_widget">
	// 										<h4 classNameName="widget_title">Company</h4>
	// 										<ul classNameName="footer-menu">
	// 											<li><Link to='' classNameName='text-secondary'>About</Link></li>
	// 											<li><Link to='' classNameName='text-secondary'>Blog</Link></li>
	// 											<li><Link to='' classNameName='text-secondary'>Pricing</Link></li>
	// 											<li><Link to='' classNameName='text-secondary'>Affiliate</Link></li>
	// 											<li><Link to='' classNameName='text-secondary'>Partners</Link></li>
												
	// 										</ul>
	// 									</div>
	// 								</div>
									
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
				
	// 			<div classNameName="text-center">
	// 				<p classNameName="mt-4">&copy; 2023 IMMOPRO. Designd By LoopCode</p>
	// 			</div>
	// 		</footer>
	  <footer>
		  <div className="container">
			  <div className="row mt-5">
				  <div className="col-md-6 col-lg-3 mb-4 mb-md-0 ">
					<Link to="/" ><img src="/assets/images/logo-light.png" alt="logo" width="200px" /></Link>
					  <p className="mt-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
					  <ul className=" p-0">
						  <li className=""><Link to='' data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><span className="ion-logo-twitter"></span></Link></li>
						  <li className=""><Link to='' data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><span className="ion-logo-facebook"></span></Link></li>
						  <li className=""><Link to='' data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><span className="ion-logo-instagram"></span></Link></li>
					  </ul>
				  </div>
				  <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
					  <h4 className="text-warning mb-4">Nos Categories</h4>
					  <p><Link to='/' className="py-1 d-block text">Appartement</Link></p>
					  <p><Link to='/' className="py-1 d-block text">Maison</Link></p>
					  <p><Link to='/' className="py-1 d-block text">Villa</Link></p>
					  <p><Link to='/' className="py-1 d-block text">Commerciale</Link></p>
					  <p><Link to='/' className="py-1 d-block text">Bureau</Link></p>
				  </div>
				  <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
					  <h4 className="text-warning mb-4">Liens directs</h4>
						  <p><Link to='/' className="py-1 d-block text">Accueil</Link></p>
						  <p><Link to='/sale' className="py-1 d-block text">Acheter</Link></p>
						  <p><Link to='/rente' className="py-1 d-block text">Louer</Link></p>
						  <p><Link to='/search' className="py-1 d-block text">Recherche</Link></p>
						  <p><Link to='/about' className="py-1 d-block text">A propos</Link></p>
						  <p><Link to='/contact' className="py-1 d-block text">Contact</Link></p>
				  </div>
				  <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
					  <h4 className="text-warning fw-semibold">Vous avez des questions ?</h4>
					  <div className="my-4">
							  <address className="fontSize17 lh-lg"><i class="bi bi-geo-alt-fill text-secondary fontSize17 me-2"></i><span className="text">18 Hay Al Firdouss Avenue My Ali Chrif, Témara 20000</span></address>
							  <p className="fontSize17"><i class="bi bi-telephone-fill text-secondary fontSize17 me-2"></i><span className="text">+212 625 856 345</span></p>
							  <p className="fontSize17"><i class="bi bi-envelope-fill text-secondary fontSize17 me-2"></i><span className="text">immopro@gmail.com</span></p>
					  </div>
				  </div>
			  </div>
			  <div className="row mt-5">
				  <div className="col-md-12 text-center">
						<p classNameName="mt-4">Copyright &copy; 2023 IMMOPRO. All rights reserved Designd By KingAdil</p>
				  </div>
			  </div>
		  </div>
	  </footer>
  )
}

export default Footer