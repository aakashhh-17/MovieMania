import { useClerk, UserButton } from '@clerk/clerk-react';
import  {  MenuIcon, Search, TicketPlus, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useClerk();
  const {openSignIn} = useClerk();
  const navigate = useNavigate();

  const {favouriteMovies} = useAppContext();


  return (
    <div className='fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 z-50'>
      <Link to={'/'}>
        <h1 className='text-2xl font-semibold'> <span className='text-red-500'>M</span>ovieMania</h1>
      </Link>

      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width]  duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'} `}>
      <XIcon onClick={()=> setIsOpen(!isOpen)} className='md:hidden absolute top-6 right-6 size-6 cursor-pointer' />
        <Link onClick={()=>{setIsOpen(!isOpen); scrollTo(0,0)}} to={'/'}>Home</Link>
        <Link onClick={()=>{setIsOpen(!isOpen); scrollTo(0,0)}} to={'/movies'}>Movies</Link>
        <Link onClick={()=>{setIsOpen(!isOpen); scrollTo(0,0)}} to={'/theaters'}>Theaters</Link>
        <Link onClick={()=>{setIsOpen(!isOpen); scrollTo(0,0)}} to={'/releases'}>Releases</Link>
        { favouriteMovies.length > 0 ? <Link onClick={()=>{setIsOpen(!isOpen); scrollTo(0,0)}} to={'/favourites'}>Favourites</Link> : null}
      </div>

      <div className='flex gap-8 items-center'>
        <Search className='max-md:hidden size-6 cursor-pointer ' />
        {
          !user ? (
            <button onClick={openSignIn} className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>Log In</button>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="My Bookings" labelIcon={<TicketPlus width={15} />} onClick={()=> navigate('/my-bookings')}/>
              </UserButton.MenuItems>
            </UserButton>
          )
        }
        
      <MenuIcon onClick={ ()=>{
        setIsOpen(!isOpen);
        console.log(isOpen); 
      }} className='max-md:ml-4 md:hidden size-8 cursor-pointer' />
      </div>
        
    </div>
  )
}

export default Navbar