import React, { useState } from 'react';
import axios from 'axios';
import { PDFViewer } from '@react-pdf/renderer';
import TicketView from './TicketView';


const TestPdf = () => {
    const [pdfBlob, setPdfBlob] = useState(null); // Зберігаємо Blob об'єкт PDF
  
  
    return (
      <div className='test_pdf'>
          <PDFViewer width="100%" height="100%">
            <TicketView/>
          </PDFViewer>
      </div>
    );
  };

export default TestPdf;