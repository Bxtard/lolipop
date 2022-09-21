import Mux from '@mux/mux-node';
const { Video } = new Mux(
  process.env.MUX_TOKEN_ID || '',
  process.env.MUX_TOKEN_SECRET || ''
);

const asset = await Video.Assets.create({
  input:
    'https://res.cloudinary.com/dcwcyu4gi/video/upload/v1663551295/92551ea7-08d6-4c6b-b649-bf44f50aedfb_nnccio.mp4',
  playback_policy: 'public',
});

console.log(asset);
