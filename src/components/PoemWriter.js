import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      poem: event.target.value
    })
    this.poemChecker()
  }


  poemChecker = () => {
    var lines = this.state.poem.split(/\r*\n/)
    if(lines.length !== 3) {
      return false
    } else if (lines[0].trim().split(' ').length !== 5){
      return false
    } else if (lines[1].trim().split(' ').length !== 3) {
      return false
    } else if (lines[2].trim().split(' ').length !== 5) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange}
          rows="3"
          cols="60"
        />
        {this.poemChecker() ? null : <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
           This poem is not written in the right structure!
        </div> }
      </div>
    );
  }
}

export default PoemWriter;
