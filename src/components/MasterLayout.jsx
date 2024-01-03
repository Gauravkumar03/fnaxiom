import './MasterLayout.css'
import { NavLink, Outlet } from 'react-router-dom'

function MasterLayout() {

    const activeStyles = {
        backgroundColor: "black",
        color: "white",
        padding: "1%",
        borderRadius: "10px",
        textDecoration: "none"
    }

    const normalStyles = {
        padding: "1%",
        borderRadius: "10px",
        textDecoration: "none",
    }

    return (
        <>
            <div className="container">
                <div className="layout-nav">
                    <div className='layout-nav-items'>Notice & Orders</div>
                    <div className='layout-nav-items'>Check Status of Raised Requests</div>
                </div>
                <h1 className='heading'>Deduction Master</h1>
                <div className='registers'>
                    <div className="register-nav-item">Return Register</div>
                </div>
                <div className="main-nav">
                    <NavLink to="/" end style={({ isActive }) => isActive ? activeStyles : normalStyles} className="main-nav-items">Recent</NavLink>
                    <NavLink to="/all" style={({ isActive }) => isActive ? activeStyles : normalStyles} className="main-nav-items">All</NavLink>
                    <NavLink to="/incomplete" style={({ isActive }) => isActive ? activeStyles : normalStyles} className="main-nav-items">Incomplete Deductors</NavLink>
                </div>
                <Outlet />
            </div>

        </>
    )
}

export default MasterLayout