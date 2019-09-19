import React from 'react';
import styled from 'styled-components';

const StyledPlaylistItem = styled.div`
    display: flex;
    img{
        height: 55px;
        width: auto;
        border-radius: 50%;
    }
    div:first-of-type{
        margin-right: 20px;
        span{
            position: absolute;
        }
    }
    p{
        font-size: 13px;
    }
    span{
        z-index: 3;
        color: white;
        font-size: 14px;
        width: 55px;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span:first-of-type{
        border-radius: 50px;
        z-index: 2;
        background-color: black;
        opacity: .6;
    }

    div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p:nth-child(2){
            color: grey;
        }
    }
`;

const displayDuration = (duration) => {
    let seconds = Math.floor(duration/1000);
    let minutes = Math.floor(seconds/60);
    seconds -= minutes*60;
    let time = (`${minutes}:${seconds}`);
    return time
}

const PlaylistItem = ({number, img, title, plays, duration, playing}) => {
    return (
        <StyledPlaylistItem>
            <div>
                <span></span>
                <span><p>{number}</p></span>
                <img src={img} alt="thumbnail" />
            </div>
            <div>
                <p>{title}</p>
                <p>{plays} plays</p>
            </div>
            <div>
                <p>{displayDuration(duration)}</p>
            </div>
        </StyledPlaylistItem>
    );
};

export default PlaylistItem;