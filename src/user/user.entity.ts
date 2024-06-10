import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alunos')
export class User {
  @PrimaryColumn()
  id_aluno: number;
  @Column()
  nome_aluno: string;
  @Column()
  email_aluno: string;
  @Column()
  id_plano: string;
  @Column()
  vencimento: Date;
  @Column()
  ultimo_acesso: Date;
}
