import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";

import styles from "./styles";

const Roy = require("../../../img/contacts/troiz.jpg");


const datas = [
  {
    img: Roy,
    text: "Froilan Dela Cruz",
    note: "Its time to build a difference . ."
  },
  {
    img: Roy,
    text: "Froilan Dela Cruz",
    note: "One needs courage to be happy and smiling all time . . "
  },
  {
    img: Roy,
    text: "Froilan Dela Cruz",
    note: "Live a life style that matchs your vision"
  },
  {
    img: Roy,
    text: "Froilan Dela Cruz",
    note: "Failure is temporary, giving up makes it permanent"
  },
  {
    img: Roy,
    text: "Froilan Dela Cruz",
    note: "The biggest risk is a missed opportunity !!"
  },
  {
    img: Roy,
    text: "Froilan Dela Cruz",
    note: "Time changes everything . ."
  }
];

class NHListThumbnail extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>List Thumbnail</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square size={55} source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>{data.note}</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHListThumbnail;
