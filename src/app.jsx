import Table from 'components/table';

function clickName(event) {
  console.log(event.nativeEvent.target);
}

ReactDOM.render(
  <Table
    cols={[
      {
        label: 'Name',
        format: (data) => {
          return (
            <span className='pseudo-link' onClick={clickName}>
              {data.name}
            </span>
          );
        }
      }, {
        label: 'Price',
        format: (data) => {
          return `€ ${data.price}`;
        }
      }, {
        label: 'Year',
        format: 'year',
        sorter: {
          name: 'year',
          ordering: ['asc', 'desc'],
          ordered: 'asc',
          change: (props, state) => {
            console.log(props, state);
          }
        }
      }]}
    rows={[
      {name: 'BMW', price: 30000, year: 2001},
      {name: 'Mercedes', price: 40000, year: 1999},
      {name: 'Audi', price: 20000, year: 2009},
      {name: 'Acura', price: 55000, year: 2012},
      {name: 'Infinity', price: 100000, year: 2016},
      {name: 'Jeep', price: 20500, year: 2015}
    ]}
  />, document.getElementById('table')
);
