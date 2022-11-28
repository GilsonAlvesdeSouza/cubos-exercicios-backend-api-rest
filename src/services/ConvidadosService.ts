let convidados: Array<string> = [
  "Carlos",
  "Amanda",
  "Fernanda",
  "Juliana",
  "Lucas",
  "Roberto",
];

class ConvidadoService {
  getAll() {
    return convidados.sort((a, b) => {
      return a > b ? 1 : -1;
    });
  }
}

export { ConvidadoService };
