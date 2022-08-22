import {MigrationInterface, QueryRunner} from "typeorm";

export class init1661090625221 implements MigrationInterface {
    name = 'init1661090625221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task_entity" ("id" uuid NOT NULL, "description" character varying NOT NULL, "is_completed" boolean NOT NULL DEFAULT false, "category_id" uuid NOT NULL, CONSTRAINT "PK_0385ca690d1697cdf7ff1ed3c2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category_entity" ("id" uuid NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_1a38b9007ed8afab85026703a53" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD CONSTRAINT "FK_17f4c01526efc5d026fe8ea58c7" FOREIGN KEY ("category_id") REFERENCES "category_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task_entity" DROP CONSTRAINT "FK_17f4c01526efc5d026fe8ea58c7"`);
        await queryRunner.query(`DROP TABLE "category_entity"`);
        await queryRunner.query(`DROP TABLE "task_entity"`);
    }

}
