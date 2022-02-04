import styled, { css } from 'styled-components/native'

interface ButtonSelectProps {
  selected: boolean
}

export const Container = styled.View`
  width: 100%;
  height: 37px;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin-bottom: 13px;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.card_secondary};
`

export const ButtonSelect = styled.TouchableOpacity<ButtonSelectProps>`
  width: 87px;
  height: 31px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background-color: transparent;

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.button_selected};
    `}
`

export const Title = styled.Text<ButtonSelectProps>`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.button_selected};

  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`
