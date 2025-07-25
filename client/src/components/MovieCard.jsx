import { StarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { timeFormat } from '../lib/timeFormat';

const MovieCard = ({movie}) => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-between p-3 bg-gray-800 hover:translate-y-1 rounded-2xl transition duration-300 w-66'>
        <img onClick={()=> navigate(`/movie/${movie.id}`)} src={movie.backdrop_path} alt="" className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer' />

        <p className='font-semibold mt-2 truncate'>{movie.title}</p>

        <p className='text-sm text-gray-400 mt-2'>{new Date(movie.release_date).getFullYear()} • {movie.genres.slice(0,2).map(genre => genre.name).join(" | ")} • {timeFormat(movie.runtime)}</p>

        <div className='flex items-center justify-between mt-4 pb-3'>
            <button onClick={()=> navigate(`/movie/${movie.id}`)} className='px-4 py-2 bg-primary text-xs hover:bg-primary-dull cursor-pointer transition rounded-full font-medium'>Buy Ticket</button>
            <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
                <StarIcon className='size-4 text-primary fill-primary' />
                {movie.vote_average.toFixed(1)}
            </p>
        </div>
    </div>
  )
}

export default MovieCard