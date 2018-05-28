'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import qs from 'qs';

import {withStyles} from '@material-ui/core/styles';

import EnhancedTable from '../../components/CustomTable/EnhancedTable';

import {Patient as PatientAction} from 'actions';

const columnData = [
  {id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)'},
  {id: 'calories', numeric: true, disablePadding: false, label: 'Calories'},
  {id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)'},
  {id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)'},
  {id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)'},
];

const styles = () => ({});

class List extends React.Component {

  unlisten = null;

  UNSAFE_componentWillMount() {
    this.unlisten = this.props.history.listen(location => {
      let query = this.mergeQuery(location.search);
      this.props.fetchPatients(query);
    });
  }

  componentDidMount() {
    let query = qs.parse(location.search, {ignoreQueryPrefix: true});
    this.props.fetchPatients(query);
  }

  mergeQuery = (searchStr = '', setQuery = {}) => {
    let query = qs.parse(searchStr, {ignoreQueryPrefix: true});
    return {
      ...query,
      ...setQuery,
    };
  };

  getData() {
    let query = qs.parse(location.search, {ignoreQueryPrefix: true});
    this.props.fetchPatients({query});
  }

  changeUrlQuery = query => {
    this.props.history.push(`/patient?${qs.stringify(query, {encode: false})}`);
  };

  handleChangePage = page => {
    let sendData = this.mergeQuery(this.props.location.search, {page});
    this.changeUrlQuery(sendData);
  };

  handleChangeRowsPerPage = perPage => {
    let sendData = this.mergeQuery(this.props.location.search, {perPage});
    this.changeUrlQuery(sendData);
  };

  render() {

    const {data} = this.props;

    const patients = data.list || [];
    const total = data.total || 0;

    return (
      <EnhancedTable
        columnData={columnData}
        dataSource={patients}
        total={total}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    );
  }
}

List.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchPatients: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.patient.data,
  loading: state.patient.loading,
});

const mapDispatchToProps = {
  fetchPatients: PatientAction.fetchPatients,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(withRouter(List)));