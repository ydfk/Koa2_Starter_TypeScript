/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-11 16:56:08
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-11 17:40:24
 */
export default class Singleton {
    //  当前类的实例
    private static instance: Singleton;
  
    /**
     * 获取当前类的实例
     * @returns {*}
     */
    static getInstance(): Singleton {
      if (this.instance instanceof this === false) {
        this.instance = new this();
      }
      return this.instance;
    }
  }
  