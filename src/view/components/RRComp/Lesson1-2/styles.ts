import styled from 'styled-components';

export const ArticleStyled = styled.section`
width: 330px;
height: 530px;
margin-right: 30px;
border-radius: 10px;
box-shadow: 2px 2px 7px 0 rgba(0,0,0,0.5);

&:last-child {
margin-right: 0;
}

header {
position: relative;
background: red;
height: 280px;
border-top-left-radius: inherit;
border-top-right-radius: inherit;

.poster {
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    height: 100%;
  }
}

.tags {
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 35px;

  div {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
}

& .buttons {
  position: relative;
  top: 160px;
  left: 30px;

  & .button{
    display: inline-block;
    margin-right: 10px;
  }
}
}

article {
padding: 35px 34px 15px;

h1 {
  margin-top: 0;
  margin-bottom: 15px;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: bold;
}

p {
  font-family: Helvetica;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
}
}

footer {
display: flex;
justify-content: space-between;
border-top-color: lightgray;
border-top-width: 1px;
border-top-style: solid;
padding: 16px 34px 0;
font-family: Helvetica;
font-size: 14px;
color: rgba(0, 0, 0, 0.6);

.controls {
  display: flex;
  width: 136px;
  justify-content: space-between;
}
}
`;


// Accordion

export const AccordionStyled = styled.section`
  .accordion {
  font-family: Verdana;
  width: 800px;

  h1 {
    text-transform: capitalize;
    margin-bottom: 30px;
    text-align: center;
  }

  &-question {
    position: relative;
    padding: 15px 30px;
    background: #F1F4FB;
    font-size: 16px;
    color: rgba(0,0,0,0.6);
    line-height: 24px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 22px;
    transition: color 0.3s;

    &::after {
      content: '+';
      position: absolute;
      right: 30px;
    }
  }

  &-answer {
    padding: 0 30px;
    margin: 0 0 22px;
    font-size: 16px;
    color: #000;
    display: none;
  }

  &-item {
    margin-bottom: 10px;

    &:hover {
      .accordion-question {
        color: #000;
      }
    }

    &.selected {
      .accordion-question {
        cursor: initial;
        color: #4886FF;

        &::after {
          content: '-';
        }
      }

      .accordion-answer {
        display: inline-block;
      }
    }
  }
}
`;
