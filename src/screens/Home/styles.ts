import styled from 'styled-components/native'

import {
  getBottomSpace,
  getStatusBarHeight
} from 'react-native-iphone-x-helper'

import { Feather } from '@expo/vector-icons'

export const Container = styled.SafeAreaView`
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${getBottomSpace()}px;

  width: 100%;
  height: 100%;

  flex: 1;
  align-items: center;

  position: relative;
`

export const Wrapper = styled.View`
  width: 92%;
  height: 100%;
`

export const Content = styled.ScrollView`
  width: 100%;
  height: 100%;

  margin-bottom: 120px;
`

export const Notification = styled.Text`
  max-width: 300px;
  margin: 0 auto;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.notification};

  text-align: center;
`

export const Icon = styled(Feather)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.notification};
`
