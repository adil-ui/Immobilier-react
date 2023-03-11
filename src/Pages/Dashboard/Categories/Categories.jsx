import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../config/constants";


const Categories = () => {
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [listCategories, setListCategories] = useState([]);
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetch(API_URL + "api/list-categories")
            .then(response => response.json())
            .then(result => {
                setListCategories(result.categories);
            })
    }, [])
    const addCategorie = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("picture", picture);
        try {
            const response = await axios.post(API_URL + 'api/add-category', formData);
            setMessage('Ajout avec succès');
            console.log(response);
        } catch (error) {
            setMessage(error.message);
            console.log(error);

        }

    }
    return (
        <section className="col-md-8 col-sm-12  rounded-3 shadow-sm p-4  bg-white g-0 height_100" >
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h5 className="fw-semibold pt-1">Liste des categories</h5>
                <button className="btn btn-success fw-semibold" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Ajout categorie</button>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title fs-5 fw-semibold" id="exampleModalLabel">Nouvelle categorie</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body pt-5">
                            <form onSubmit={addCategorie}>
                                <div className="col-md-12 mb-3">
                                    <label className="form-label fw-semibold">Titre</label>
                                    <input type="text" className="form-control" name='name' onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="">
                                    <label for="formFile" className="form-label fw-semibold">Photo</label>
                                    <input className="form-control" type="file" id="formFile" name="picture" onChange={(e) => setPicture(e.target.files[0])} />
                                </div>
                                <div className="text-warning fw-semibold text-center fs-5 mt-3">{message ? <p>{message}</p> : null}</div>

                                <div className="col-12 mt-5 mb-3 d-flex justify-content-end">
                                    <button type="submit" class="btn btn-warning me-2 fw-semibold">Enregistrer</button>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div class="table-responsive col-12 mx-auto mytable rounded-3  mt-3">
                <table class="table bg-white table-hover  rounded-3  m-0 mb-5">
                    <thead>
                        <tr>
                            <th scope="col" className='text-warning'>#</th>
                            <th scope="col" className='text-warning'>Photo</th>
                            <th scope="col" className='text-warning'>Titre</th>
                            <th scope="col" className='text-warning'>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {listCategories.map(categorie => (
                            <tr>
                                <th scope="row" className="pt-3">{categorie.id}</th>
                                <td>
                                    <img src={API_URL + categorie.picture} className="img-fluid rounded-circle" alt="categorie_picture" width='45px ' />
                                </td>
                                <td className="pt-3">{categorie.name}</td>
                                <td className="pt-2">
                                    <button className="btn btn-danger"><i class="bi bi-trash3-fill"></i> Delete</button>
                                </td>

                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Categories