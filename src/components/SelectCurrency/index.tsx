import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Modal } from 'react-native'

import theme from '@global/styles/theme'

import { api } from '@services/api'

import { Button } from '@components/Button'

import {
  Container,
  Icon,
  ListContainer,
  ModalContainer,
  Options,
  Select,
  SelectList,
  SelectOptions,
  Title
} from './styles'

interface IOptionsCoins {
  id: string
  symbol: string
  name: string
}

interface IRequestCoins {
  data: {
    id: string
    symbol: string
    name: string
  }[]
}

interface Props {
  onCoinSelected(value: string | undefined): void
  loading: boolean
  resetSelect: boolean
}

export const SelectCurrency: React.FC<Props> = ({
  loading,
  onCoinSelected,
  resetSelect
}) => {
  const [selected, setSelected] = useState<IOptionsCoins>()
  const [isOptionsVisible, setOptionsVisible] = useState<boolean>(false)
  const [optionsList, setOptionsList] = useState<IOptionsCoins[]>([])

  const [loadingSelect, setLoadingSelect] = useState<boolean>(false)

  async function getCoinsOptions() {
    if (optionsList.length > 0) {
      setOptionsVisible(true)
    } else {
      try {
        setLoadingSelect(true)

        const response = await api.get<IRequestCoins>('/assets')
        setOptionsList(response.data.data)

        setOptionsVisible(true)
      } catch (error: any) {
        if (error.response.status === 429) {
          Alert.alert(
            'Erro de comunicação',
            'Limite de requisição excedido no momento!',
            [
              { text: 'Cancelar' },
              {
                text: 'Tentar novamente!',
                onPress: getCoinsOptions,
                style: 'destructive'
              }
            ]
          )
        }
      } finally {
        setLoadingSelect(false)
      }
    }
  }

  function handleSelectedOptions(value: IOptionsCoins) {
    setSelected(value)
    setOptionsVisible(false)
  }

  useEffect(() => {
    setSelected(undefined)
  }, [resetSelect])

  return (
    <Container>
      <Select onPress={getCoinsOptions}>
        <Title>{selected?.name || 'Selecione uma moeda'}</Title>

        {loadingSelect ? (
          <ActivityIndicator color={theme.colors.icon} size="small" />
        ) : (
          <Icon name="chevron-down" />
        )}
      </Select>

      <Modal visible={isOptionsVisible} animationType="fade" transparent>
        <ModalContainer>
          <ListContainer>
            {isOptionsVisible && (
              <SelectList>
                {optionsList.map(item => (
                  <SelectOptions
                    key={item.id}
                    onPress={() => handleSelectedOptions(item)}
                  >
                    <Options>
                      {item.name} - {item.symbol}
                    </Options>
                  </SelectOptions>
                ))}
              </SelectList>
            )}
          </ListContainer>
        </ModalContainer>
      </Modal>

      <Button
        disabled={!selected}
        loading={loading}
        onPress={() => onCoinSelected(selected?.id)}
      />
    </Container>
  )
}
