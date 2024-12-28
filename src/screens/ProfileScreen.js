import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Dody Saputra Simanjorang"
          subtitle="Mahasiswa"
          left={(props) => (
            <Avatar.Icon {...props} icon="account" style={styles.avatar} />
          )}
        />
        <Card.Content>
          <Title>Tentang Saya</Title>
          <Paragraph>
            Hi! Saya Dody Saputra Simanjorang dengan npm 223510777 dan ini adalah hasil dari tugas 5 saya. Merry Christmas!!!  :)
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('Details')}>
            Tampilan Details
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
  },
  avatar: {
    backgroundColor: '#6200ee',
  },
});