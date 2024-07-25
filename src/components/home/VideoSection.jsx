import React from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';

import 'video-react/dist/video-react.css'; // import css

const VideoSection = () => {
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
				<div className="container flex flex-col gap-10 px-5 lg:flex-row">
					<div className="basis-1/2">
						<Player
							fluid={true}
							poster="/assets/home/video-img.png"
							src="/assets/videos/showcase-video.mp4"
						>
							<BigPlayButton position="center" />
							<ControlBar disableCompletely />
						</Player>
					</div>
					<div className="basis-1/2">
						<Player
							fluid={true}
							poster="/assets/home/video-img.png"
							src="/assets/videos/showcase-video.mp4"
						>
							<BigPlayButton position="center" />
							<ControlBar disableCompletely />
						</Player>
					</div>
				</div>
			</div>
			<div className="bg-[url('../public/video-image.png')] min-h-[670px] md:min-h-[800px] lg:min-h-[670px] min-w-full" />
		</div>
	);
};

export default VideoSection;
