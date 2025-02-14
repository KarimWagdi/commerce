import { Response } from "express";
import { AppDataSource } from "../dbConfig/data-source";

class RateController {
  static getRate = async (request: any, response: Response): Promise<void> => {
    try {
      const rateReposiory = AppDataSource.getRepository("rate");
      const rates = await rateReposiory.find();
      response.json(rates);
    } catch (error) {
      response.status(500).json({ message: error });
    }
  };

  static addRate = async (request: any, response: Response): Promise<void> => {
    try {
      const rateReposiory = AppDataSource.getRepository("rate");
      const rates = await rateReposiory.save(request.body);
      response.json(rates);
    } catch (error) {
      response.status(500).json({ message: error });
    }
  };

  static updateRate = async (
    request: any,
    response: Response
  ): Promise<void> => {
    try {
      const rateReposiory = AppDataSource.getRepository("rate");
      const rates = await rateReposiory.findOne({
        where: { id: request.params.id },
      });
      const updatedRate = await rateReposiory.save({
        ...rates,
        ...request.body,
      });
      response.json(updatedRate);
    } catch (error) {
      response.status(500).json({ message: error });
    }
  };

  static deleteRate = async (
    request: any,
    response: Response
  ): Promise<void> => {
    try {
      const rateReposiory = AppDataSource.getRepository("rate");
      const rates = await rateReposiory.delete({ id: request.params.id });
      response.json({ message: "Rate deleted successfully." });
    } catch (error) {
      response.status(500).json({ message: error });
    }
  };
}

export default RateController;
