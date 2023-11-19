import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller('api/v1/users')
class UserController {

    constructor() {}

    @Get('register')
    public async register(req: Request, res: Response) {
        res.status(200).json({message: 'users'})
    }
}

export default  UserController;