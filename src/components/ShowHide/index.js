import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onFirstName = () => {
    const {firstName} = this.state
    this.setState(prevState => ({
      firstName: !prevState.firstName,
    }))
  }

  onLastName = () => {
    const {lastName} = this.state
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading"> Show/Hide</h1>
        <div className="card">
          <div className="inner-card">
            <button className="btn" onClick={this.onFirstName} type="button">
              Show/Hide Firstname
            </button>
            <div>{firstName && <p className="paragraph">Joe</p>}</div>
          </div>
          <div className="inner-card">
            <button className="btn" onClick={this.onLastName} type="button">
              Show/Hide Lastname
            </button>
            <div>{lastName && <p className="paragraph">Jonas</p>}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
