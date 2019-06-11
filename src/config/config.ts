/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-11 17:14:19
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-11 17:36:53
 */

import { parse } from "dotenv";
import { readFileSync } from "fs";
import * as Joi from "joi";
import Singleton from "@/core/singleton";
import { NODE_ENV, MONGO_HOST, MONGO_PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGO_DATABASE, PORT } from "./config.constant";

interface EnvConfig {
  [key: string]: string;
}

class Config extends Singleton {
  private readonly envConfig: EnvConfig = {};

  constructor() {
    super();
    this.envConfig = this.validateInput(parse(readFileSync(`.${process.env.NODE_ENV || "development"}.env`)));    
  }

  get port(): number {
    return this.getNumber(PORT);
  }

  /** 开发模式 */
  get isDevelopment(): boolean {
    return Boolean(this.envConfig[NODE_ENV] === "production");
  }
  /** 生产模式 */
  get isProduction(): boolean {
    return Boolean(this.envConfig[NODE_ENV] === "production");
  }

  get MONGO_HOST(): string {
    return this.get(MONGO_HOST);
  }

  get MONGO_PORT(): number {
    return this.getNumber(MONGO_PORT);
  }

  get MONGO_USERNAME(): string {
    return this.get(MONGO_USERNAME);
  }

  get MONGO_PASSWORD(): string {
    return this.get(MONGO_PASSWORD);
  }

  get MONGO_DATABASE(): string {
    return this.get(MONGO_DATABASE);
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(["development", "production"])
        .default("development"),
      PORT: Joi.number().default(5000),
      MONGO_HOST: Joi.string().default("127.0.0.1"),
      MONGO_PORT: Joi.number().default(27017),
      MONGO_USERNAME: Joi.string(),
      MONGO_PASSWORD: Joi.string(),
      MONGO_DATABASE: Joi.string().default("test"),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(envConfig, envVarsSchema);
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
  
  private get(key: string, defaultVal?: any): string {
    return this.envConfig[key] || process.env[key] || defaultVal;
  }

  /**
   * 获取数字
   * @param key
   */
  private getNumber(key: string, defaultVal?: number): number {
    return Number(this.get(key, defaultVal));
  }

  /**
   * 获取布尔值
   * @param key
   */
  private getBoolean(key: string): boolean {
    return Boolean(this.get(key, false));
  }
}

export default Config.getInstance() as Config;