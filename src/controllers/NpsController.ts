import { Request, Response } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

/**
 * Detratores => 0 - 6
 * Passivos => 7 - 8 (Ignorados)
 * Promotores => 9 - 10
 */
class NpsController {
  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveysUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull()),
    });

    const detractor = surveysUsers.filter(
      (survey) => survey.value >= 0 && survey.value <= 6
    ).length;
    const pasive = surveysUsers.filter(
      (survey) => survey.value >= 7 && survey.value <= 8
    ).length;
    const promoters = surveysUsers.filter(
      (survey) => survey.value >= 9 && survey.value <= 10
    ).length;

    const totalAnswers = surveysUsers.length;

    const calculate = Number(
      (((promoters - detractor) / totalAnswers) * 100).toFixed(2)
    );

    return response.json({
      detractor,
      pasive,
      promoters,
      totalAnswers,
      nps: calculate,
    });
  }
}

export { NpsController };
