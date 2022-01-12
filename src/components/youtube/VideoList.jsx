import React from "react";
import styled from "styled-components";

const VideoList = ({data}) => {

    return (
        <>
        <Wrap>
        <Container>
            {data.map(({id,title,views,timestamp,channelImage,channel,image,}) => (
            <Short key={id}>
                <ChannelImage src={channelImage}/>




                <Info>
                    <MiniProfile>
                        <Image src={image} />
                    </MiniProfile>

                    <Text>
                        <Title>{title}</Title>
                        <Channel>{channel}</Channel>
                        <Count>
                            <View>{views}회</View>
                            <Span>•</Span>
                            <Timestamp>{timestamp}일 전</Timestamp>
                        </Count>
                    </Text> 

                </Info>
            </Short>
            ))}
        </Container>
        </Wrap>
        </>
      
    )
}; 


const Wrap = styled.div`
width: 100%;
background-color: #f9f9f9;
padding: 40px 20px;
padding-bottom: 0;
`;

const Container = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

const Info = styled.div`
display: flex;
padding-right: 30px;
`;

const MiniProfile = styled.div`
`;

const Text = styled.p`
margin-left: 15px;
`;

const Short = styled.div`
margin-bottom: 40px;
width: 270px;
`;

const Title = styled.div`
height: 48px;
font-size: 14px;
overflow: hidden;
text-overflow: ellipsis;
`;

const ChannelImage = styled.img`
height: 140px;
width: 250px;
`;

const Count = styled.div`
display: flex;
font-size: 12px;
`;

const Channel = styled.div`
font-size: 12px;
color: #606060;
`;

const View = styled.div`
color: #606060;
`;

const Span  = styled.span`
color: #606060;
margin: 0 4px;
`;

const Timestamp= styled.div`
color: #606060;
`;

const Image = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
margin: 12px 12px 0 0;
`;

export default VideoList; 
