import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PdfService {
    async getTemplate(token: string, templateId: string,) {
        const response = await axios.get(`https://us1.pdfgeneratorapi.com/api/v4/templates/${templateId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        console.log(response)
        return response.data;
    }

    async getDocument(token: string) {
        const response = await axios.get(`https://us1.pdfgeneratorapi.com/api/v4/documents`, {
            headers: {
                Authorization: `Bearer ${token}`
            },

        });
        console.log(response)
        return response.data;
    };

    async generateDocument() {
        const response = await axios.post(`https://us1.pdfgeneratorapi.com/api/v4/documents/generate`, {
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer REPLACE_BEARER_TOKEN'
            },
            body: {
                template: {
                    id: 'REPLACE_TEMPLATE_ID',
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
