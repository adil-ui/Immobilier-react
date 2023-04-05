import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../../../Components/Pagination/Pagination";
import { API_URL } from "../../../config/constants"
import './Property.css'
import PropertyDetails from "./PropertyDetails";

const Property = () => {
    const [annonces, setAnnonces] = useState([]);
    const [search, setSearch] = useState('id');
    const [searchValue, setSearchValue] = useState('');
    const [dataLenght, setDataLenght] = useState(0);
    const user = JSON.parse(localStorage.getItem('user'));


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
                setDataLenght(result.propertiesLenght)

            })
    }, [])
    const deleteProperty = (id) => {
        axios.delete(API_URL + 'api/delete-property/' + id, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
            .then(() => {
                window.location.reload();
            });
    }
    const submit = (e) => {
        e.preventDefault();

        axios.post(API_URL + "api/searchAll", { search, searchValue }, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(response => {
                console.log(response.data)
                setAnnonces(response.data.properties)
                setDataLenght(response.data.propertiesLenght)
            })

            .catch(error =>
                console.log(error)
            )
    }
    return (
        <section className="col-md-8 col-10 mx-md-0 mx-auto bg-white p-4 pb-0 rounded-2 shadow-sm height_100 position-relative" >
            <form onSubmit={submit}>
                <div class="input-group mx-auto">

                    <select class="search_select" onChange={(e) => {
                        setSearch(e.target.value)
                        setSearchValue("")
                    }}>
                        <option value="id" selected>Id</option>
                        <option value="title">Titre</option>
                        <option value="city">Ville</option>
                    </select>
                    <input type="text" class="form-control" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button class="btn btn-outline-secondary" type="submit" >Chercher</button>
                </div>

            </form>
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
                            <th scope="col" className='text-warning'>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {annonces.map(annonce => (
                            <>
                                <tr>
                                    <th scope="row" className="align-middle">{annonce.id}</th>
                                    <td className="align-middle">
                                        <img src={API_URL + annonce.picture} className="img-fluid rounded-circle" alt="property_picture" width='50px' style={{ height: '50px' }} />
                                    </td>
                                    <td className="align-middle">{annonce.title}</td>
                                    <td className="align-middle">{annonce.price} Dh</td>
                                    <td className="align-middle">{annonce.user?.name}</td>
                                    <td className="align-middle">{annonce.category?.name}</td>
                                    <td className="align-middle">{annonce.type}</td>
                                    <td className="align-middle">
                                        <button className="btn btn-success me-1"><i class="bi bi-eye-fill" data-bs-toggle="modal" data-bs-target={`#details-${annonce.id}`}></i></button>
                                        <button onClick={() => deleteProperty(annonce.id)} className="btn btn-danger"><i class="bi bi-trash3-fill"></i></button>
                                    </td>
                                </tr>
                                <PropertyDetails id={annonce.id} />
                            </>


                        ))}

                    </tbody>
                </table>
                {dataLenght > 5 &&
                    <Pagination
                        setElements={setAnnonces}
                        elementName="properties"
                        url={"api/list-properties/"}
                        allElementsUrl={"api/list-properties"}
                    />
                }
            </div>
        </section>
    )
}

export default Property