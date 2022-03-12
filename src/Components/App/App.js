import './App.css';
import React from 'react';
import { NewEntry } from '../NewEntry/NewEntry';
import { CurrentEntries } from '../CurrentEntries/CurrentEntries';

export class App extends React.Component {
  render() {
    return (
      <div className='px-64 py-10'>
        <NewEntry />
        <CurrentEntries />
      </div>
    )
  }
}