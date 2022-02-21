import styled from 'styled-components';

export const PeopleSection = styled.section`
    position: relative;
`;
export const PeoplePopup = styled.div`
    position: absolute;
    top: 0;
    right: 50px;
`;

export const PersonDetails = styled.div`
display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid #444;
`;

export const PersonImage = styled.img`
 width: 30%;
  height: 30%;
  border-radius: 10px;
`;
export const ListGroup = styled.li`
padding: .25rem;
`;

export const ListJSX = styled.div`
width: 200px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
    }
`;
