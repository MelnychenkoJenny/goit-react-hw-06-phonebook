import styled, { keyframes } from 'styled-components';

const showUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContactsList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const ContactsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  flex-basis: calc((100% - 10px) / 3);
  background-color: ${({ theme: { colors } }) => colors.bgAlfaDark};
  border-radius: 15px;
  animation: ${showUp} 400ms ease-in-out;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 10px) / 7);
    background-color: ${({ theme: { colors } }) => colors.bgAlfa};
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const ButtonDelete = styled.button`
  margin: 10px auto 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: ${({ theme: { colors } }) => colors.bgAlfa};
  border: 1px solid ${({ theme: { colors } }) => colors.buttonShadow};
  border-radius: 35px;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.text};
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 5px 2px
      ${({ theme: { colors } }) => colors.buttonShadowHover};
  }

  @media screen and (min-width: 1200px) {
    padding: 5px 15px;
    font-size: 16px;
  }
`;
