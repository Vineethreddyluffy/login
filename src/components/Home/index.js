import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="cont">
        <Header />
        <div className="home-inner">
          <div className="first-side">
            <h1 className="main-head">Clothes That Get YOU Noticed</h1>
            <p className="main-para">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time.Clothes have always been a marker of the
              era and we are in the revolution.Your fashion make you been seen
              and heard that way you are.So celebrate the seasons new and
              exciting fashion in your own way
            </p>
            <button type="button" className="shop-btn">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default Home
