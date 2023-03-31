import styled from 'styled-components';

export const List = styled.ul`
display: flex;
justify-content:center;
align-items: center;
flex-wrap: wrap;
gap: 10px;

list-style: none;
margin: 0;
padding: 0;
`;

export const Item = styled.li`
    width: calc((100% - 130px) / 5);
    margin-bottom: 10px;
    padding: 12px 0;

    box-shadow: 0px 2px 3px 0px rgba(7,68,161,0.57);
-webkit-box-shadow: 0px 2px 3px 0px rgba(7,68,161,0.57);
-moz-box-shadow: 0px 2px 3px 0px rgba(7,68,161,0.57);
`;