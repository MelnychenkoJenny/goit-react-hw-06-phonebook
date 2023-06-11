import styled from 'styled-components';

export const InputGroup = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Label = styled.label`
  text-align: center;
  font-size: 16px;
  margin-bottom: 5px;
  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const Input = styled.input`
  margin: 0 auto;
  width: 250px;
  padding: 5px 10px;
  outline: none;
  border: 2px solid ${({ theme: { colors } }) => colors.border};
  background-color: transparent;
  border-radius: 20px;
  color: ${({ theme: { colors } }) => colors.text};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 0 0 5px ${({ theme: { colors } }) => colors.border};
  }
  :focus {
    box-shadow: inset 0 0 10px ${({ theme: { colors } }) => colors.inputShadow};
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
    padding: 5px 15px;
    font-size: 18px;
  }
`;
