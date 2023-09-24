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
    const seatsLength = data?.seatsLength
    const selectRout = data?.selectRout
    const price = data?.price
    const tax = data?.tax
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
            <Text style={styles.title}>Bus Ticket</Text>
            <Text>Name: {fName}</Text>
            <Text>Name: {lName}</Text>
            <Text>email: {email}</Text>
            <Text>phone: {phone}</Text>
            <Text>Bus Route: Route 1232222 {seats}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Ride info</Text>
            <Text>From: 24 Avon street, 4th Parkon, New York</Text>
            <Text>To: outhgate LRT Bus Stop 2217, New York</Text>
            <Text>Department Time: 10:00 AM</Text>
            <Text>Arrive Time: 1:00 PM</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Bus</Text>
            <Text>Bus Type:Volvo AC</Text>
            <Text>Bus Number:10DIB</Text>
            <Text>Seat No:A1, A2</Text>
            <Text>Ticket Pnr:23156-89512M</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Details</Text>
            <Text>Delux Business Seat - 10:00 AM Sat</Text>
            <Text>Price: $120</Text>
            <Text>Qty: 2</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Details</Text>
            <Text>Sub Total:	$240.00</Text>
            <Text>Tax (18%)	$43.20</Text>
            <Text>Grand Total:	$283.20</Text>
          </View>
          <View style={styles.headerText}>
            <View>
                <Text>Link to your ticket</Text>
                <Image style={styles.qr} src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeValue)}`} />
            </View>
            <View>
                <Text>Link for driver</Text>
                <Image style={styles.qr} src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeValue)}`} />
            </View>
          </View>
        </Page>
      </Document>
    );
};

export default TicketTamplate;