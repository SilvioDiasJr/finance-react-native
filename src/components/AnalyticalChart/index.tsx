import React, { useState } from 'react'

import { LineChart } from 'react-native-chart-kit'

import theme from '@global/styles/theme'

import { Container } from './styles'

interface IGraphicViewProps {
  width: number
  height: number
}

interface Props {
  quote: number[]
  positionType: 'positive' | 'negative'
}

export const AnalyticalChart: React.FC<Props> = ({ quote, positionType }) => {
  const [graphicView, setGraphicView] = useState<IGraphicViewProps>({
    width: 0,
    height: 0
  })

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: () =>
      // eslint-disable-next-line prettier/prettier
      `${positionType === 'positive' ? theme.colors.success : theme.colors.alert
      }`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    decimalPlaces: 2,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    withDots: false
  }

  return (
    <Container onLayout={event => setGraphicView(event.nativeEvent.layout)}>
      <LineChart
        width={graphicView.width - 20}
        height={graphicView.height}
        data={{
          labels: [],
          datasets: [
            {
              data: quote
            }
          ]
        }}
        chartConfig={chartConfig}
        bezier
        withDots={false}
        withInnerLines={false}
        yAxisInterval={1}
      />
    </Container>
  )
}
