/*
  Warnings:

  - Added the required column `pass` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `image_url` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `pass` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;
