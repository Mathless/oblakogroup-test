import {MigrationInterface, QueryRunner} from "typeorm";

export class namings1661154374567 implements MigrationInterface {
    name = 'namings1661154374567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task_entity" RENAME COLUMN "description" TO "text"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task_entity" RENAME COLUMN "text" TO "description"`);
    }

}
