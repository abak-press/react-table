export default class TD extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <td>
        {this.props.children}
      </td>
    );
  }
}