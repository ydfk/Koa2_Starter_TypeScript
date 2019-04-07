export default class Singleton {
  /**
   * 获取当前类的实例
   * @returns {*}
   */
  public static getInstance(): Singleton {
    if (this.instance instanceof this === false) {
      this.instance = new this();
    }
    return this.instance;
  }
  private static instance: Singleton;
}
