let convidados: Array<string> = [
  "Carlos",
  "Amanda",
  "Fernanda",
  "Juliana",
  "Lucas",
  "Roberto",
  "Fala Mala",
  "Crhistina",
  "Mara",
  "Agua",
  "Terra",
  "Fulano",
  "Beltrano",
  "Rosa",
  "Gilson",
  "franciele",
];

class ConvidadoService {
  getAll() {
    return convidados.sort((a, b) => {
      return a > b ? 1 : -1;
    });
  }

  getByName(name: string) {
    return convidados.find(
      (convidado) => convidado.toLowerCase() === name.toLowerCase()
    );
  }

  save(name: string) {
    const exists = convidados.find(
      (convidado) =>
        convidado.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (!exists) {
      const nomeFormatado = ConvidadoService.nameFormat(name);
      convidados.push(nomeFormatado);
      return name;
    }
  }

  remove(name: string) {
    const convidado = convidados.find(
      (convidado) => convidado.toLowerCase() === name.toLowerCase()
    );

    if (convidados) {
      convidados = convidados.filter((convidado) => convidado !== name);
      return convidado;
    }
  }

  private static nameFormat(name: string) {
    const nameSplit = name.split(" ");
    let count = 0;

    const result = nameSplit.reduce((acc, el, _, array) => {
      count++;
      el.trim();
      if (count === array.length) {
        return (acc +=
          el[0].toLocaleUpperCase() + el.slice(1, el.length).toLowerCase());
      }
      acc +=
        el[0].toLocaleUpperCase() + el.slice(1, el.length).toLowerCase() + " ";
      return acc;
    }, "");

    return result;
  }
}

export { ConvidadoService };
