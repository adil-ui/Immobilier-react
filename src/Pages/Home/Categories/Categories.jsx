import './Categories.css'

const Categories = () => {
  return (
	  <section className="home-category-section">
		  <div className="container py-2">
			  <div className="row justify-content-center">
				  <h2 class="text-center my-5 fw-semibold">Choisir votre catégorie</h2>
				  <div className="col-xl-2 col-md-4 col-sm-6 col-8 mb-3  ">
					  <div className="card border-0 category-box ">
						  <div className="card-body text-center">
							  <img src="assets/images/category-1.png" alt="category_image" className="img-fluid mb-3" />
							  <h5 className="fw-semibold"><a href="/" className="text-decoration-none stretched-link">Appartement</a></h5>
						  </div>
					  </div>
				  </div>
				  <div className="col-xl-2 col-md-4 col-sm-6 col-8 mb-3 ">
					  <div className="card border-0 category-box ">
						  <div className="card-body text-center">
							  <img src="assets/images/category-6.png" alt="category_image" className="img-fluid mb-3" />
							  <h5 className="fw-semibold"><a href="/" className="text-decoration-none stretched-link">Maison</a></h5>
						  </div>
					  </div>
				  </div>
				  <div className="col-xl-2 col-md-4 col-sm-6 col-8 mb-3 ">
					  <div className="card border-0 category-box ">
						  <div className="card-body text-center">
							  <img src="assets/images/category-2.png" alt="category_image" className="img-fluid mb-3" />
							  <h5 className="fw-semibold"><a href="/" className="text-decoration-none stretched-link">Villa</a></h5>
						  </div>
					  </div>
				  </div>

				  <div className="col-xl-2 col-md-4 col-sm-6 col-8 mb-3 ">
					  <div className="card border-0 category-box ">
						  <div className="card-body text-center">
							  <img src="assets/images/category-4.png" alt="category_image" className="img-fluid mb-3" />
							  <h5 className="fw-semibold"><a href="/" className="text-decoration-none stretched-link">Commerciale</a></h5>
						  </div>
					  </div>
				  </div>
				  <div className="col-xl-2 col-md-4 col-sm-6 col-8 mb-3 ">
					  <div className="card border-0 category-box ">
						  <div className="card-body text-center">
							  <img src="assets/images/category-5.png" alt="category_image" className="img-fluid mb-3" />
							  <h5 className="fw-semibold"><a href="/" className="text-decoration-none stretched-link">Bureau</a></h5>
						  </div>
					  </div>
				  </div>

			  </div>
		  </div>
	  </section>
  )
}

export default Categories