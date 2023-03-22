import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Pagination from "../../../Components/Pagination/Pagination";
import { API_URL } from "../../../config/constants";


const MyProperties = () => {
    const [annonces, setAnnonces] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        fetch(API_URL + "api/my-properties/" + user.id + "/1", {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(response => response.json())
            .then(result => {
                setAnnonces(result.properties);
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
    return (
        <section className="col-md-8 col-10 mx-md-0 mx-auto bg-white p-4 pb-2 rounded-2 shadow-sm height_100 position-relative" >
            <h5 className="fw-semibold mb-4">Liste des logements</h5>
            <div class="table-responsive   mx-auto  mytable rounded-3  mt-4">
                <table class="table bg-white table-hover  rounded-3  m-0">
                    <thead>
                        <tr>
                            <th scope="col" className='text-warning'>#</th>
                            <th scope="col" className='text-warning'>Photo</th>
                            <th scope="col" className='text-warning'>Titre</th>
                            <th scope="col" className='text-warning'>Prix</th>
                            <th scope="col" className='text-warning'>Categorie</th>
                            <th scope="col" className='text-warning'>Type</th>
                            <th scope="col" className='text-warning'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {annonces.map(annonce => (
                            <tr>
                                <th scope="row" className="align-middle">{annonce.id}</th>
                                <td>
                                    <img src={API_URL + annonce.picture} className="img-fluid rounded-circle" alt="property_picture" width='50px' style={{ height: '50px' }} />
                                </td>
                                <td className="align-middle">{annonce.title}</td>
                                <td className="align-middle">{annonce.price} Dh</td>
                                <td className="align-middle">{annonce.category.name}</td>
                                <td className="align-middle">{annonce.type}</td>
                                <td className="align-middle">
                                <NavLink to={`/dashboard/modifier-mon-annonce/${annonce.id}`} className="btn btn-success me-1"><i class="bi bi-pencil-square"></i></NavLink>

                                    <button onClick={() => deleteProperty(annonce.id)} className="btn btn-danger"><i class="bi bi-trash3-fill"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    setElements={setAnnonces}
                    elementName="properties"
                    url={"api/my-properties/" + user.id + "/"}
                    allElementsUrl={"api/my-properties/" + user.id + "/"}
                />
            </div>
        </section>
    )
}

export default MyProperties