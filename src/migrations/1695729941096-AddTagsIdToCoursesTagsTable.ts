import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddTagsIdToCoursesTagsTable1695729941096
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'courses_tags',
      new TableColumn({ name: 'tagsId', type: 'uuid', isNullable: true }),
    );

    await queryRunner.createForeignKey(
      'courses_tags',
      new TableForeignKey({
        name: 'courses_tags_tags',
        columnNames: ['coursesId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'courses',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('courses_tags', 'courses_tags_tags');

    await queryRunner.dropColumn('courses_tags', 'tagsId');
  }
}
