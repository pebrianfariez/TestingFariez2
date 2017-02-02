import React, {Component} from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import {Container, Content, Button, InputGroup, Input, Alert, TouchableHighlight, Text} from 'native-base';
import Api from '../../services/Api.service';

const styles = StyleSheet.create({});

export default class HomeScreen extends Component {
  auth = {
    fromAccount: null,
    amount: null,
    toAccount: null,
    note: null
  }
  static navigationOptions = {
    title: 'Fund Transfer'
  };
  setFromAccount(fromAccount) {
    this.auth.fromAccount = fromAccount;
  }
  setAmount(amount) {
    this.auth.amount = amount;
  }
  setToAccount(toAccount) {
    this.auth.toAccount = toAccount;
  }
  setNote(note) {
    this.auth.note = note;
  }
  onConfirmTransfer() {
    const {fromAccount, amount, toAccount, note} = this.auth;
    Api.transfer(fromAccount, amount, toAccount, note).then((d) => console.log(d.status, d.data), err => console.log(err));
  }
  render() {
    return (
      <Container>
        <Content>
          <Text>
            Your Bank Account{'\n'}
          </Text>
          <InputGroup borderType='regular'>
            <Input placeholder='Please Select Account' onChangeText={(val) => this.setFromAccount(val)} value={this.auth.amount} on/>
          </InputGroup>

          <Text>
            {'\n'}
          </Text>

          <Text>
            Amount to Transfer{'\n'}
          </Text>
          <InputGroup borderType='regular'>
            <Input placeholder='Please Input Amount' onChangeText={(val) => this.setAmount(val)} value={this.auth.amount} on/>
          </InputGroup>

          <Text>
            {'\n'}
          </Text>

          <Text>
            Payee{'\n'}
          </Text>
          <InputGroup borderType='regular'>
            <Input placeholder='account number / name of payee' onChangeText={(val) => this.setToAccount(val)} value={this.auth.amount} on/>
          </InputGroup>

          <Text>
            {'\n'}
          </Text>

          <Text>
            Leave a note{'\n'}
          </Text>
          <InputGroup borderType='regular'>
            <Input placeholder='eg. paying rent' onChangeText={(val) => this.setNote(val)} value={this.auth.amount} on/>
          </InputGroup>

          <Text>
            {'\n'}
          </Text>

          <Button onPress={() => this.onConfirmTransfer()}>
            Transfer
          </Button>
        </Content>
      </Container>
    );
  }
}
