import React from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';
// import careVid from '../../../public/sahseh-care-vid.mp4';
import Video from 'next-video';
import nutrition from '/videos/sahseh-nutrition-vid.mp4';
import care from '/videos/sahseh-care-vid.mp4';
// import getStarted from '/videos/get-started.mp4';

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
						{/* <Player
							fluid={true}
							poster="/public/about-nutrition.png"
							src="/public/sahseh-nutrition-vid.mp4"
						>
							<BigPlayButton position="center" />
							<ControlBar disableCompletely />
						</Player> */}
						<Video src={care} />
					</div>
					<div className="basis-1/2">
						<Video src={nutrition} />
						{/* <Video src={nutrition} /> */}
						{/* <Player
							fluid={true}
							poster="../../../public/about-care.png"
							src="/public/sahseh-nutrition-vid.mp4"
							// src={careVid}
						>
							<BigPlayButton position="center" />
							<ControlBar disableCompletely />
						</Player> */}
					</div>
				</div>
			</div>
			<div className="bg-[url('../public/video-image.png')] min-h-[670px] md:min-h-[800px] lg:min-h-[670px] min-w-full" />
		</div>
	);
};

export default VideoSection;
