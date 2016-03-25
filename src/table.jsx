import TBody from 'components/tbody'
import THead from 'components/thead'

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <THead cols={this.props.cols} />
        <TBody rows={this.props.rows} />
      </table>
    );
  }
}