import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/database.config';

@Module({
  imports: [
    CategoryModule,
    CategoryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(config),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
