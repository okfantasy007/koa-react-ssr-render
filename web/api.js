import axios from 'axios';

export function fetchTestData1() {
  // return fetch( "http://ergast.com/api/f1/2018/circuits.json" )
  //     .then( res => res.json( ) )
  //     .then( res => res.MRData.CircuitTable.Circuits );

  return axios('http://127.0.0.1:3000/test')
    .then((json) => {
      return json.data;
    })
    .then((res) => {
      console.log(res.data);
      return "api error"
    })
}
