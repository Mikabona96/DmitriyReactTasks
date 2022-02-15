// Core
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
`;
export const LinkWrapper = styled.div`
    display: flex;
    width: 900px;
    flex-direction: column;
    justify-content: space-between;
    a {
        text-decoration: none;
        color: blue;
    }
`;
// export const TaskWrapper = styled.div`
//     position: absolute;
//     display: flex;
//     width: 300px;
//     flex-direction: column;
//     justify-content: space-between;
//     top: 50%;
//     transform: translateY(-50%);
//     a {
//         text-decoration: none;
//         color: blue;
//     }
// `;
