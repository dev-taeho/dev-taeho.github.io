import DefaultButton from '@/components/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        this is home page
        <DefaultButton
          btnText={'experience page'}
          onClick={() => navigate('/experience')}
        />
      </div>
    </>
  );
}
