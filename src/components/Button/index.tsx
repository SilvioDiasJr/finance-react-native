import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'

import theme from '@global/styles/theme'

import IconPlus from '@assets/icon-plus.svg'

import { Container } from './styles'

interface Props extends TouchableOpacityProps {
  loading: boolean
}

export const Button: React.FC<Props> = ({ loading, ...rest }) => {
  return (
    <Container disabled={loading} {...rest}>
      {loading ? (
        <ActivityIndicator color={theme.colors.white} size="small" />
      ) : (
        <IconPlus />
      )}
    </Container>
  )
}
