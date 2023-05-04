import { Controller, Get, Post } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { KeyConstant, KeyModel } from './keyConstant';


@Controller('pdf')
export class PdfController {
    x: KeyModel = new KeyConstant()

    constructor(private readonly pdfService: PdfService) { }

    @Get('templates')
    async getTemplates() {
        return this.pdfService.getTemplate(this.x.token, this.x.templates_id)
    }
    @Get('documents')
    async getDocuments() {
        return this.pdfService.getDocument(this.x.token)
    }

    @Post('generate-document')
    async generateDocument() {
        return this.pdfService.generateDocument();
    }

}
