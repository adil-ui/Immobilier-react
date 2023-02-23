import { Link, NavLink } from "react-router-dom"
import './Footer.css'
const Footer = () => {
  return (
    <footer className="p-5 pb-2">
				<div className="">
					<div className="container">
						<div className="row">
							
							<div className="col-lg-5 col-md-5">
								<div className="">
                                <NavLink to="/" ><img src="/assets/images/logo.png" alt="logo" width="120px" /></NavLink>
									<h4 className="extream my-4">Do you require assistance with anything?</h4>
									<p>Every month, receive updates, hot deals, tutorials, and discounts delivered directly to your inbox.</p>
									<div className="">
										<div className="input-group">
										  <input type="text" className="form-control py-3 rounded-0" placeholder="Votre Email" />
											<div className="">
												<button type="button" className="btn btn-warning  py-3 rounded-0">Subscribe</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-lg-6 col-md-7 ml-auto">
								<div className="row">
								
									<div className="col-lg-4 col-md-4">
										<div className="">
											<h4 className="">Layouts</h4>
											<ul className="">
												<li><Link to='' className='text-secondary'>Home Page</Link></li>
												<li><Link to='' className='text-secondary'>About Page</Link></li>
												<li><Link to='' className='text-secondary'>Service Page</Link></li>
												<li><Link to='' className='text-secondary'>Property Page</Link></li>
												<li><Link to='' className='text-secondary'>Contact Page</Link></li>
												<li><Link to='' className='text-secondary'>Single Blog</Link></li>
											</ul>
										</div>
									</div>
											
									<div className="col-lg-4 col-md-4">
										<div className="">
											<h4 className="">All Sections</h4>
											<ul className="">
												
												<li><Link to='' className='text-secondary'>Features</Link></li>
												<li><Link to='' className='text-secondary'>Attraction</Link></li>
												<li><Link to='' className='text-secondary'>Testimonials</Link></li>
												<li><Link to='' className='text-secondary'>Videos</Link></li>
												
											</ul>
										</div>
									</div>
							
									<div className="col-lg-4 col-md-4">
										<div className="footer_widget">
											<h4 className="widget_title">Company</h4>
											<ul className="footer-menu">
												<li><Link to='' className='text-secondary'>About</Link></li>
												<li><Link to='' className='text-secondary'>Blog</Link></li>
												<li><Link to='' className='text-secondary'>Pricing</Link></li>
												<li><Link to='' className='text-secondary'>Affiliate</Link></li>
												<li><Link to='' className='text-secondary'>Partners</Link></li>
												
											</ul>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="text-center">
					<p className="mt-4">&copy; 2023 IMMOPRO. Designd By LoopCode</p>
				</div>
			</footer>
  )
}

export default Footer