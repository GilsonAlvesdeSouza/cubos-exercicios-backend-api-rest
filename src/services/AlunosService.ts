interface AlunoInterface {
  id: number | undefined;
  nome: string;
  sobrenome: string;
  idade: number;
  curso: string;
}

let alunos: Array<AlunoInterface> = [];

let alunosId = 0;
class AlunosServices {
  getAll() {
    return;
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

  remove(id: number) {
    const aluno = alunos.find((aluno) => aluno.id === id);

    if (!aluno) {
      return false;
    }

    const idAluno = aluno.id;

    alunos = alunos.filter((aluno) => aluno.id !== idAluno);
    return true;
  }
}

export { AlunosServices, AlunoInterface };
