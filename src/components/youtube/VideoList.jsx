import React from "react";
import styled from "styled-components";

const VideoList = ({data}) => {

    return (
        <>
        <Wrap>
        <Container>
            {data.map(({id,title,view,timestamp,channelImage,channel,image,}) => (
            <Short key={id}>
                    <ChannelImage src={channelImage}/>
                <Info>

                    <Avatar >
                        <Channel src={channel} />
                        <Image src={image} />

                       
                    </Avatar>

                    <Text >
                        <Title src={title}/>
                        <View src={view}/>
                        <Timestamp src={timestamp}/>
                    </Text> 
                        
                    
                </Info>
            </Short>
            ))}
        </Container>
        </Wrap>
        </>
      
    )
}; 


const Container = styled.div`
display: flex;
flex-wrap: wrap;
`;


const Wrap = styled.div`
background-color: #f9f9f9;
padding: 40px 20px;
padding-bottom: 0;
`;


const Info = styled.div`
display: flex;
margin-top: 10px;
padding-right: 30px;
`;



const Avatar = styled.div`
`;


const Text = styled.p`
margin-left: 15px;
`;



const Short = styled.div`
margin-bottom: 40px;
width: 270px;
`;
const Title = styled.div``;
const View = styled.div``;
const Timestamp= styled.div``;


const ChannelImage = styled.img`
height: 140px;
width: 250px;
`;
const Channel = styled.p``;


const Image = styled.img`
`;

export default VideoList; 
