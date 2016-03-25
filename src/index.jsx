import Table from 'table';

ReactDOM.render(
  <Table
    cols={['Name', 'Price']}
    rows={[{name: 'BMW', price: 1000}, {name: 'Mercedes', price: 2000}]}
  />, document.getElementById('table')
);
