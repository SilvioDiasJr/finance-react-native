import styled, { css } from 'styled-components/native'

import { Feather } from '@expo/vector-icons'

interface PositionProps {
  type: string
}

export const Container = styled.View`
  width: 100%;
  height: 370px;

  margin-bottom: 24px;
  padding: 24px 33px 20px;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.card_primary};
`

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`

export const Header = styled.View`
  width: 100%;
  height: auto;

  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`

export const Strong = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
`

export const IconClose = styled(Feather)`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.icon};
`

export const PriceInfo = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin-bottom: 12px;
`

export const Price = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`

export const IconPosition = styled.View<PositionProps>`
  width: 12px;
  height: 12px;
  border-radius: 99px;

  align-items: center;
  justify-content: center;

  margin-left: 10px;

  ${({ type }) =>
    type === 'positive' &&
    css`
      background-color: ${({ theme }) => theme.colors.success};
    `}

  ${({ type }) =>
    type === 'negative' &&
    css`
      background-color: ${({ theme }) => theme.colors.alert};
    `}
`

export const IconChevron = styled(Feather)`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`

export const Position = styled.Text<PositionProps>`
  font-size: 12px;
  font-weight: 700;

  ${({ type }) =>
    type === 'positive' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${({ type }) =>
    type === 'negative' &&
    css`
      color: ${({ theme }) => theme.colors.alert};
    `}

  margin-left: 3px;
`

export const Graphic = styled.View`
  width: 100%;
  height: 145px;

  align-items: center;
  justify-content: center;

  border-radius: 14px;

  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.colors.card_secondary};
`

export const Footer = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const PriceInfoMaxMin = styled.View``

export const PriceTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
`

export const PriceMaxMin = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.black};
`
