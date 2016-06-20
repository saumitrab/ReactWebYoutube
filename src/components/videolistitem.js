import React from 'react';

import {
  View,
  Text
} from 'react';

const VideoListItem = ({video, onVideoSelected}) => {

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelected(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div clasName="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>

    </li>
  );
};

export default VideoListItem;
