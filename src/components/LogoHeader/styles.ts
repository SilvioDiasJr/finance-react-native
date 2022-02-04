import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 95px;

  align-items: center;
  justify-content: center;

  margin-bottom: 24px;

  background-color: ${({ theme }) => theme.colors.main};
`
