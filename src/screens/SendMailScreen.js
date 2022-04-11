import React, { Component } from "react";
import { View, Linking, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  Icon,
  Button,
  Text,
} from "native-base";
import { Formik } from "formik";
import * as Yup from "yup";

export default class SendMailScreen extends Component {
  _handeSubmit = (values) => {
    let subject = values.konu;
    let body = values.mesaj;
    Linking.openURL(
      `mailto:hakanaydogan@yahoo.com?subject=${subject}&body=${body}`
    );
  };
  render() {
    return (
      <Formik
        initialValues={{ email: "", konu: "", mesaj: "" }}
        onSubmit={this._handeSubmit}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Geçersiz format")
            .required("zorunlu"),
          konu: Yup.string().required("zorunlu"),
          mesaj: Yup.string().required("zorunlu"),
        })}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <Container style={styles.container}>
            <Content padder>
              <Form>
                <Item error>
                  <Label floatingLabel>E-mail</Label>
                  <Input
                    value={values.email}
                    onChangeText={handleChange("email")}
                    autoCapitalize="none"
                  />
                  <Text style={{ color: "red" }}>{errors.email}</Text>
                </Item>
                <Item error>
                  <Label>Konu</Label>
                  <Input
                    value={values.konu}
                    onChangeText={handleChange("konu")}
                  />
                  <Text style={{ color: "red" }}>{errors.konu}</Text>
                </Item>
                <Item error>
                  <Input
                    style={styles.textArea}
                    rowSpan={10}
                    bordered
                    placeholder="Mesajınız"
                    value={values.mesaj}
                    onChangeText={handleChange("mesaj")}
                  />
                  <Text style={{ color: "red" }}>{errors.mesaj}</Text>
                </Item>
                <Button
                  onPress={handleSubmit}
                  block
                  success
                  style={{ margin: 15 }}
                >
                  <Icon name="mail" />
                  <Text>Gönder</Text>
                </Button>
              </Form>
            </Content>
          </Container>
        )}
      </Formik>
    );
  }
}
const styles = StyleSheet.create({
  textArea: {
    width: "100%",
    padding: 15,
    marginRight: 55,
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
});

//    <Button
//    onPress={() =>
//      Linking.openURL(
//        'mailto:support@example.com?subject=SendMail&body=Description',
//      )
//    }
//    title="support@example.com"
//  />
