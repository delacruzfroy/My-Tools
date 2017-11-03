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

const Troiz = require("../../../img/contacts/troiz.jpg");


const datas = [
  {
    img: Troiz,
    text: "Troiz",
    note: "Its time to build a difference . ."
  },
  {
    img: Troiz,
    text: "Troiz",
    note: "One needs courage to be happy and smiling all time . . "
  },
  {
    img: Troiz,
    text: "Troiz",
    note: "Live a life style that matchs your vision"
  },
  {
    img: Troiz,
    text: "Froila",
    note: "Failure is temporary, giving up makes it permanent"
  },
  {
    img: Troiz,
    text: "Troiz",
    note: "The biggest risk is a missed opportunity !!"
  },
  {
    img: Troiz,
    text: "Troiz",
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
