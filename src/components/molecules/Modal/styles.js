import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: ${(props) => props.theme.palette.overlay.main};
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  
`;

export const StyledCloseButtonContainer = styled.div`
  position: fixed;
  top: 2em;
  right: 2em;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5em;
    height: 1.5em;

    font-size: 1.2em;
    color: ${(props) => props.theme.palette.light.main};

    border-radius: 100%;

    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.palette.overlay.dark};
    }
  }
`;

export const StyledModal = styled.div`
  max-width: 800px;
  
  padding: 1em;
  border-radius: 0.375em;
  background-color: none;

  @media screen and (max-width: 400px) {
    display: none;
    
  }
`;
