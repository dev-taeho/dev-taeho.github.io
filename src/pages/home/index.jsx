import DefaultButton from '@src/components/Button';
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
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>
      </div>
    </>
  );
}
