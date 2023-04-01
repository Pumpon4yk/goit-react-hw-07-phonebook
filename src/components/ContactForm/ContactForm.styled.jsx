import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 40px;
  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: #fff;
  text-shadow: 0px -3px 1px rgba(0, 0, 0, 0.31);
`;

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 5px;
  background: rgb(34,137,195);
background: linear-gradient(0deg, rgba(34,137,195,0.5074404761904762) 0%, rgba(45,210,253,0) 100%);
  transition: border-color 0.2s;
  
`;

export const Button = styled.button`
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;

export const Messege = styled.span`
  color: red;
  font-size: 10px;
  text-shadow: none;
`;
