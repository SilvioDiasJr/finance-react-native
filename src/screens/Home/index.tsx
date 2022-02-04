import React, { useState } from 'react'
import { Alert } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { handleCoinsRequests } from '@services/handleCoinsRequests'

import theme from '@global/styles/theme'

import { CardCurrencyQuote } from '@components/CardCurrencyQuote'
import { LogoHeader } from '@components/LogoHeader'
import { SelectCurrency } from '@components/SelectCurrency'

import { Container, Content, Icon, Notification, Wrapper } from './styles'

interface ICoinData {
  id: string
  name: string
  symbol: string
  changePercent24Hr: string
  vwap24Hr: string
  priceMax: string
  priceMin: string
  quote: number[]
}

export const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [currency, setCurrency] = useState<ICoinData[]>([])
  const [resetSelect, setResetSelect] = useState<boolean>(false)
  const [coinSelectedID, setCoinSelectedID] = useState<string>()

  async function handleCoin(value: string | undefined) {
    const exist = currency.find(item => item.id === value)

    if (exist) {
      Alert.alert('Cotação da moeda já está sendo exibida.')
    } else {
      setLoading(true)
      handleCoinsRequests(value)
        .then(event => {
          const priceMin = event[2].reduce((a, b) => {
            if (b.priceUsd < a.priceUsd) a = b
            return a
          })

          const priceMax = event[2].reduce((a, b) => {
            if (b.priceUsd > a.priceUsd) a = b
            return a
          })

          const arrayQuote = event[1].map(item => {
            return Number(item.priceUsd)
          })

          setResetSelect(true)
          setCoinSelectedID(undefined)
          setCurrency([
            {
              id: event[0].id,
              name: event[0].name,
              symbol: event[0].symbol,
              changePercent24Hr: Number(event[0].changePercent24Hr).toFixed(2),
              vwap24Hr: Number(event[0].priceUsd).toFixed(2),
              priceMin: Number(priceMin.priceUsd).toFixed(2),
              priceMax: Number(priceMax.priceUsd).toFixed(2),
              quote: arrayQuote
            },
            ...currency
          ])
        })
        .catch(error => {
          if (error.response.status === 429) {
            Alert.alert(
              'Erro de comunicação',
              'Limite de requisição excedido no momento!',
              [
                { text: 'Cancelar' },
                {
                  text: 'Tentar novamente!',
                  onPress: () => handleCoin(coinSelectedID),
                  style: 'default'
                }
              ]
            )
          }
        })
        .finally(() => {
          setLoading(false)
          setResetSelect(false)
        })
    }
  }

  function handleDeleteQuote(value: string | undefined) {
    setCurrency(currency.filter(item => item.id !== value))
  }

  return (
    <Container>
      <StatusBar style="light" backgroundColor={theme.colors.main} />
      <LogoHeader />

      <Wrapper>
        <SelectCurrency
          loading={loading}
          resetSelect={resetSelect}
          onCoinSelected={event => {
            // eslint-disable-next-line no-sequences
            handleCoin(event), setCoinSelectedID(event)
          }}
        />
        <Content>
          {currency.length > 0 ? (
            currency.map(item => (
              <CardCurrencyQuote
                key={item.id}
                data={item}
                onDelete={event => handleDeleteQuote(event)}
              />
            ))
          ) : (
            <Notification>
              Selecione uma moeda acima e pressione o botão <Icon name="plus" />{' '}
              para adicionar uma nova cotação.
            </Notification>
          )}
        </Content>
      </Wrapper>
    </Container>
  )
}
