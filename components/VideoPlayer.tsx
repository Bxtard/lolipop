import MuxPlayer from '@mux/mux-player-react';

export default function VideoPlayer() {
  return (
    <MuxPlayer
      streamType='on-demand'
      playbackId='kjiuwEZRUKK1kbl3xkqRSeGaXHUh4nv1YDXA845UHFU'
      metadata={{
        video_id: 'video-id-54321',
        video_title: 'Test video title',
        viewer_user_id: 'user-id-007',
      }}
    />
  );
}
