import React from 'react'

class Collapse extends React.Component  {

  constructor(props) {
    super();
    this.state= {
      showContent:false
    }
    
    this.showMore=this.showMore.bind(this)
 
  }

showMore=() => {
  this.setState({showContent:!this.state.showContent})
}

  render(){
    return (
      <div>
          <button className="btn btn-primary" onClick={this.showMore}>
            Link with href
          </button>

          {
            this.state.showContent ? (
              <div className="collapse show">
          
            test
        </div>
            ) : null
          }
        <div className="collapse show">
          
            {this.state.showContent}
        </div>
      </div>
    )
  }
}
export default Collapse;