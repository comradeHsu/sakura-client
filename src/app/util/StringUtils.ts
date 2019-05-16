export class StringUtils {

  static isEmpty(object: string): boolean {
    object = object.replace(/[\r\n]/g, '');
    if (object === null || object === '') {
      return true;
    }
    return false;
  }

  static notEmpty(object: string): boolean {
    object = object.replace(/[\r\n]/g, '');
    if (object === null || object === '') {
      return false;
    }
    return true;
  }
}
