import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SignUpsController {
  public async index(req: HttpContextContract) {
    return req.request.all();
  }
}
