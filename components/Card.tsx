import Image from 'next/image';

const video = {
  id: 1,
  name: 'Pirates of the caribean',
  img: '',
};

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
  const { video } = props;
  const i = Math.floor(Math.random() * 8);
  console.log(i);
  return (
    <div className={`card bg-${colors[i]} border-${colors[i]} cardx`}>
      <Image src={video.image} alt='poster' height={300} width={220} />
      <button type='button' className={`btn btn-${colors[i]}`}>
        {video.name}
      </button>
    </div>
  );
}

export default Card;
