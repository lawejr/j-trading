import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LineChart } from 'react-chartkick'

import { selectOffset, selectCurrency } from '../../actions/currency'
import {
  getOffset,
  getSelectedCurrency,
  getBtc,
  getEth,
  getIsloading
} from '../../reducers/currency'
import Spinner from '../Spinner'
import PageLayout from '../PageLayout'
import './TradePage.css'

export class TradePage extends PureComponent {
  componentDidMount () {
    const {
      selectCurrency,
      selectedCurrency,
      match: { params: { type } }
    } = this.props

    if (type && selectedCurrency !== type) {
      selectCurrency(type)
    }
  }

  componentWillReceiveProps (nextProps) {
    const { selectCurrency, match: { params: { type } } } = this.props
    const newType = nextProps.match.params.type

    if (type !== newType) {
      selectCurrency(newType)
    }
  }

  handleChangeCheckbox = e => {
    this.props.selectOffset(e.target.value)
  }

  renderOffsets = selectedOffset => {
    const offsets = {
      '2h': '2ч',
      '4h': '4ч',
      '8h': '8ч',
      '1d': '1д',
      '7d': '7д'
    }

    return Object.keys(offsets).map(key => [
      <input
        type="radio"
        name="offset"
        id={'offset' + key}
        className="offset-filter-input"
        value={key}
        checked={selectedOffset === key}
        onChange={this.handleChangeCheckbox}
        key={'input' + key}
      />,
      <label
        htmlFor={'offset' + key}
        className="offset-filter"
        key={'label' + key}
      >
        {offsets[key]}
      </label>
    ])
  }

  render () {
    const { selectedCurrency, offset, btcData, ethData } = this.props
    const stateData = {
      btc: btcData,
      eth: ethData
    }
    const chartData = [
      { name: 'Покупка', data: {} },
      { name: 'Продажа', data: {} }
    ]
    let chartMin
    let chartMax

    stateData[selectedCurrency].forEach(point => {
      chartData[0].data[new Date(point.mts)] = point.purchase
      chartData[1].data[new Date(point.mts)] = point.sell

      if (!chartMin || chartMin > point.purchase) chartMin = point.purchase
      if (!chartMax || chartMax < point.sell) chartMax = point.sell
    })

    return (
      <PageLayout>
        <main className="TradePage">
          <section className="chart">
            <h2 className="section-title">Окно графика</h2>
            <div className="chart-wrapper">
              <section className="filters">
                {this.renderOffsets(offset)}
              </section>
              {this.props.isLoading ? (
                <Spinner />
              ) : (
                <LineChart
                  data={chartData}
                  min={chartMin}
                  max={chartMax}
                  width={720}
                  height={290}
                />
              )}
            </div>
          </section>
        </main>
      </PageLayout>
    )
  }
}

const masStateToProps = state => ({
  offset: getOffset(state),
  selectedCurrency: getSelectedCurrency(state),
  btcData: getBtc(state),
  ethData: getEth(state),
  isLoading: getIsloading(state)
})

const mapDispatchToProps = {
  selectOffset,
  selectCurrency
}

export default connect(masStateToProps, mapDispatchToProps)(TradePage)
