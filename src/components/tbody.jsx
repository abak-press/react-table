export default class TBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rows = [];
    this.props.rows.forEach((row, index) => {
      rows.push(
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.price}</td>
        </tr>
      );
    });

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
}