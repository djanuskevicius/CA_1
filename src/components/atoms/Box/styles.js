import styled from 'styled-components';

export const StyledBox = styled.div`
  max-width: ${(props) => (props.fullWidth ? '100%' : '800px')};
  margin: 10px;
  padding: 1.25rem;
  background-color: ${(props) => props.theme.palette.light.main};
  border-radius: 6px;
  box-shadow: ${(props) => `0 0.5em 1em -0.125em ${props.theme.palette.default.main}, 0 0 1px ${props.theme.palette.default.main} `};
`;
