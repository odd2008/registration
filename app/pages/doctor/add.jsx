'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import config from 'config';
import {network} from 'utils';

import {Doctor as DoctorAction} from 'actions';

const styles = ({spacing: {unit}}) => ({

  root: {
    // textAlign: 'center',
  },

  infoBox: {
    margin: unit * 2,
  },

  textField: {
    marginLeft: unit,
    marginRight: unit,
  },

  button: {
    margin: unit,
  },

  progress: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    zIndex: 2500,
    top: 0,
    left: 0,
    background: 'rgba(0,0,0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    background: 'gainsboro',
  },

  basic: {
    marginTop: unit,
  },

  introductionBox: {
    marginTop: unit * 4,
  },

  introduction: {
    marginTop: unit * 2,
  },

});

class AddDoctor extends React.Component {

  state = {
    ref_id: '',
    loading: false,
    doctor: {},
  };

  handleChange = name => event => {
    let value = event.target.value;
    if (name == 'ref_id') {
      value = value.replace(/\D+/g, '');
      this.setState({[name]: value});
    }else{
      const {doctor} = this.state;
      doctor[name] = value;
      this.setState({doctor});
    }
  };

  handleSpider = () => {
    this.setState({loading: true}, () => {
      network
        .get(`${config.api_host}/spider/${this.state.ref_id}`)
        .then(res => {
          if(res.code == 200){
            this.setState({doctor: res.data, loading: false});
          }
        })
        .catch(err => {
          this.setState({loading: false});
          console.log(err);
        });
    });
  };

  handleAddDoctor = () => {
    const params = Object.assign({}, this.state.doctor);
    params.ref_id = this.state.ref_id;
    params.introduction = JSON.stringify(params.introduction);
    params.visitsInfo = JSON.stringify(params.visitsInfo);

    this.props.addDoctor(params);
  };

  render() {

    const {classes} = this.props;

    const {
      ref_id,
      doctor,
      loading,
    } = this.state;

    return (
      <div className={classes.root}>

        <Typography noWrap>
          添加医生
        </Typography>

        <div>

          <TextField
            id="phone"
            label="输入医生标识"
            value={ref_id}
            className={classes.textField}
            onChange={this.handleChange('ref_id')}
            margin="normal"
          />

          <Button
            variant="raised"
            color="primary"
            disabled={!ref_id}
            className={classes.button}
            onClick={this.handleSpider}
          >
            获取信息
          </Button>

        </div>

        <div className={classes.infoBox}>

          <img
            className={classes.avatar}
            src={doctor.avatar ? `https://ss.bjmu.edu.cn${doctor.avatar}` : ''}
          />

          <div className={classes.basic}>

            <TextField
              id="name"
              label="姓名"
              value={doctor.name || ''}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange('name')}
            />

            <TextField
              id="phone"
              label="电话"
              value={doctor.phone || ''}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange('phone')}
            />

            <TextField
              id="department"
              label="科室"
              value={doctor.department || ''}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange('department')}
            />

            <TextField
              id="position"
              label="职务"
              value={doctor.position || ''}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange('position')}
            />

            <TextField
              id="title"
              label="职称"
              value={doctor.title || ''}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange('title')}
            />

            <TextField
              fullWidth
              id="specialty"
              label="专长"
              value={doctor.specialty || ''}
              className={classes.textField}
              onChange={this.handleChange('specialty')}
            />

          </div>

          <div className={classes.introductionBox}>

            个人简介

            <div className={classes.introduction}>
              {
                (doctor.introduction || []).map(item => <div key={item}>{item}</div>)
              }
            </div>

          </div>

          <Button
            variant="raised"
            color="primary"
            disabled={!doctor}
            className={classes.button}
            onClick={this.handleAddDoctor}
          >
            插入数据库
          </Button>

        </div>

        {
          loading &&
          <div className={classes.progress}>
            <CircularProgress size={50}/>
          </div>
        }

      </div>
    );
  }
}

AddDoctor.propTypes = {
  //style
  classes: PropTypes.object.isRequired,

  addDoctor: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  addDoctor: DoctorAction.addDoctor,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(withRouter(AddDoctor)));