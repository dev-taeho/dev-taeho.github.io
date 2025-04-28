import { useParams } from 'react-router-dom';

export default function Project() {
  const { id } = useParams();

  return (
    <>
      <div>this is project page {id}</div>
    </>
  );
}
