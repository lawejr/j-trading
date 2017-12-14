import React, { PureComponent } from 'react'
import { LineChart } from 'react-chartkick'

import PageLayout from '../PageLayout'
import './TradePage.css'

export default class TradePage extends PureComponent {
  render () {
    return (
      <PageLayout>
        <main className="TradePage">
          <h2 className="section-title">Окно графика</h2>
          <LineChart
            data={{ '2017-05-13': 2, '2017-05-14': 5 }}
            min={0}
            max={10}
            width={750}
            height={400}
          />
        </main>
      </PageLayout>
    )
  }
}
