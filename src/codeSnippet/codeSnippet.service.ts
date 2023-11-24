import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CodeSnippet } from './codeSnippet.model';
import { NewCodeSnippetInput } from './dto/newCodeSnippet.input';

@Injectable()
export class CodeSnippetService {
  constructor(private prisma: PrismaService) {}

  async getCodeSnippetById(id: number) {
    let codeSnippet = await this.prisma.codeSnippet.findUnique({
      where: {
        id: id,
      },
    });
    if (codeSnippet == null) {
      throw new Error('No CodeSnippet found');
    }
    let res = new CodeSnippet();
    res.id = codeSnippet.id;
    res.name = codeSnippet.name;
    res.desc = codeSnippet.desc;
    res.code = codeSnippet.code;
    return res;
  }

  async createCodeSnippet(codeSnippet: NewCodeSnippetInput) {
    let newCodeSnippet = await this.prisma.codeSnippet.create({
      data: codeSnippet,
    });
    let res = new CodeSnippet();
    res.id = newCodeSnippet.id;
    res.name = newCodeSnippet.name;
    res.desc = newCodeSnippet.desc;
    res.code = newCodeSnippet.code;
    return res;
  }
}
