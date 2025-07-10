import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'

const Favourite = () => {
  return dummyShowsData.length > 0 ? (
    <div className='relative  my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh] '>
      <BlurCircle top='150px' left='0px' />
      <BlurCircle bottom='50px' right='50px' />
      <h1 className='text-gray-300 text-lg font-medium my-4 '>Your Favourite Movies</h1>

      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.map((movie)=>(
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className='my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44'>
      <h1 className='text-gray-300 font-bold text-3xl text-center tracking-wide'>No Favourite Movies</h1>
    </div>
  )
}

export default Favourite