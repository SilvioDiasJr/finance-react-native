import styled from 'styled-components/native'

import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  height: 55px;

  margin-bottom: 24px;

  flex-direction: row;
`

export const Select = styled.TouchableOpacity`
  flex: 1;
  height: 55px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 18px;
  margin-right: 12px;

  border-radius: 15px;

  background-color: ${({ theme }) => theme.colors.card_primary};
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.icon};
`

export const Icon = styled(Feather)`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.icon};
`

export const ModalContainer = styled.View`
  width: 100%;

  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);
`

export const SelectList = styled.ScrollView`
  width: 95%;
  height: 50%;

  background-color: ${({ theme }) => theme.colors.card_primary};
`

export const ListContainer = styled.View`
  width: 100%;
  height: 300px;

  align-items: center;
  justify-content: center;
`

export const SelectOptions = styled.TouchableOpacity`
  width: 100%;
  height: auto;

  padding: 8px 18px;
`

export const Options = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.icon};
`
