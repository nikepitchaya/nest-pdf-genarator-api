import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PdfService {
    async getTemplate(token: string, templateId: string,) {
        const response = await axios.get(`https://us1.pdfgeneratorapi.com/api/v4/templates/${templateId}`, {

            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    }

    async getDocument(token: string) {
        const response = await axios.get(`https://us1.pdfgeneratorapi.com/api/v4/documents`, {
            params: {
                start_date: '2023-01-01 12:00:00',
                end_date: '2023-05-04 12:00:00',
                page: '1',
                per_page: '10'
            },
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },

        });
        return response.data;
    };

    async generateDocument(token: string, templateId: string) {
        const response = await axios.post(`https://us1.pdfgeneratorapi.com/api/v4/documents/generate`, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: {
                template: {
                    id: templateId,
                    data: { id: 123, name: 'John Smith', birthdate: '2000-01-01', role: 'Developer' }
                },
                format: 'pdf',
                output: 'base64',
                name: 'Invoice 123'
            },
            json: true
        });
        return response.data;
    }
}
