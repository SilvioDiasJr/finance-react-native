import { api } from './api'

interface IRequestCoinData {
  data: {
    id: string
    name: string
    symbol: string
    changePercent24Hr: string
    priceUsd: string
  }
}

interface IRequestCurrencyQuote {
  data: {
    priceUsd: string
    date: string
  }[]
}

export function handleCoinsRequests(id: string | undefined) {
  async function getCoinData() {
    const response = await api.get<IRequestCoinData>(`/assets/${id}`)

    return response.data.data
  }

  async function getCurrencyQuote() {
    const response = await api.get<IRequestCurrencyQuote>(
      `/assets/${id}/history?interval=h1`
    )

    return response.data.data
  }

  async function getCurrencyPriceMaxMin24hr() {
    const response = await api.get<IRequestCurrencyQuote>(
      `/assets/${id}/history?interval=d1`
    )

    return response.data.data
  }

  return Promise.all([
    getCoinData(),
    getCurrencyQuote(),
    getCurrencyPriceMaxMin24hr()
  ])
}
