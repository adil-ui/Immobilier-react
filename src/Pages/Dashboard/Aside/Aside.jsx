import { Link, Outlet } from 'react-router-dom'
import './Aside.css'

const Aside = () => {
    return (
        <section className="dashboard ">
            <div className="row container mx-auto py-4 g-0 d-flex justify-content-between">
                <aside className="col-lg-3 col-md-4 col-sm-12 mb-5">
                    <div class="py-1 rounded-3 shadow-sm bg-white">
                        <div class="text-center my-4">
                            <img src="/assets/images/avatar.jpg" class="img-fluid avater rounded-circle mb-3" alt="" width='90px ' />
                            <h4 className='fw-semibold'>John Doe</h4>
                        </div>
                        <div class='pb-3 '>
                            <Link to="/dashboard" class='d-block py-2 my-2 ms-3 ps-4 dash_item'><i class="me-3 fs-5 fa fa-tachometer-alt text-warning"></i>Dashboard</Link>
                            <Link to="/dashboard/profile" class='d-block py-2 my-2 ms-3 ps-4 dash_item'><i class="me-3 fs-5 fa fa-user-tie text-warning"></i>Profile</Link>
                            <Link to="/dashboard/utilisateurs" class='d-block py-2 my-2 ms-3 ps-4 dash_item'><i class="me-3 fs-5 bi bi-people-fill text-warning"></i>Utilisateurs</Link>
                            <Link to="/dashboard/Logements" class='d-block py-2 my-2 ms-3 ps-4 dash_item'><i class="me-3 fs-5 bi bi-houses-fill text-warning"></i>Logements</Link>
                            <Link to="/dashboard/categories" class='d-block py-2 my-2 ms-3 ps-4 dash_item'><i class="me-3 fs-5 bi bi-tags-fill text-warning"></i>Categories</Link>
                            <Link to="/dashboard/déconnexion" class='d-block py-2 my-2 ms-3 ps-4 dash_item'><i class="me-3 fs-5 fa-solid fa-right-from-bracket text-warning"></i>Déconnexion</Link>
                        </div>
                    </div>
                </aside>
                <Outlet />
            </div>
        </section>

    )
}

export default Aside