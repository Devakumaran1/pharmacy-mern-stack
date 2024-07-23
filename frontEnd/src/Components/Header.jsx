import { NavLink } from 'react-router-dom'
import "./header.css"
import { useContext } from 'react'
import { PharmaProduct } from './Context/ProductContext'


function NavBar() {
    const { billingItems } = useContext(PharmaProduct)


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container">
                    <span className="navbar-brand text-white"><NavLink to="/">Pharmacy Management</NavLink ></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><NavLink to="/">Pharmacy Management</NavLink ></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <span className="nav-link active text-white" aria-current="page"><NavLink to="/">Stock</NavLink></span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link  active text-white"><NavLink to="additems">Add-Item</NavLink></span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link active text-white"><NavLink to="invoice">Invoice</NavLink></span>
                                </li>
                            </ul>
                            <NavLink to="billing">
                                <button type="button" className="btn btn-sm btn-primary">
                                    <i className="bi bi-receipt-cutoff"></i> Bill<span className="badge text-bg-danger">{billingItems.length}</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar