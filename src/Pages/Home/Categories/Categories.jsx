import './Categories.css'
const categoryListe = [
	{
		id : 1,
		title: 'Appartement',
		url: 'assets/images/category-1.png'
	},
	{
		id : 2,
		title: 'Maison',
		url: 'assets/images/category-6.png'
	},
	{
		id : 3,
		title: 'Villa',
		url: 'assets/images/category-2.png'
	},
	{
		id : 4,
		title: 'Commerciale',
		url: 'assets/images/category-4.png'
	},
	{
		id : 5,
		title: 'Bureau',
		url: 'assets/images/category-5.png'
	},
]
const Categories = () => {
  return (
	  <section className="home-category-section  mt-5 pb-5">
		  <div className="container py-2">
			  <div className="row justify-content-center">
				  <h2 class="text-center mb-5 fw-semibold">Nos catégories</h2>
				  {categoryListe.map(category => (
					  <div className="col-xl-2 col-md-4 col-sm-6 col-8 mb-3 ">
						  <div className="card border-0 category-box ">
							  <div className="card-body text-center">
								  <img src={category.url} alt="category_image" className="img-fluid mb-3" />
								  <h5 className="fw-semibold">{category.title}</h5>
							  </div>
						  </div>
					  </div>
				  ))}
			  </div>
		  </div>
	  </section>
  )
}

export default Categories