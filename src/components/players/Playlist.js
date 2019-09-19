import React from 'react';
import styled from 'styled-components';
import PlaylistItem from './PlaylistItem';
const StyledPlaylist = styled.div`
    padding: 10px 20px;
    background-color: white;
`;

const Playlist = props => {
    return (
        <StyledPlaylist>
            <PlaylistItem 
                number="1" 
                img="https://i1.sndcdn.com/artworks-000557759277-nwur66-t500x500.jpg"
                title="Eeva Bolin - Ny organisation för kultur i grundskola och förskola"
                duration="370110"
                plays="997"
                playing={false}
                 />
        </StyledPlaylist>
    );
};

export default Playlist;