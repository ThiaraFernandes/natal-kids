import styled from 'styled-components';

export  const StyledTextarea = styled.textarea`
  background-color: #d1ccc2;
  font-family: 'Comic Sans MS', cursive;
  resize: none;
  cursor: text;
  caret-color: red; 
  color: #333;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px; 
  border: 1px solid #fa8c8c; 
  border-radius: 5px; 
  line-height: 1.8;
  padding: 10px 15px;

  /* Fundo com linhas horizontais */
  background-image: linear-gradient(
    to bottom,
    transparent 90%,
    #c4c4c4 50%
  );
  background-size: 100% 30px;

  &:focus {
    outline: none;
    cursor: text;
    background-color: #d1ccc2;
    border-color: #d62828;
    
  }

  &:hover {
    cursor: text; 
    
  }

  &::selection {
    outline: none;
    color: white; 
    background-color: #ffadad; 

}
`;

export const StyledButton = styled.button`
     background-Color: #008000;
     border-Radius: 20px;
     font-Size: 1.5rem;
     border: none;

     &:hover{
        background-color: #198754;
        box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
     }
`
