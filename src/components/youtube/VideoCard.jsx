import React from "reart";
import styled from " styled-components";


const VideoCard = ({image,title,}) => {

    return 
        <VideoCard>
            <img src={image} alt=""/>
            <videoCard__info>
                <Avatar
                className="videoCard__avatar"
                alt={channel}
                src={channelImage}
                />

            <Video__text>
                <h4>{title}</h4>
                <p>{title}</p>
                <p> {views} . {timestamp} </p>
            </Video__text>

            </videoCard__info>

        </VideoCard>
}

export default VideoCard;