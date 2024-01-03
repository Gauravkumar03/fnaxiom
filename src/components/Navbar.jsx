import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <i class="fa-brands fa-joomla fa-2xl"></i>
            </div>
            <div className="right-items">
                <div className='right-item'>
                    <i class="fa-solid fa-user fa-2xl"></i>
                </div>
                <div className='right-item'>
                    <i class="fa-solid fa-phone fa-2xl"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar