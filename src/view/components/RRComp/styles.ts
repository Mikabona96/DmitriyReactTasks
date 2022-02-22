// Core
import styled from 'styled-components';

export const Container = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
    margin: 0 auto;
`;
export const Wrapper = styled.div`
        display: flex;
`;
export const Link = styled.div`
        display: flex;
        border: 1px solid red;
        padding: 40px 20px;
        width: 33.3%;
        height: 200px;
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        transition: .5s;
        cursor: pointer;
        &:hover {
            z-index: 100;
            transform: scale(1.2);
        }
`;
export const Link2 = styled.div`
        display: flex;
        border: 1px solid red;
        padding: 40px 20px;
        width: 50%;
        height: 200px;
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        transition: .5s;
        cursor: pointer;
        &:hover {
            z-index: 100;
            transform: scale(1.2);
        }
`;

