import React from 'react';
import styled from 'styled-components';

import Listen from './Listen';
import Save from './Save';

const StyledPod = styled.div`
    margin: 20px 20px 20px;
    display: flex;
    h4{
        color: white;
        font-size: 16px;
        margin-bottom: 5px;
    }
    p{
        font-size: 12px;
        color: white;
    }
    section:nth-child(1){
        height: auto;
        margin-right: 10px;
        div { 
            background-color: ${props => props.theme.orange};
            /* background-color: blue; */
            position: absolute;
            z-index: 2;
            margin: 103px 0 0 85px ; 
            /* opacity: 0.5;      */
            padding: 1px;
        }
        img{
            width: auto;
            height: 122px;
        }
    }
    section:nth-child(2){
        padding: 10px 0 10px 0;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div:nth-child(2){
            display: flex;
        }
    }

`;

const Pod = ({ title, description, thumbnail, saved }) => {
    return (
        <StyledPod>
            <section>
                <div>
                    <p>10:02</p>
                </div>
                <img src={thumbnail} alt="Pod thumbnail" />
            </section>
            <section>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div>
                    <Listen />
                    <Save saved={saved} />
                </div>
            </section>
        </StyledPod>
    );
};

export default Pod;