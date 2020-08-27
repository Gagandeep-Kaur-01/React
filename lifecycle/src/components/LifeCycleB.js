import React, {Component} from 'react';

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props)

    this.state= {
      name: 'Gagan'
    }
    console.log('Lifecycle_B constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle_B getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('Lifecycle_B componentDidMount')
  }

  shouldComponentUpdate(){
    console.log('Lifecycle_B shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecycle_B getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('Lifecycle_B componentDidUpdate')
  }
  
  render() {
    console.log('Lifecycle_B render')        
    return <div>LifeCycle_B </div>    
   
  }
  
}


