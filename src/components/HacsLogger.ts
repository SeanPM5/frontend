/*
Simple logger class to make logging consistent

Usage:

Basic: const logger = new Logger()
Advanced: const logger = new Logger("main")

logger.info("My message")
logger.error("My message")
logger.warning("My message")

const obj = {test: "string"}
logger.info(obj)

*/

export class HacsLogger {
  section?: string;
  prefix?: string;
  constructor(section?: string) {
    const name = "HACS";
    this.section = section;
    if (section === undefined) this.prefix = name;
    else this.prefix = `${name}.${section}`;
  }

  debug(content: string | Object, object?: Object) {
    if (content instanceof Object) console.debug(`[${this.prefix}] `, content);
    else console.debug(`[${this.prefix}] ${content}`, object || "");
  }
  info(content: string | Object, object?: Object) {
    if (content instanceof Object) console.info(`[${this.prefix}] `, content);
    else console.info(`[${this.prefix}] ${content}`, object || "");
  }
  warning(content: string | Object, object?: Object) {
    if (content instanceof Object) console.warn(`[${this.prefix}] `, content);
    else console.warn(`[${this.prefix}] ${content}`, object || "");
  }
  error(content: string | Object, object?: Object) {
    if (content instanceof Object) console.error(`[${this.prefix}] `, content);
    else console.error(`[${this.prefix}] ${content}`, object || "");
  }
}
