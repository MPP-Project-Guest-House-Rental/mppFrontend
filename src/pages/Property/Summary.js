import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Summary() {
  return (
<>
<div className='row'>
  <div className='col-md-12'>
  <ul class="list-group list-group-light">
    <h4>Property Information</h4>
  <li class="list-group-item">title</li>
  <li class="list-group-item">Type</li>
  <li class="list-group-item">Bed Room Number</li>
  <li class="list-group-item">Bed Number</li>
  <li class="list-group-item">Bath Room Number</li>
  <li class="list-group-item">Property Description</li>
  <li class="list-group-item">Space</li>
  <li class="list-group-item">Capacity</li>
</ul>
  </div>
  <div className='col-md-12'>
  <ul class="list-group list-group-light">
  <h4>Adress Information</h4>
  <li class="list-group-item">Country</li>
  <li class="list-group-item">State</li>
  <li class="list-group-item">City</li>
  <li class="list-group-item">Street Number</li>
  <li class="list-group-item">Zip Code</li>
  <li class="list-group-item">Lon</li>
  <li class="list-group-item">Lat</li>
</ul>
  </div>
</div>
</>
  );
}