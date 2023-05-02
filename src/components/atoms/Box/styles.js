import styled from "styled-components";

export const StyledBox = styled.div`
  max-width: ${(props) => (props.fullWidth ? "100%" : "800px")};
  margin: 10px;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.palette.purple.semiDark};
  border-radius: 6px;
`;
