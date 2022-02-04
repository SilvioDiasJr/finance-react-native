import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 55px;
  height: 55px;

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.main};
`
