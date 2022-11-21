import { MigrationInterface, QueryRunner, } from "typeorm"

export class UserRefactoring1668998309689 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user" RENAME COLUMN "name" TO "username"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user" RENAME COLUMN "username" TO "name"`,
        ) // reverts things made in "up" method
    }

}
