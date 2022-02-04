import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'

import theme from '@global/styles/theme'

import { api } from '@services/api'
import { RadioButtonVariation } from '@components/RadioButtonVariation'
import { AnalyticalChart } from '@components/AnalyticalChart'

import {
  Container,
  Footer,
  Graphic,
  Header,
  IconChevron,
  IconClose,
  IconPosition,
  Price,
  PriceInfo,
  PriceInfoMaxMin,
  PriceMaxMin,
  PriceTitle,
  Strong,
  Title,
  Position,
  Wrapper
} from './styles'

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

interface IPrice {
  priceMax: string
  priceMin: string
}

type VariationType = 'positive' | 'negative'

interface Props {
  data: ICoinData
  onDelete(value: string | undefined): void
}

export const CardCurrencyQuote: React.FC<Props> = ({ data, onDelete }) => {
  const [quote, setQuote] = useState<number[]>([0])
  const [price, setPrice] = useState<IPrice>()
  const [positionType, setPositionType] = useState<VariationType>('positive')
  const [test, setTest] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)

  async function handleQuote(value: string) {
    try {
      setQuote([0])
      setLoading(true)
      const response = await api.get(
        `/assets/${data.id}/history?interval=${value}`
      )

      const arrayQuote = response.data.data.map((item: any) => {
        return Number(item.priceUsd)
      })

      setQuote(arrayQuote)
    } catch (error: any) {
      if (error.response.status === 429) {
        Alert.alert(
          'Erro de comunicação',
          'Limite de requisição excedido no momento!',
          [
            { text: 'Cancelar' },
            {
              text: 'Tentar novamente!',
              onPress: () => handleQuote(test),
              style: 'default'
            }
          ]
        )
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setPrice({
      priceMin: data.priceMin,
      priceMax: data.priceMax
    })

    setQuote(data.quote)

    setPositionType(
      Number(data.changePercent24Hr) > 0 ? 'positive' : 'negative'
    )
  }, [])

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>
            {data.name} <Strong>({data.symbol})</Strong>
          </Title>
          <IconClose name="x" onPress={() => onDelete(data.id)} />
        </Header>

        <PriceInfo>
          <Price>$ {data.vwap24Hr}</Price>
          <IconPosition type={positionType}>
            <IconChevron
              name={positionType === 'positive' ? 'chevron-up' : 'chevron-down'}
            />
          </IconPosition>

          <Position type={positionType}>
            {String(data.changePercent24Hr).replace(/-/g, '')}%
          </Position>
        </PriceInfo>

        <Graphic>
          {quote.length > 0 && loading ? (
            <ActivityIndicator color={theme.colors.main} size="large" />
          ) : (
            <AnalyticalChart positionType={positionType} quote={quote} />
          )}
        </Graphic>

        <RadioButtonVariation
          loading={loading}
          onSelected={event => {
            // eslint-disable-next-line no-sequences
            handleQuote(event), setTest(event)
          }}
        />

        <Footer>
          <PriceInfoMaxMin>
            <PriceTitle>MÍN</PriceTitle>
            <PriceMaxMin>$ {price?.priceMin}</PriceMaxMin>
          </PriceInfoMaxMin>

          <PriceInfoMaxMin>
            <PriceTitle>MAX</PriceTitle>
            <PriceMaxMin>$ {price?.priceMax}</PriceMaxMin>
          </PriceInfoMaxMin>
        </Footer>
      </Wrapper>
    </Container>
  )
}
