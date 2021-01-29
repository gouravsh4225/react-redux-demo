import React, { Component } from "react"
import { getAllUsers, clearUsers } from "./Store/Actions/UserActions/UserActions"
import { connect } from "react-redux";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: []
    }
  }
  componentDidMount() {
    this.props.getAllUsers()
  }
  componentDidUpdate() {
    if (this.props.alluserResponse) {
      const response = this.props.alluserResponse;
      this.setState({ allData: response });
      this.props.clearUsers()
    }
  }

  render() {
    return (
      <div style={{ margin: "20px" }}>
        {this.state.allData.map((item) => (
          <div style={{ fontSize: "20px", marginBottom: "10px", borderBottom: "1px solid black" }}>{item.email}</div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  alluserResponse: state.UserReducer.alluserResponse
})

const mapDispatchToProps = {
  getAllUsers,
  clearUsers
}


export default connect(mapStateToProps, mapDispatchToProps)(App)