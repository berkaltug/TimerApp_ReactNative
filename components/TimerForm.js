import {StyleSheet, View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import TimerButton from './TimerButton';

export default class TimerForm extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    project: PropTypes.string,
    onFormSubmit: PropTypes.func.isRequired,
    onFormClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    id: null,
    title: '',
    project: '',
  };

  constructor(props) {
    super(props);

    const {id, title, project} = props;

    this.state = {
      title: id ? title : '',
      project: id ? project : '',
    };
  }

  handleTitleChange = title => {
    this.setState({title});
  };

  handleProjectChange = project => {
    this.setState({project});
  };

  handleSubmit = () => {
    const {onFormSubmit, id} = this.props;
    const {title, project} = this.state;

    onFormSubmit({
      id,
      title,
      project,
    });
  };

  render() {
    const {id, onFormClose} = this.props;
    const {title, project} = this.state;

    const submitText = id ? 'Update' : 'Create';

    return (
      <View style={styles.formContainer}>
        <View style={styles.attributeContainer}>
          <Text style={styles.textInputTitle}>Title</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              onChangeText={this.handleTitleChange}
              value={title}
            />
          </View>
        </View>
        <View style={styles.attributeContainer}>
          <Text style={styles.textInputTitle}>Project</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              onChangeText={this.handleProjectChange}
              value={project}
            />
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <TimerButton
            small
            color="#21BA45"
            title={submitText}
            onPress={this.handleSubmit}
          />
          <TimerButton
            small
            color="#DB2828"
            title="Cancel"
            onPress={onFormClose}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#4d59ff',
    borderColor:"#3945e9",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
    backgroundColor:"#dfdfdf"
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'rgb(236, 236, 236)',
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
