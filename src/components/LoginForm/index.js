import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', status: null}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const newData = {
      errorMsg: data.error_msg,
    }
    console.log(data)
    if (response.ok) {
      this.onSuccess()
    } else {
      this.setState({status: newData.errorMsg, username: '', password: ''})
    }
  }

  render() {
    const {status, username, password} = this.state
    return (
      <div className="full-cont">
        <div className="comp">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />
          <div className="inner-cont">
            <form className="form-item" onSubmit={this.submitForm}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="logo-img"
              />
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                className="input"
                onChange={this.onChangeUsername}
                value={username}
                placeholder="username"
              />
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="input"
                onChange={this.onChangePassword}
                value={password}
                placeholder="password"
              />
              <button type="submit" className="login-btn">
                login
              </button>
              <p className="err">{status}</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
