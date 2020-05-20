export default class DateHelper {

    static formatDateBR(value) {
      const date = new Date(value);
      if (date && !isNaN(date.getTime())) {
        return date.toLocaleDateString('pt-BR');
      }
      return value;
    }
}