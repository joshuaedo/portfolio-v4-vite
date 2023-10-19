import { useNavigate } from 'react-router-dom';
import { Arrow } from '../../components/ui/image';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='flex h-[50vh] flex-col items-center justify-center'>
      <h3 className='px-3 py-2 text-lg font-light'>Page not found.</h3>
      <button
        onClick={() => navigate('/')}
        type='button'
        className='title-text link flex'
      >
        Go Home <Arrow className='ml-1 mt-[2px] h-4 w-4' />
      </button>
    </div>
  );
};
