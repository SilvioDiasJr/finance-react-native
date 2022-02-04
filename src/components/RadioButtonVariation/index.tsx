import React, { useState } from 'react'

import { ButtonSelect, Container, Title } from './styles'

type IntervalType = 'm1' | 'h1' | 'd1'

interface Props {
  onSelected(value: string): void
  loading: boolean
}

export const RadioButtonVariation: React.FC<Props> = ({
  loading,
  onSelected
}) => {
  const [type, setType] = useState<IntervalType>('h1')

  function handleSelected(value: IntervalType) {
    setType(value)
    onSelected(value)
  }
  return (
    <Container>
      <ButtonSelect
        disabled={loading}
        selected={type === 'm1'}
        onPress={() => handleSelected('m1')}
      >
        <Title selected={type === 'm1'}>1m</Title>
      </ButtonSelect>

      <ButtonSelect
        disabled={loading}
        selected={type === 'h1'}
        onPress={() => handleSelected('h1')}
      >
        <Title selected={type === 'h1'}>1h</Title>
      </ButtonSelect>

      <ButtonSelect
        disabled={loading}
        selected={type === 'd1'}
        onPress={() => handleSelected('d1')}
      >
        <Title selected={type === 'd1'}>1d</Title>
      </ButtonSelect>
    </Container>
  )
}
