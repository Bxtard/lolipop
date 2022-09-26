import Image from 'next/image';
import { useRouter } from 'next/router';

const colors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
];

interface Props {
  video: Video;
}

type Video = {
  name: string;
  image: string;
  description: string;
  playbackId: string;
};

function Card(props: Props) {
  const router = useRouter();
  const { video } = props;

  const handleClick = () => {
    router.push(`/video/${video.playbackId}`);
  };

  const i = Math.floor(Math.random() * 8);
  return (
    <div className={`card bg-${colors[i]} border-${colors[i]} cardx`}>
      <Image src={video.image} alt='poster' height={300} width={220} />
      <button
        type='button'
        onClick={handleClick}
        className={`btn btn-${colors[i]}`}
      >
        {video.name}
      </button>
    </div>
  );
}

export default Card;
