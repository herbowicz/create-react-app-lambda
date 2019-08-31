import React, { Component } from "react"
import "./Demo.css"

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("chuck-norris")}>{loading ? "Loading..." : "Call Async Chuck Norris"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

export default Demo