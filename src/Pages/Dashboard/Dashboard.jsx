
import { useEffect, useState } from 'react';
import { API_URL } from '../../config/constants';
import './Dashboard.css'
const Dashboard = () => {
    const [users, setUsers] = useState([])
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        fetch(API_URL + "api/last-users", {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(response => response.json())
            .then(result => {
                setUsers(result.users);
            })
    }, [])
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
                <h5 className='fw-semibold '>Les derniers inscriptions</h5>

                <div class="table-responsive col-12 bg-white  shadow-sm mytable rounded-3 border mt-3">
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
                            {users.map(user => (
                                <tr>
                                    <th scope="row" className="pt-3">{user.id}</th>
                                    <td><img src={API_URL + user.picture} className="img-fluid rounded-circle" alt="categorie_picture" width='44px ' /></td>
                                    <td className="pt-3">{user.name}</td>
                                    <td className="pt-3">{user.email}</td>
                                    <td className="pt-3">{user.address}</td>
                                    <td className="pt-3">{user.phone}</td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </section>

    )
}

export default Dashboard