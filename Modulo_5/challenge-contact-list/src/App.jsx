import React from 'react';

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import sortBy from './utils/sortBy';
import searchBy from './utils/searchBy';

import './App.scss';

class App extends React.Component {
  state = {
    originalContacts: [],
    contacts: [],
    sortBy: 'name',
    search: '',
  };

  async componentDidMount() {
    const { sortBy: sort } = this.state;

    const response = await fetch(
      'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts'
    );

    const contacts = await response.json();

    this.setState({
      originalContacts: contacts,
      contacts: sortBy(contacts, sort),
    });
  }

  handleChangeSort(sort) {
    const { originalContacts } = this.state;

    const contactsSorted = sortBy(originalContacts, sort);

    this.setState({ sortBy: sort, contacts: contactsSorted });
  }

  handleChangeSearch(search) {
    const { originalContacts } = this.state;

    this.setState({ search, contacts: searchBy(originalContacts, search) });
  }

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        <Topbar />
        <Filters
          onSort={this.handleChangeSort.bind(this)}
          onSearch={this.handleChangeSearch.bind(this)}
        />
        <Contacts contacts={contacts} />
      </React.Fragment>
    );
  }
}

export default App;
