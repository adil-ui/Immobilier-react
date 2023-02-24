import './About.css'

const About = () => {
  return (
      <div className="my-5 pb-5">
          <div className="container">
              <div className="row d-flex align-items-center">
                  <div className="col-xl-6 col-md-8 col-sm-10 col-10 mt-4">
                      <div className="position-relative w-50">
                          <div className=" shadow">
                              <img src="/assets/images/ab-top.png" alt="about" className="img-fluid shadow" />
                          </div>
                          <div className="position-absolute w-75 img_abso shadow">
                              <img src="/assets/images/ab-top2.png" alt="about" className="img-fluid shadow" />
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-6 col-md-8 col-sm-10 col-10 mt-4">
                      <h2>Découvrez notre agence</h2>
                      <div className="content-agence my-4">  <p className="lh-lg">Frimmobilier reçoit une clientèle variée, locale ou provenant d’autres départements, pour des projets aussi différents que l’achat en résidence principale, la location annuelle, la gestion immobilière d’un patrimoine immobilier, l’investissement immobilier (défiscalisé ou non) et la vente d’un bien immobilier. Située à&nbsp;<a href="http://www.frimmobilier.fr/immobilier/tout/immo-le-port-marly-78/" rel="noopener noreferrer" target="_blank">Port Marly</a>, notre agence immobilière développe ses activités immobilières dans les départements des Yvelines et des Hauts de Seine, notamment sur le secteur immobilier de l’ouest parisien.</p>  </div>
                      <div className="link-agence">
                          <button className="btn btn-warning">En savoir plus</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default About