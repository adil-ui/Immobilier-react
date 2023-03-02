
import './Dashboard.css'
const Dashboard = () => {
    return (
        <section className="col-md-8 col-sm-12 height_100 g-0 mx-lg-0 mx-md-auto " >
            <div className="row gx-3 col-12 ">
                <div class="col-xxl-4 col-md-6 mb-5 mx-lg-0 mx-md-auto dash_card">
                    <div className='shadow-sm bg-white border-start  border-5 d-flex align-items-center border-danger row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>35</p>
                            <p className='fw-semibold fs-5'>Utilisateurs</p>
                        </div>
                        <div className='col-6 text-end'>
                            <i class="bi bi-people-fill fontSize60 text-danger"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 mb-5 mx-lg-0 mx-md-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-warning row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>150</p>
                            <p className='fw-semibold fs-5'>Logements</p>
                        </div>
                        <div className='col-6 text-end'>
                            <i class="bi bi-houses-fill fontSize60 text-warning"></i>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-md-6 mb-5 mx-lg-0 mx-md-auto dash_card">
                    <div className='shadow-sm bg-white border-start border-5 d-flex align-items-center border-success row px-4 py-3 rounded-4 mx-lg-0 mx-md-auto'>
                        <div className='col-6'>
                            <p className='fw-semibold fs-4'>6</p>
                            <p className='fw-semibold fs-5'>Categories</p>
                        </div>
                        <div className='col-6 text-end'>
                            <i class="bi bi-tags-fill fontSize60 text-success"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div class="table-responsive col-12   shadow-sm mytable rounded-3 border mt-3">
                    <table class="table bg-white table-hover  rounded-3  m-0">
                    <thead>
                            <tr>
                                <th scope="col" className='text-warning'>#</th>
                                <th scope="col" className='text-warning'>Photo</th>
                                <th scope="col" className='text-warning'>Nom et Prénom</th>
                                <th scope="col" className='text-warning'>Email</th>
                                <th scope="col" className='text-warning'>Addresse</th>
                                <th scope="col" className='text-warning'>Téléphone</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr>
                                <th scope="row">1</th>
                                <td><img src="/assets/images/avatar.jpg" class="img-fluid rounded-circle" alt="" width='47px ' /></td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><img src="/assets/images/avatar.jpg" class="img-fluid rounded-circle" alt="" width='47px ' /></td>

                                <td>Thornton</td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td><img src="/assets/images/avatar.jpg" class="img-fluid rounded-circle" alt="" width='47px ' /></td>

                                <td >Larry the Bird</td>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td><img src="/assets/images/avatar.jpg" class="img-fluid rounded-circle" alt="" width='47px ' /></td>

                                <td >Larry the Bird</td>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td><img src="/assets/images/avatar.jpg" class="img-fluid rounded-circle" alt="" width='47px ' /></td>
                                <td >Larry the Bird</td>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

    )
}

export default Dashboard