import { MigrationInterface, QueryRunner } from 'typeorm';

export class seed1661091022366 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "insert into category_entity (id, title) values ('123e4567-e89b-12d3-a456-426614174002', 'Семья'), ('123e4567-e89b-12d3-a456-426614174003', 'Работа'),('123e4567-e89b-12d3-a456-426614174004', 'Прочее');",
    );
    await queryRunner.query(
      "insert into task_entity (id, description, is_completed, category_id) values ('123e4567-e89b-12d3-a456-426614174010', 'Купить молоко', false, '123e4567-e89b-12d3-a456-426614174002');",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM category_entity');
    await queryRunner.query('DELETE FROM task_entity');
  }
}
