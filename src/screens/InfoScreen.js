import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {ScrollView} from 'react-native-gesture-handler';

export default class InfoScreen extends Component {
  state = {
    text:
      '- 657 ve 4483 sayılı Kanunlar (%15) \n - 657 sayılı Devlet Memurları Kanunu  (kısım 8 ve 9 hariç), \n - 4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun. \n - Bakanlık teşkilatı,  görevleri ve mevzuatı (%30) \n - 1739 sayılı Milli Eğitim Temel Kanunu,\n - 1 No’lu Cumhurbaşkanlığı Kararnamesinde MEB’e ilişkin hükümler,\n - 5580 sayılı Özel Öğretim Kurumları Kanunu, Görevin gerektirdiği diğer mevzuat,\n - 3071 sayılı Dilekçe Hakkının Kullanılmasına Dair Kanun,\n - 4982 sayılı Bilgi Edinme Hakkı Kanunu, \n - 222 sayılı İlköğretim ve Eğitim Kanunu, Ortaöğretim Kurumları Yönetmeliği,\n - Milli Eğitim Bakanlığı Okul Öncesi ve İlköğretim Kurumları Yönetmeliği,\n - Milli Eğitim Bakanlığı Eğitim Kurumları Sosyal Etkinlikler Yönetmeliği,\n - Milli Eğitim Bakanlığı Rehberlik Hizmetleri Yönetmeliği,\n - MEB Örgün ve Yaygın Eğitimi Destekleme ve Yetiştirme Kursları Yönergesi, \n - Aday Öğretmenlik Yetiştirme Süreci.\n *** Öğretmenlik uygulamaları (%50),\n - Eğitim öğretimin planlanması,\n - Öğrenme ortamları,\n - Sınıf yönetimi, Öğretim yöntem ve teknikleri,\n - Ölçme ve değerlendirme.',
  };
  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: '#ffff'}}>
          <Text style={styles.text}>{this.state.text}</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: RFValue(10, 560),
    fontFamily: 'sans-serif',
    lineHeight: RFPercentage(3.5),
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
