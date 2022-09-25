import MuxPlayer from '@mux/mux-player-react';

export default function VideoPlayer() {
  return (
    <MuxPlayer
      streamType='on-demand'
      playbackId='cFhfcxddnJB6s3sTmOMy00vetWzj4NXaXgcZLB94pB024.m3u8'
      metadata={{
        video_id: 'video-id-54321',
        video_title: 'Test video title',
        viewer_user_id: 'user-id-007',
      }}
    />
  );
}
