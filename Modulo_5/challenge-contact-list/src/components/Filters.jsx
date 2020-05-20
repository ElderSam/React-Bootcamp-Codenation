import React from 'react';

import "./Filters.scss";

class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.onSort = props.onSort;
		this.onSearch = props.onSearch;
	}
	
	  state = {
		keySelected: 'name',
		inputSearch: '',
	  };
	
	  handleChangeActive = (e) => {
		this.setState({
		  keySelected: e.target.name,
		});
	
		this.onSort(e.target.name);
	};
	
	  handleOnInputChange = (e) => {
		this.setState({
		  inputSearch: e.target.value,
		});
	
		this.onSearch(e.target.value);
	};
	
	  handleSubmit = () => {
		const { inputSearch } = this.state;
	
		this.onSearch(inputSearch);
	};
	
	render() {
		const { inputSearch, keySelected } = this.state;

		return (
			<div className="container" data-testid="filters">
			  <section className="filters">
				<div className="filters__search">
				  <input
					type="text"
					className="filters__search__input"
					placeholder="Pesquisar"
					value={inputSearch}
					onChange={this.handleOnInputChange}
				  />
	  
				  <button
					className="filters__search__icon"
					onClick={this.handleSubmit}
				  >
					<i className="fa fa-search" />
				  </button>
				</div>
	  
				<button
				  name="name"
				  className={`filters__item ${
					keySelected === 'name' ? 'is-selected' : ''
				  }`}
				  onClick={this.handleChangeActive}
				>
				  Nome <i className="fas fa-sort-down" />
				</button>
	  
				<button
				  name="country"
				  className={`filters__item ${
					keySelected === 'country' ? 'is-selected' : ''
				  }`}
				  onClick={this.handleChangeActive}
				>
				  País <i className="fas fa-sort-down" />
				</button>
	  
				<button
				  name="company"
				  className={`filters__item ${
					keySelected === 'company' ? 'is-selected' : ''
				  }`}
				  onClick={this.handleChangeActive}
				>
				  Empresa <i className="fas fa-sort-down" />
				</button>
	  
				<button
				  name="department"
				  className={`filters__item ${
					keySelected === 'department' ? 'is-selected' : ''
				  }`}
				  onClick={this.handleChangeActive}
				>
				  Departamento <i className="fas fa-sort-down" />
				</button>
	  
				<button
				  name="admissionDate"
				  className={`filters__item ${
					keySelected === 'admissionDate' ? 'is-selected' : ''
				  }`}
				  onClick={this.handleChangeActive}
				>
				  Data de admissão <i className="fas fa-sort-down" />
				</button>
			  </section>
			</div>
		);
	  }
}

export default Filters;
