import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className=''>
        <div className="logo">
            <h2 className='flex text-red-500 justify-center font-size: 1.25rem'>Nightmare Tracer v2.0.1</h2>
        </div>

        <nav>
            <ul className='flex text-red-500 justify-center border-y-4 border-dashed border-red-500'>
                <li className='mx-10'>
                    <Link to='/homepage'>Homepage</Link>
                </li>
                <li className='mx-10'>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li className='mx-10'>
                    <a href="#">Sns</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header