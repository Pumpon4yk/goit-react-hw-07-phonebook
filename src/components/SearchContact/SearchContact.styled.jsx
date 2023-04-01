import styled from 'styled-components';


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: #fff;
  text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.31);
  margin: 0 auto;
`


export const Input = styled.input`
  font-family: inherit;
  width: 270px;
  margin: 20px auto;
  margin-bottom:50px;

  border: 0;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 2px 5px;
  background: rgb(34,137,195);
background: linear-gradient(0deg, rgba(34,137,195,0.5074404761904762) 0%, rgba(45,210,253,0) 100%);
  transition: border-color 0.2s;
`;
