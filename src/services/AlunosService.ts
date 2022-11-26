interface AlunoInterface {
  id: number;
  nome: string;
  sobrenome: string;
  idade: number;
  curso: string;
}

const alunos: Array<AlunoInterface> = [
  {
    id: 3,
    nome: "Marcos",
    sobrenome: "Silveira",
    idade: 36,
    curso: "Programação do Zero",
  },
];

class Alunos {
  getAlunos() {
    return alunos;
  }

  getById(id: number) {
    const aluno = alunos.find((aluno) => aluno.id === id);
    return aluno;
  }
}

export { Alunos };
