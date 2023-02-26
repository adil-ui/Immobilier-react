import { useTypewriter } from 'react-simple-typewriter'

import './Hero.css'
const Hero = () => {
    const [text] = useTypewriter({
        words: ['Appartement', 'Maison', 'Villa', 'Commerciale', 'Bureau'],
        loop: 0,
        typeSpeed : 120,
        deleteSpeed: 120,
        delaySpeed : 1500,
      })
    return (
        
        <section className='hero_section'>
            <div className='hero-back'></div>
            <section className='hero col-lg-11 col-11'>
                <div className='hero-desc text-center text-light '>
                    <h1 className='mb-4 fontSize60 fw-semibold'> Recherchez votre prochaine <span className='text-warning'>{text}</span>  </h1>
                    <h2 className='col-lg-6  col-12  lh-base mx-auto fw-semibold'>Trouvez les nouveaux biens et les biens vedettes situés dans votre pays.</h2>
                </div>
                <div class="row justify-content-center mt-md-5 mt-sm-0 ">
                    <div class="col-xl-10 col-lg-11 col-md-12 col-sm-8 col-10 bg-light p-4 rounded-2 shadow">
                        <div class="row ">
                            <div class="col-md-3 col-sm-12 mx-auto">
                                <div class="form-floating ">
                                    <select class="form-select" id="ville" style={{ height: '60px' }}>
                                        <option selected>Ouvrez menu de sélection</option>
                                        <option value="2"> </option>
                                        <option value="3" >Tout le Maroc</option>
                                        <option style={{ backgroundColor: "#dcdcc3;" }} value="0" disabled="disabled">-- AUTRES VILLES --</option>
                                        <option id="searcharea_expanded_fisrt_option" value="1005"> Casablanca</option>
                                        <option value="1013"> Agadir</option>
                                        <option value="1017"> Al Hocïema</option>
                                        <option value="1014"> Béni Mellal</option>
                                        <option value="1007"> El Jadida</option>
                                        <option value="1018"> Errachidia</option>
                                        <option value="1003"> Fès</option>
                                        <option value="1004"> Kénitra</option>
                                        <option value="1019"> Khénifra</option>
                                        <option value="1001"> Khouribga</option>
                                        <option value="1020"> Larache</option>
                                        <option value="1008"> Marrakech</option>
                                        <option value="1009"> Meknès</option>
                                        <option value="1021"> Nador</option>
                                        <option value="1022"> Ouarzazate</option>
                                        <option value="1010"> Oujda</option>
                                        <option value="1012"> Rabat</option>
                                        <option value="1002"> Safi</option>
                                        <option value="1023"> Settat</option>
                                        <option value="1006"> Salé</option>
                                        <option value="1015"> Tanger</option>
                                        <option value="1016"> Taza</option>
                                        <option value="1011"> Tétouan</option>
                                        <option value="other" style={{ color: "red" }}>Choisir une autre ville...</option>
                                    </select>
                                    <label for="ville">Ville</label>

                                </div>
                            </div>

                            <div class=" col-md-3 col-sm-12 mx-auto">
                                <div class="form-floating">
                                    <select class="form-select" id="property" style={{ height: '60px' }}>
                                        <option selected>Ouvrez menu de sélection</option>
                                        <option value="" data-select2-id="2">&nbsp;</option>
                                        <option value="1">All categories</option>
                                        <option value="2">Apartment</option>
                                        <option value="3">Villas</option>
                                        <option value="4">Commercial</option>
                                        <option value="5">Offices</option>
                                        <option value="6">Garage</option>
                                    </select>
                                    <label for="property">Type de propriété</label>
                                </div>
                            </div>

                            <div class=" col-md-3 col-sm-12 mx-auto">
                                <div class="form-floating">
                                    <select class="form-select " id="price" style={{ height: '60px' }} >
                                        <option selected>Ouvrez menu de sélection</option>
                                        <option value="" data-select2-id="4">&nbsp;</option>
                                        <option value="1">From 40,000 To 10m</option>
                                        <option value="2">From 60,000 To 20m</option>
                                        <option value="3">From 70,000 To 30m</option>
                                        <option value="3">From 80,000 To 40m</option>
                                        <option value="3">From 90,000 To 50m</option>
                                    </select>
                                    <label for="price ">Plage de prix</label>
                                </div>
                            </div>

                            <div class="col-xl-1 col-lg-3 col-md-3 col-sm-10  mx-auto"  >
                                <div class="form-group none d-flex align-items-end">
                                    <button class="btn btn-warning px-4 fs-4 mx-auto" style={{ height: '60px' }}><i class="bi bi-search  align-middle"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
      
       
    )
}

export default Hero