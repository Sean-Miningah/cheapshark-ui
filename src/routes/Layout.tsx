import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <nav>
                <ul className="flex flex-row justify-end mx-3 my-2 space-x-6">
                    <li><Link to="/" className="text-4xl font-semibold text hover:text-amber-600">Deals</Link></li>
                    <li><Link to="/games" className="text-4xl font-semibold text hover:text-amber-600">Games</Link></li>
                    <li><Link to="/about" className="text-4xl font-semibold text hover:text-amber-600">About</Link></li>
                </ul>
            </nav>

            <hr />

            <div className="mx-4 my-2">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;