import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.min.css';
import React from 'react';
import Languages from './language';
import {FormControl} from 'react-bootstrap';
import Select from 'react-select';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lang:'EN'
    }
    this.onSelect = this.onSelect.bind(this);
    this.onSelect2 = this.onSelect2.bind(this);
  }

  onSelect(event) {
    this.setState({
      lang:event.target.value
    });
  }

  onSelect2(language) {
    this.setState({
      lang:language.code
    });
  }

  render() {
    return (
      <div>
        <h1>React Select2 for languages</h1>
        <Select value={this.state.lang} onChange={this.onSelect2} placeholder="select"
           options={Languages} labelKey="value" valueKey="code">
        </Select>
      </div>
    )
  }
}
