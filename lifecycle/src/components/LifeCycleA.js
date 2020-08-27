import React, {Component} from 'react';
import LifeCycleB from './LifeCycleB';

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state= {
      name: 'Gagan'
    }
    console.log('Lifecycle_A constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle_A getDerivedStateFromProps');
    return null
  }

  componentDidMount() {
    console.log('LifeCycle_A componentDidMount')
  }

  shouldComponentUpdate(){
    console.log('Lifecycle_A shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecycle_A getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('Lifecycle_A componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'Gagandeep Kaur'
    })
  }
  
  render() {
    console.log('Lifecycle_A render')        
    return (
      <div>
        <div>LifeCycle_A </div> 
        <button onClick={this.changeState}> Change state</button>
        <LifeCycleB/>
      </div>
    ) 
  
  }
  
}


