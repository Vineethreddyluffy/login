import './index.css'

const Header = () => (
  <div className="head-cont">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="web-logo"
    />
    <ul className="text-cont">
      <li className="head-para">Home</li>
      <li className="head-para">Products</li>
      <li className="head-para">Cart</li>
      <button type="button" className="button">
        Login
      </button>
    </ul>
  </div>
)

export default Header
