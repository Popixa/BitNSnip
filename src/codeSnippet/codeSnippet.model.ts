import { Field, Int, ObjectType } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
export class CodeSnippet {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  desc: string;

  @Field({ nullable: false })
  code: string;
}
