import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (filename: string) => filename.split(".").shift();

readdirSync(PATH_ROUTER).filter((filename) => {
  const name = cleanFileName(filename);
  if (name !== "index") {
    import(`./${name}`).then((moduleRouter) => {
      router.use(`/${name}`, moduleRouter.router);
    });
  }
});

export { router };
