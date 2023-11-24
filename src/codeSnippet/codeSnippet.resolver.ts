import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CodeSnippet } from './codeSnippet.model';
import { CodeSnippetService } from './codeSnippet.service';
import { NewCodeSnippetInput } from './dto/newCodeSnippet.input';

@Resolver((of) => CodeSnippet)
export class CodeSnippetResolver {
  constructor(private codeSnippetService: CodeSnippetService) {}

  @Query((returns) => CodeSnippet)
  async getCodeSnippetById(@Args('id', { type: () => Int }) id: number) {
    return this.codeSnippetService.getCodeSnippetById(id);
  }

  @Mutation((returns) => CodeSnippet)
  async createCodeSnippet(
    @Args('codeSnippet') codeSnippet: NewCodeSnippetInput,
  ) {
    return this.codeSnippetService.createCodeSnippet(codeSnippet);
  }
}
