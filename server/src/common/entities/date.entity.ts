import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class DateEntity {
  @ApiProperty({
    description: '생성 날짜',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: '수정 날짜',
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;
}
