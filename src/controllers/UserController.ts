import { Request, Response } from "express";

import * as Yup from "yup";

import { getCustomRepository } from "typeorm";

import { AppError } from "../errors/AppError";

import { UsersRepository } from "../repositories/UsersRepository";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = Yup.object().shape({
      name: Yup.string().required("Nome é obrigatório"),
      email: Yup.string().email("Email inválido").required("Email obrigatório"),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    const usersReposiory = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersReposiory.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const user = usersReposiory.create({
      name,
      email,
    });

    await usersReposiory.save(user);

    return response.status(201).json(user);
  }
}

export { UserController };
