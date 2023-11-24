import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewCodeSnippetInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  desc: string;

  @Field()
  code: string;
}
