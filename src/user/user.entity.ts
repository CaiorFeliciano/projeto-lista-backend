import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alunos')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  plano: string;
  @Column()
  vencimento: Date;
  @Column()
  ultimo_acesso: Date;
}
