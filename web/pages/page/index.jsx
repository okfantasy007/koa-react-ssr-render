import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from 'action/count';
import axios from 'axios';
import './index.less';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      test1: '我是测试'
    }
  }

  onClick() {
    this.props.computedAdd();
  }

  componentWillMount() {

    // axios('http://127.0.0.1:3000/test').then((json) => {
    //   return json.data;
    // }).then((res) => {
    //   console.log(res.data);
    //   this.props.setValue(res.data);
    // })
  }

  render() {
    console.log(this.props.counter);
    return <div className='title-name'>
      <h1>
        {this.props.counter}
        {
          this.props.test
        }
      </h1>

      <h2>{this.state.test1}</h2>
      <button onClick={this.onClick.bind(this)}>点我加1</button>
    </div>
  }
}

Counter.serverFetch = CounterActions.fetchTestData;
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    value: state.value,
    test: state.test
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
