import { useEffect, useState } from "react";
import Pagination from "../../../Components/Pagination/Pagination";
import { API_URL } from "../../../config/constants"
import validator from 'validator';
import { useParams } from "react-router-dom";
import './Property.css'

const cities = [
    {
        name: 'Agadir',
        districts: ['Al Houda', 'Al Inbiâat', 'Dakhla', 'Founti', 'Les Amicales', 'Salam'],
    },
    {
        name: 'Al Hoceima',
        districts: ['Badr', 'Bni Boufrah', 'El Massira', 'Ihchach', 'Isly', 'Sidi Bouhcine'],
    },
    {
        name: 'Azrou',
        districts: ['El Houda', 'Lahbabi', 'Méchouar', 'Tifaouine', 'Tizi Nisly'],
    },
    {
        name: 'Casablanca',
        districts: ['Aïn Sebaâ', 'Al Fida', 'Anfa', "Ben M'Sik", 'Hay Hassani', 'Maârif'],
    },
    {
        name: 'Fès',
        districts: ['Agdal', 'Hay Labladi', 'Jnane Sbile', 'Moulay Rachid', 'Saïss', 'Zouagha'],
    },
    {
        name: 'Kenitra',
        districts: ['Al Amal', 'Al Irfane', 'El Bassatine', 'Ibn Sina', 'Maâmora', 'Sidi Taibi'],
    },
    {
        name: 'Marrakech',
        districts: ['Al Makhfia', 'El Harti', 'Guéliz', 'Massira', 'Médina', 'Sidi Youssef Ben Ali'],
    },
    {
        name: 'Oujda',
        districts: ['Al Farah', 'Al Qods', 'Dar Sebti', 'El Hanchane', 'Izdihar', 'Lamkansa'],
    },
    {
        name: 'Rabat',
        districts: ['Agdal', 'Hassan', 'Hay Riad', "L'Océan", 'Souissi', 'Yacoub Al Mansour'],
    },
    {
        name: 'Tanger',
        districts: ['Al Amal', 'Beni Makada', 'Iberia', 'Médina', 'Moujahidine', 'Malabata'],
    },
];

const Property = () => {
    const [annonces, setAnnonces] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState('');
    const [pictures, setPictures] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [type, setType] = useState('');
    const [propertyNum, setPropertyNum] = useState('');
    const [price, setPrice] = useState('');
    const [bedroom, setBedroom] = useState('');
    const [bathroom, setBathroom] = useState('');
    const [livingRoom, setLivingRoom] = useState('');
    const [floor, setFloor] = useState('');
    const [area, setArea] = useState('');
    const [buildingDate, setBuildingDate] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [districtName, setDistrictName] = useState('');
    const [userId, setUserId] = useState('');
    const [property, setProperty] = useState(null);
    const [propertyPictures, setPropertyPictures] = useState([]);
    const params = useParams();

    const [message, setMessage] = useState('');
    const handlePriceChange = (e) => {
        if (e.target.value === "" || validator.isInt(e.target.value, { min: 0 })) {
            setPrice(e.target.value);
            return;
        }
    }
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        console.log(event.target.value);
        setSelectedDistrict('');
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };
    const handlePicturesChange = event => {
        setPictures(Array.from(event.target.files))
    }

    useEffect(() => {
        fetch(API_URL + "api/list-properties/1", {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(response => response.json())
            .then(result => {
                setAnnonces(result.properties);
                console.log(result.properties);

            })
    }, [])

    useEffect(() => {
        fetch(API_URL + 'api/details/' + params.id)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setProperty(result.property[0]);
                setPropertyPictures(result.PropertyPictures);

            })
    }, []);

    return (
        <section className="col-md-8 col-sm-12 bg-white p-4 pb-2 rounded-2 shadow-sm height_100 position-relative" >
            <h5 className="fw-semibold mb-4">Liste des logements</h5>

            <div class="table-responsive   mx-auto  mytable rounded-3  mt-4">
                <table class="table bg-white table-hover  rounded-3  m-0">
                    <thead>
                        <tr>
                            <th scope="col" className='text-warning'>#</th>
                            <th scope="col" className='text-warning'>Photo</th>
                            <th scope="col" className='text-warning'>Titre</th>
                            <th scope="col" className='text-warning'>Prix</th>
                            <th scope="col" className='text-warning'>Propriétaire</th>
                            <th scope="col" className='text-warning'>Categorie</th>
                            <th scope="col" className='text-warning'>Type</th>
                            <th scope="col" className='text-warning'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {annonces.map(annonce => (
                            <tr>
                                <th scope="row" className="pt-3">{annonce.id}</th>
                                <td>
                                    <img src={API_URL + annonce.picture} className="img-fluid rounded-circle" alt="property_picture" width='50px' style={{ height: '50px' }} />
                                </td>
                                <td className="pt-3">{annonce.title.substring(0, 10)}</td>
                                <td className="pt-3">{annonce.price} Dh</td>
                                <td className="pt-3">{annonce.user.name}</td>
                                <td className="pt-3">{annonce.category.name}</td>
                                <td className="pt-3">{annonce.type}</td>
                                <td className="pt-2">
                                    <button className="btn btn-success me-1" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-pencil-square"></i></button>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h2 class="modal-title fs-5 fw-semibold" id="exampleModalLabel">Nouvelle annonce</h2>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">

                                                    <form className="" onSubmit={''}>
                                                        <div className='row g-4   px-4 pt-2 pb-5'>
                                                            <h5 className='fw-bold mb-4'>Details du logement</h5>
                                                            <div className="col-md-12">
                                                                <label for="title" className="form-label fw-semibold">Titre <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" id="title" name='title' value={title} onChange={(e) => setTitle(e.target.value.toUpperCase())} required />
                                                            </div>
                                                            <div >
                                                                <label className="form-label fw-semibold">Description <span className="text-danger">*</span></label>
                                                                <textarea name="description" className="form-control" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea >
                                                            </div>
                                                            <div className="col-md-12 ">
                                                                <label for="formFile" className="form-label fw-semibold">Image Principale <span className="text-danger">*</span></label>
                                                                <input className="form-control" type="file" id="formFile" name='picture' onChange={(e) => setPicture(e.target.files[0])} />
                                                            </div>
                                                            <div className="col-md-12 ">
                                                                <label for="formFile" className="form-label fw-semibold">Gallery d'images <span className="text-danger">*</span></label>
                                                                <input className="form-control" type="file" id="formFile" onChange={(e) => handlePicturesChange(e)} multiple />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="category" className="form-label fw-semibold">Categorie <span className="text-danger">*</span></label>
                                                                <select id="category" name='category' className="form-select" onChange={(e) => setCategoryId(e.target.value)} required>
                                                                    <option selected disabled>---</option>
                                                                    <option value='1'>Appartement</option>
                                                                    <option value='2'>Maison</option>
                                                                    <option value='3'>Villa</option>
                                                                    <option value='4'>Commerciale</option>
                                                                    <option value='5'>Bureau</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="type" className="form-label fw-semibold">Type <span className="text-danger">*</span></label>
                                                                <select id="type" name='type' className="form-select" onChange={(e) => setType(e.target.value)} required>
                                                                    <option selected disabled>---</option>
                                                                    <option value='À VENDRE'>À VENDRE</option>
                                                                    <option value='À LOUER'>À LOUER</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="price" className="form-label fw-semibold">Prix <span className="text-danger">*</span></label>
                                                                <input type="number" className="form-control" name='price' id="price" value={price} onChange={handlePriceChange} required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="liv_room" className="form-label fw-semibold">Salon <span className="text-danger">*</span></label>
                                                                <input type="number" className="form-control" name='living_room' id="liv_room" value={livingRoom} onChange={(e) => setLivingRoom(e.target.value)} required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="bedroom" className="form-label fw-semibold">Chambre <span className="text-danger">*</span></label>
                                                                <input type="number" className="form-control" name='bedroom' id="bedroom" value={bedroom} onChange={(e) => setBedroom(e.target.value)} required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="bathroom" className="form-label fw-semibold">Salle de bain <span className="text-danger">*</span></label>
                                                                <input type="number" className="form-control" name='bathroom' id="bathroom" value={bathroom} onChange={(e) => setBathroom(e.target.value)} required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="floor" className="form-label fw-semibold">Etage <span className="text-danger">*</span></label>
                                                                <input type="number" className="form-control" name='floor' id="floor" value={floor} onChange={(e) => setFloor(e.target.value)} required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="area" className="form-label fw-semibold">Surface <span className="text-danger">*</span></label>
                                                                <input type="number" className="form-control" name='area' id="area" value={area} onChange={(e) => setArea(e.target.value)} required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="building_date" className="form-label fw-semibold">Date de construction</label>
                                                                <input type="date" className="form-control" name='building_date' id="building_date" Value={buildingDate} onChange={(e) => setBuildingDate(e.target.value)} />
                                                            </div>
                                                        </div>
                                                        <div className='row g-4   px-4 pt-2 pb-5'>
                                                            <h5 className='fw-bold mb-4'>Emplacement du logement</h5>
                                                            <div className="col-md-4">
                                                                <label for="city" className="form-label fw-semibold">Ville <span className="text-danger">*</span></label>
                                                                <select id='city' className='form-select' onChange={handleCityChange}>
                                                                    <option value="">Sélectionnez une ville</option>
                                                                    {cities.map(city => (
                                                                        <option key={city.name} value={city.name}>{city.name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="sector" className="form-label fw-semibold">Secteur <span className="text-danger">*</span></label>
                                                                {selectedCity ?
                                                                    <select id="sector" className="form-select" onChange={handleDistrictChange}>
                                                                        <option value="">Sélectionnez un secteur</option>
                                                                        {cities.find(city => city.name === selectedCity).districts.map(district => (
                                                                            <option key={district} value={district}>{district}</option>
                                                                        ))}
                                                                    </select>
                                                                    :
                                                                    <select id="sector" className="form-select" >
                                                                        <option value="">Sélectionnez un secteur</option>
                                                                    </select>
                                                                }
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="quarter" className="form-label fw-semibold">Quartier <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" name='quarter' id="quarter" value={districtName} onChange={(e) => setDistrictName(e.target.value)} required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="zip_code" className="form-label fw-semibold">Code postale <span className="text-danger">*</span></label>
                                                                <input type="number" className="form-control" name='zip_code' id="zip_code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="propertNum" className="form-label fw-semibold">Numéro du proporiété <span className="text-danger">*</span></label>
                                                                <input type="number" className="form-control" name='propertyNum' id="propertyNum" value={propertyNum} onChange={(e) => setPropertyNum(e.target.value)} required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="longitude" className="form-label fw-semibold">Longitude <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" name='longitude' id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label for="latitude " className="form-label fw-semibold">Latitude  <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" name='latitude ' id="latitude " value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
                                                            </div>
                                                            <div className="text-warning fw-semibold text-center fs-5 mt-3">{message ? <p>{message}</p> : null}</div>
                                                            <div class="col-12  mt-4 text-end" >
                                                                <button type="submit" class="btn btn-warning fw-semibold px-4 shadow-sm  fs-5">Modifier l'annonce</button>
                                                            </div>
                                                        </div>


                                                    </form>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-danger"><i class="bi bi-trash3-fill"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    setElements={setAnnonces}
                    elementName="properties"
                    url={"api/list-properties/"}
                    allElementsUrl={"api/list-properties"}
                />
            </div>
        </section>
    )
}

export default Property