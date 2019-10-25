import React from 'react'

class App extends React.Component {
  // 生命周期方法  掛載 - 1
  constructor() {
    super()
    this.state = {
      hasData: false,
      data: '',
    }
  }

  // 生命周期方法  掛載 - 3
  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: '資料來了', hasData: true })
    }, 5000)
  }

  // 生命周期方法  掛載 - 2
  render() {
    if (!this.state.hasData) return <>資料載入中</>

    return (
      <>
        <h1>{this.state.data}</h1>
      </>
    )
  }
}

export default App
