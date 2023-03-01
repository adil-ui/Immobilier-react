import { useEffect } from 'react';
import './AddProperty.css'
const AddProperty = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <section className='my-5 py-4'>
            <div className="add_property my-3 py-5 ">
                <div className='text-center shadow-lg mt-4'>
                    <h2 className='text-white fw-bolder fs-1'>Publier une annonce</h2>
                </div>
            </div>
            <div className='col-md-6 mx-auto'>
                <h3 className='fw-bolder text-center my-5'>Remplissez le formulaire</h3>
                <form className="">
                    <div className='row g-4 shadow-sm border rounded-4 px-4 pt-2 pb-5'>
                        <h5 className='fw-bold mb-4'>Details du logement</h5>
                        <div className="col-md-12">
                            <label for="title" className="form-label fw-semibold">Titre <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="title" required />
                        </div>
                        <div >
                            <label className="form-label fw-semibold">Description <span className="text-danger">*</span></label>
                            <textarea name="description" className="form-control" rows="4" required></textarea >
                        </div>
                        <div className="col-md-12 ">
                            <label for="formFile" className="form-label fw-semibold">Image <span className="text-danger">*</span></label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                        <div className="col-md-4">
                            <label for="category" className="form-label fw-semibold">Categorie <span className="text-danger">*</span></label>
                            <select id="category" name='category' className="form-select" required>
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
                            <select id="type" name='type' className="form-select" required>
                                <option selected disabled>---</option>
                                <option value='1'>À VENDRE</option>
                                <option value='2'>À LOUER</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label for="price" className="form-label fw-semibold">Prix <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='price' id="price" required />
                        </div>
                        <div className="col-md-4">
                            <label for="liv_room" className="form-label fw-semibold">Salon <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='liv_room' id="liv_room" required />
                        </div>
                        <div className="col-md-4">
                            <label for="bedroom" className="form-label fw-semibold">Chambre <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='bedroom' id="bedroom" required />
                        </div>
                        <div className="col-md-4">
                            <label for="bathroom" className="form-label fw-semibold">Salle de bain <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='bathroom' id="bathroom" required />
                        </div>
                        <div className="col-md-4">
                            <label for="floor" className="form-label fw-semibold">Etage <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='floor' id="floor" required />
                        </div>
                        <div className="col-md-4">
                            <label for="area" className="form-label fw-semibold">Surface <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='area' id="area" required />
                        </div>
                        <div className="col-md-4">
                            <label for="building_date" className="form-label fw-semibold">Date de construction</label>
                            <input type="number" className="form-control" name='building_date' id="building_date" />
                        </div>
                    </div>
                    <div className='row g-4 shadow-sm border rounded-4 px-4 pt-2 pb-5 mt-4'>
                        <h5 className='fw-bold mb-4'>Emplacement du logement</h5>
                        <div className="col-md-4">
                            <label for="city" className="form-label fw-semibold">Ville <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='city' id="city" required />
                        </div>
                        <div className="col-md-4">
                            <label for="sector" className="form-label fw-semibold">Secteur <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='sector' id="sector" required />
                        </div>
                        <div className="col-md-4">
                            <label for="quarter" className="form-label fw-semibold">Quartier <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='quarter' id="quarter" required />
                        </div>
                        <div className="col-md-4">
                            <label for="zip_code" className="form-label fw-semibold">Code postale <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='zip_code' id="zip_code" required />
                        </div>
                        <div className="col-md-4">
                            <label for="longitude" className="form-label fw-semibold">Longitude <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='longitude' id="longitude" required />
                        </div>
                        <div className="col-md-4">
                            <label for="latitude " className="form-label fw-semibold">Latitude  <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name='latitude ' id="latitude " required />
                        </div>
                    </div>
                    <div className='row g-4 shadow-sm border rounded-4 px-4 pt-2 pb-5 mt-4'>
                        <h5 className='fw-bold mb-4'>Caractéristiques du logement</h5>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="ascenseur" id="Ascenseur" />
                            <label className="form-check-label" for="Ascenseur">Ascenseur</label>
                        </div>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="balcon" id="Balcon" />
                            <label className="form-check-label" for="Balcon">Balcon</label>
                        </div>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="terrasse" id="Terrasse" />
                            <label className="form-check-label" for="Terrasse">Terasse</label>
                        </div>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="meuble" id="Meuble" />
                            <label className="form-check-label" for="Meuble">Meuble</label>
                        </div>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="securité" id="Securité" />
                            <label className="form-check-label" for="Securité">Securité</label>
                        </div>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="parking" id="Parking" />
                            <label className="form-check-label" for="Parking">Parking</label>
                        </div>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="chauffage" id="Chauffage" />
                            <label className="form-check-label" for="Chauffage">Chauffage</label>
                        </div>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="climatisation" id="Climatisation" />
                            <label className="form-check-label" for="Climatisation">Climatisation</label>
                        </div>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="consierge" id="Consierge" />
                            <label className="form-check-label" for="Consierge">Consierge</label>
                        </div>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="piscine" id="Piscine" />
                            <label className="form-check-label" for="Piscine">Piscine</label>
                        </div>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="balcon" id="Balcon" />
                            <label className="form-check-label" for="Balcon">Balcon</label>
                        </div>
                        <div className="form-check col-md-3">
                            <input className="form-check-input" type="checkbox" value="vidéo Surveillance" id="Vidéo Surveillance" />
                            <label className="form-check-label" for="Vidéo Surveillance">Vidéo Surveillance</label>
                        </div>
                        
                    </div>
                    <div class="col-12 text-center mt-4">
                        <button type="submit" class="btn btn-warning fw-semibold px-4 shadow-sm col-12 fs-5 py-2">Publier</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddProperty