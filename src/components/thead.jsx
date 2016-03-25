export default class THead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cols = [];
    this.props.cols.forEach((title, index) => {
      cols.push(<th key={index}>{title}</th>);
    });

    return (
      <thead>
        <tr>
          {cols}
        </tr>
      </thead>
    );
  }
}