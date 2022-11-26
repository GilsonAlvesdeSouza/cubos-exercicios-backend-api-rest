interface AlunoInterface {
  id: number | undefined;
  nome: string;
  sobrenome: string;
  idade: number;
  curso: string;
}

const alunos: Array<AlunoInterface> = [
  {
    id: 1,
    nome: "Marcos",
    sobrenome: "Silveira",
    idade: 36,
    curso: "Programação do Zero",
  },
];

let alunosId = 1;
class AlunosServices {
  getAlunos() {
    return alunos;
  }

  getById(id: number) {
    const aluno = alunos.find((aluno) => aluno.id === id);
    return aluno;
  }

  merge(aluno: AlunoInterface) {
    if (aluno.id) {
    }

    aluno.id = alunosId + 1;
    alunosId = aluno.id;
    alunos.push(aluno);
    return aluno;
  }
}

export { AlunosServices, AlunoInterface };
