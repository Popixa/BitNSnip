import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { CodeSnippetResolver } from './codeSnippet/codeSnippet.resolver';
import { CodeSnippetService } from './codeSnippet/codeSnippet.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CodeSnippetResolver,
    CodeSnippetService,
    PrismaService,
  ],
})
export class AppModule {}
