import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=''>
        <ul className='flex justify-end bg-blue-500 p-4 text-white gap-4'>

                <li>
                    <Link to="/" className='hover:text-gray-700'>Home</Link>
                </li>

                <li>
                    <Link to="/owner" className='hover:text-gray-700'>Owner</Link>
                </li>
        </ul>

    </nav>
  )
}

export default Navbar