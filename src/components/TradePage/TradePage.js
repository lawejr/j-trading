import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LineChart } from 'react-chartkick'

import { selectOffset } from '../../actions/currency'
import { getOffset } from '../../reducers/currency'
import PageLayout from '../PageLayout'
import './TradePage.css'

export class TradePage extends PureComponent {
  handleChangeCheckbox = e => {
    this.props.selectOffset(e.target.value)
  }

  render () {
    const { offset } = this.props

    return (
      <PageLayout>
        <main className="TradePage">
          <section className="chart">
            <h2 className="section-title">Окно графика</h2>
            <div className="chart-wrapper">
              <section className="filters">
                <input
                  type="radio"
                  name="offset"
                  id="offset1h"
                  className="offset-filter-input"
                  value="1h"
                  checked={offset === '1h'}
                  onChange={this.handleChangeCheckbox}
                />
                <label htmlFor="offset1h" className="offset-filter">
                  1ч
                </label>
                <input
                  type="radio"
                  name="offset"
                  id="offset2h"
                  className="offset-filter-input"
                  value="2h"
                  checked={offset === '2h'}
                  onChange={this.handleChangeCheckbox}
                />
                <label htmlFor="offset2h" className="offset-filter">
                  2ч
                </label>
                <input
                  type="radio"
                  name="offset"
                  id="offset3h"
                  className="offset-filter-input"
                  value="3h"
                  checked={offset === '3h'}
                  onChange={this.handleChangeCheckbox}
                />
                <label htmlFor="offset3h" className="offset-filter">
                  3ч
                </label>
                <input
                  type="radio"
                  name="offset"
                  id="offset4h"
                  className="offset-filter-input"
                  value="4h"
                  checked={offset === '4h'}
                  onChange={this.handleChangeCheckbox}
                />
                <label htmlFor="offset4h" className="offset-filter">
                  4ч
                </label>
                <input
                  type="radio"
                  name="offset"
                  id="offset5h"
                  className="offset-filter-input"
                  value="5h"
                  checked={offset === '5h'}
                  onChange={this.handleChangeCheckbox}
                />
                <label htmlFor="offset5h" className="offset-filter">
                  5ч
                </label>
              </section>
              <LineChart
                data={{ '2017-05-13': 2, '2017-05-14': 5 }}
                min={0}
                max={10}
                width={720}
                height={290}
              />
            </div>
          </section>
        </main>
      </PageLayout>
    )
  }
}

const masStateToProps = state => ({
  offset: getOffset(state)
})

const mapDispatchToProps = {
  selectOffset
}

export default connect(masStateToProps, mapDispatchToProps)(TradePage)
