import React, { useEffect, useState } from 'react';
import { Image, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import QRCode from 'qrcode.react';



const styles = StyleSheet.create({
    page: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#12151c',
        padding:'50px 0px'
      },
      header: {
          flexDirection: 'column',
          color: '#fff'
      },
      headerText:{
          flex: 1,
          flexDirection:'row',
          justifyContent: 'center',
          backgroundColor: '3f1fc1',
          padding: '5px 0px',
      },
      headerLogo:{
          flexDirection:'row',
          alignContent: 'left',
          fontSize: 40,
          height: 100,
          padding: ' 0px 20px',
  
      },
      qr:{
          width: 100,
          height: 100,
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
      }
    });

  

const TicketTamplate = ({data}) => {
    const fName = data?.fName
    const lName = data?.lName
    const seats = data?.seats
    const email= data?.email
    const phone = data?.phone
    // const qr = data?.qr
    const qrCodeValue = 'http://localhost:3000/booking-info-pas';

    return (
        <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <View style={styles.headerLogo}>
                    <Text>BUS Logo</Text>
                </View>
                <View style={styles.headerText}>
                    <Text>ID ride: #220391</Text>
                    <Text>Date: 30/11/2022 </Text>
                    <Text>Seat #: 34 </Text>
                </View>
            </View>
          <View style={styles.section}>
            <Text>Bus Ticket</Text>
            <Text>Name: Lex</Text>
            <Text>Name: Lut</Text>
            <Text>email: 1@g.com</Text>
            <Text>phone: +38066371</Text>
            <Text>Bus Route: Route 123</Text>
            {/* Add more text or components as needed */}
          </View>
          <View>
          <Image style={styles.qr} src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeValue)}`} />
          </View>
        </Page>
      </Document>
    );
};

export default TicketTamplate;