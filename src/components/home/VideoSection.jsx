import React from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import { useContentContext } from '../../context/ContentContext';

import 'video-react/dist/video-react.css';

const VideoSection = () => {
  const { mediaFiles } = useContentContext();

  return (
    <div className="relative mt-32">
      <style>{`
            .video-react  {
              border-radius: 12px;
            }

            .video-react .video-react-video  {
              border-radius: 12px;
            }
            .video-react .video-react-poster {
              border-radius: 12px;

            }
          `}</style>
      <div className="absolute min-w-full -top-24">
        {mediaFiles && (
          <div className="container flex flex-col gap-10 px-5 lg:flex-row">
            <div className="basis-1/2">
              <Player
                fluid={true}
                src={`https:${mediaFiles?.nutritionVideo?.url}`}
                poster={`https:${mediaFiles?.nutritionPoster?.url}`}
              >
                <BigPlayButton position="center" />
                <ControlBar disableCompletely />
              </Player>
            </div>
            <div className="basis-1/2">
              <Player
                fluid={true}
                src={`https:${mediaFiles?.careVideo?.url}`}
                poster={`https:${mediaFiles?.carePoster?.url}`}
              >
                <BigPlayButton position="center" />
                <ControlBar disableCompletely />
              </Player>
            </div>
          </div>
        )}
      </div>
      <div className="bg-video-image min-h-[670px] md:min-h-[800px] lg:min-h-[670px] min-w-full" />
    </div>
  );
};

export default VideoSection;
