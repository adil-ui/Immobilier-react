import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Cardd from "../../Components/Cardd/Cardd"
import { API_URL } from "../../config/constants"

import $ from 'jquery'

import './Search.css'
import Paginationn from "../../Components/Paginationn/Paginationn"


const Search = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(API_URL + 'api/properties/1')
            .then(response => response.json())
            .then(result => {
                setData(result.properties);
            })
    }, [])

    const filterByDate = () => {

        fetch(API_URL + 'api/properties/1')
            .then(response => response.json())
            .then(result => {
                setData(result.properties);
            })
        $('.dateActive').addClass('active')
        $('.ascActive').removeClass('active')
        $('.descActive').removeClass('active')

    }
    const orderByAsc = () => {
        const copyData = [...data];
        copyData.sort((a, b) => (a.price < b.price ? 1 : -1));
        setData(copyData);
        $('.dateActive').removeClass('active')
        $('.ascActive').addClass('active')
        $('.descActive').removeClass('active')
    }
    const orderByDesc = () => {
        const copyData = [...data];
        copyData.sort((a, b) => (a.price > b.price ? 1 : -1));
        setData(copyData);
        $('.dateActive').removeClass('active')
        $('.ascActive').removeClass('active')
        $('.descActive').addClass('active')
    }
    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <section className="search py-4">
            <div className="container bg-white rounded-3 py-1 shadow-sm   mx-auto">
                <div className="py-3 d-flex justify-content-between align-items-center">
                    <div className="fw-semibold">78 Résultats</div>
                    <div>
                        <span className="me-3 fw-semibold">Trier par:</span>
                        <Link onClick={filterByDate} className="me-2 text-warning border-bottom border-warning dateActive active">Date</Link>
                        <Link onClick={orderByAsc} className="me-2 text-warning border-bottom border-warning ascActive">Prix Croissant</Link>
                        <Link onClick={orderByDesc} className="text-warning border-bottom border-warning descActive">Prix Décroissant</Link>

                    </div>

                </div>
            </div>
            <div className="row pb-5 pt-4 container mx-auto g-0">
                <div className='col-xl-4  ps-0 pe-xl-5 mx-auto aside'>

                    <form action="" className="shadow-sm  bg-white rounded-3 pb-4 mx-auto">
                        <div className="bg-warning w-100 rounded-top-3 px-3 py-2 mb-3 d-flex justify-content-between align-items-center">
                            <h4 className="mt-1 fw-semibold">Filtre </h4>
                            <h3><i class="bi bi-funnel"></i></h3>
                        </div>
                        <div className="form_search row px-3 w-100 mx-auto">
                            <div className="col-xl-12 col-lg-4 col-md-6 col-sm-12 col-12">
                                <select class="form-select" id="ville">
                                    <option selected disabled>Ville</option>
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
                            </div>
                            <div className="position-relative col-xl-12 col-lg-4 col-md-6 col-sm-12 col-12">
                                <input type="number" className="form-control " style={{ paddingLeft: '40px' }} name='price' id="price" placeholder="Quartier" required />
                                <i class="bi bi-search position-absolute top-0 start-0 ms-4 mt-2 fs-5 text-secondary text-opacity-75"></i>
                            </div>


                            <div className="col-xl-12 col-lg-4 col-md-6 col-sm-12 col-12">
                                <select id="category" name='category' className="form-select" required>
                                    <option selected disabled>Categorie</option>
                                    <option value='1'>Appartement</option>
                                    <option value='2'>Maison</option>
                                    <option value='3'>Villa</option>
                                    <option value='4'>Commerciale</option>
                                    <option value='5'>Bureau</option>
                                </select>
                            </div>
                            <div className="col-xl-12 col-lg-4 col-md-6 col-sm-12 col-12">
                                <select id="type" name='type' className="form-select" required>
                                    <option selected disabled>Type</option>
                                    <option value='1'>À VENDRE</option>
                                    <option value='2'>À LOUER</option>
                                </select>
                            </div>

                            <div className="col-xl-12 col-lg-4 col-md-6 col-sm-12 col-12">
                                <input type="number" className="form-control" name='liv_room' placeholder="Nombre de salon" id="liv_room" required />
                            </div>
                            <div className="col-xl-12 col-lg-4 col-md-6 col-sm-12 col-12">
                                <input type="number" className="form-control" name='bedroom' id="bedroom" placeholder="Nombre de chambre" required />
                            </div>
                            <div className="col-xl-12 col-lg-4 col-md-6 col-sm-12 col-12">
                                <input type="number" className="form-control" name='bathroom' id="bathroom" placeholder="Nombre de salle de bain" required />
                            </div>
                            <div className="col-xl-12 col-lg-4 col-md-6 col-sm-12 col-12">
                                <input type="number" className="form-control" name='floor' id="floor" placeholder="Nombre d'etage" required />
                            </div>
                            <div className="col-xl-6 col-lg-4 col-md-6 col-6">
                                <input type="number" className="form-control" name='area' id="area" placeholder="Surface min" required />
                            </div>
                            <div className="col-xl-6 col-lg-4 col-md-6 col-6">
                                <input type="number" className="form-control" name='area' id="area" placeholder="Surface max" required />
                            </div>
                            <div className="col-xl-6 col-lg-4 col-md-6 col-6">
                                <input type="number" className="form-control" name='price' placeholder="Prix min" id="price" required />
                            </div>
                            <div className="col-xl-6 col-lg-4 col-md-6 col-6">
                                <input type="number" className="form-control" name='price' placeholder="Prix max" id="price" required />
                            </div>
                        </div>
                        <div className="row g-3 ps-xl-4 mx-auto">
                            <div className="form-check col-xl-6 col-lg-4 col-6  ">
                                <input className="form-check-input" type="checkbox" value="ascenseur" id="Ascenseur" />
                                <label className="form-check-label" for="Ascenseur">Ascenseur</label>
                            </div>
                            <div className="form-check col-xl-6 col-lg-4 col-6 ">
                                <input className="form-check-input" type="checkbox" value="balcon" id="Balcon" />
                                <label className="form-check-label" for="Balcon">Balcon</label>
                            </div>
                            <div className="form-check col-xl-6 col-lg-4 col-6 ">
                                <input className="form-check-input" type="checkbox" value="terrasse" id="Terrasse" />
                                <label className="form-check-label" for="Terrasse">Terasse</label>
                            </div>
                            <div className="form-check col-xl-6 col-lg-4 col-6 ">
                                <input className="form-check-input" type="checkbox" value="meuble" id="Meuble" />
                                <label className="form-check-label" for="Meuble">Meuble</label>
                            </div>
                            <div className="form-check col-xl-6 col-lg-4 col-6 ">
                                <input className="form-check-input" type="checkbox" value="securité" id="Securité" />
                                <label className="form-check-label" for="Securité">Securité</label>
                            </div>
                            <div className="form-check col-xl-6 col-lg-4 col-6 ">
                                <input className="form-check-input" type="checkbox" value="parking" id="Parking" />
                                <label className="form-check-label" for="Parking">Parking</label>
                            </div>
                            <div className="form-check col-xl-6 col-lg-4 col-6 ">
                                <input className="form-check-input" type="checkbox" value="chauffage" id="Chauffage" />
                                <label className="form-check-label" for="Chauffage">Chauffage</label>
                            </div>
                            <div className="form-check col-xl-6 col-lg-4 col-6 ">
                                <input className="form-check-input" type="checkbox" value="climatisation" id="Climatisation" />
                                <label className="form-check-label" for="Climatisation">Climatisation</label>
                            </div>
                            <div className="form-check col-xl-6 col-lg-4 col-6 ">
                                <input className="form-check-input" type="checkbox" value="consierge" id="Consierge" />
                                <label className="form-check-label" for="Consierge">Consierge</label>
                            </div>
                            <div className="form-check col-xl-6 col-lg-4 col-6 ">
                                <input className="form-check-input" type="checkbox" value="piscine" id="Piscine" />
                                <label className="form-check-label" for="Piscine">Piscine</label>
                            </div>
                            <div className="form-check col-xl-6 col-lg-4 col-6 ">
                                <input className="form-check-input" type="checkbox" value="balcon" id="Balcon" />
                                <label className="form-check-label" for="Balcon">Balcon</label>
                            </div>
                            <div className="form-check col-xl-6 col-lg-4 col-6 ">
                                <input className="form-check-input" type="checkbox" value="vidéo Surveillance" id="Vidéo Surveillance" />
                                <label className="form-check-label" for="Vidéo Surveillance">Vidéo Surveillance</label>
                            </div>
                        </div>
                        <div className="mt-4 px-3">
                            <button className="btn btn-warning col-12 fw-semibold" style={{ height: '50px' }}>Chercher</button>

                        </div>
                    </form>
                </div>
                <div className='col-xl-8 mt-xl-0 mt-lg-5 mt-5'>
                    <div class="col-12">
                        {data.map(elt => <Cardd elt={elt} key={elt.id} />)}
                    </div>
                    <Paginationn
                        setElements={setData}
                        elementName="properties"
                        url={"api/properties/"}
                        allElementsUrl={"api/properties"}
                    />
                </div>
            </div>
        </section>

    )
}

export default Search