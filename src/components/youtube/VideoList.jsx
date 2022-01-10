import React from "react";
import styled from "styled-components";

const VideoList = ({data}) => {

    return (
        <>
        <Container>
            {data.map(({id,title,view,timestamp,channelImage,channel,image,}) => (
            <Short key={id}>
                <Title src={title}/>
                <View src={view}/>
                <Timestamp src={timestamp}/>
                <ChannelImage src={channelImage}/>
                <Channel src={channel}/>
                <Image src={image}/>
            </Short>
            ))}
        </Container>
        </>
      
    )
};

const Container = styled.div`
width: 400px;
height: 500px;
`;
const Short = styled.div``;
const Title = styled.div``;
const View = styled.div``;
const Timestamp= styled.div``;
const ChannelImage = styled.div``;
const Channel = styled.div``;
const Image = styled.div``;

export default VideoList; 
