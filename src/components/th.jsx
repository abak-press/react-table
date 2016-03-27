export default class TH extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ordered: this.props.sorter ? this.props.sorter.ordered : ''
    };
  }

  clickSorter() {
    this.setState({
      ordered: this.state.ordered === 'asc' ? 'desc' : 'asc'
    });
    this.props.sorter.change && this.props.sorter.change(this.props, this.state);
  }

  render() {
    let content = () => {
      if (!this.props.sorter) {
        return this.props.children;
      } else {
        return (
          <span className={'pseudo-link sorter ' + this.state.ordered} onClick={this.clickSorter.bind(this)}>
            {this.props.children}
          </span>
        );
      }
    };

    return (
      <th>
        {content()}
      </th>
    );
  }
}