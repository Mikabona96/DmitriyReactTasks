// Core
import styled from 'styled-components';

export const Container = styled.section`
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;
export const LinkWrapper = styled.div`
    display: flex;
    width: 1400px;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    a {
        text-decoration: none;
        color: blue;
    }
`;
export const TaskWrapper = styled.div`
    position: absolute;
    display: flex;
    width: 900px;
    flex-direction: column;
    top: 50%;
    transform: translateY(-50%);
    a {
        text-decoration: none;
        color: blue;
    }
`;
export const ContentWrapper = styled.div`
width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
`;
export const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 400px;
    /* position: absolute;
    top: 50%;
    transform: translateY(-50%); */
`;
export const Output = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Response = styled.div`
width: 400px;
    display: flex;
    flex-direction: column;
`;

