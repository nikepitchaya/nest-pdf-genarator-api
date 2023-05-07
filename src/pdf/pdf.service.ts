import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PdfService {
    async getTemplate(token: string) {
        const response = await axios.get(`https://us1.pdfgeneratorapi.com/api/v4/templates`, {
            params: {
                name: '',
                tags: '',
                access: 'private',
                page: '1',
                per_page: '10'
            },
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    }

    async getTemplates(token: string, templateId: string,) {
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
                start_date: '2022-01-01 12:00:00',
                end_date: '2022-05-05 12:00:00',
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
            template: {
                id: '645284',
                data: { id: 123, name: 'John Smith', birthdate: '2000-01-01', role: 'Developer', lorem: 'test' }
            },
            format: 'pdf',
            output: 'url',
            name: 'Invoice 123'
        }, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    }
}
