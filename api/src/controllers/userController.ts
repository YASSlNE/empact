import bcrypt from 'bcrypt-nodejs';
import {  Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import passport from 'passport';
import '../auth/passportHandler';
import {Enterprise,} from '../entities/enterprise';

import { Employee } from '../entities/employee';

import { Ngo } from '../entities/ngo';

import { dataSource } from "../app-data-source"
import { createLoggedInUserDto } from '../utils/mapper.util';
import { Roles } from '../enums/roles.enum';
import { createTokenFromUser } from '../utils/auth.util';


const JWT_SECRET = process.env.JWT_SECRET;


export class UserController {
    /**
     * @api {post} /api/register Register user
     * @apiName RegisterUser
     * @apiGroup User
     * @apiParam {String} username
     * @apiParam {String} password
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id":"1"
     *       "username": "mahmoud",
     *       "password": "mahmoudpassword"
     *     }
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "error": "user already exist"
     *     }
     */




// Enterprise Registration

    public async registerEnterprise(req: Request, res: Response) {
        const { name, email, password, fieldOfInterest, Location  } = req.body;



        const enterprise=await dataSource.getRepository(Enterprise).findOne(
            { where: { email: req.body.email } }
            );

        const employee=await dataSource.getRepository(Employee).findOne(
            { where: { email: req.body.email } }
            );

        const ngo=await dataSource.getRepository(Ngo).findOne(
                { where: { email: req.body.email } }
                );

        if (enterprise || ngo || employee)
            return res.status(400).send({ error: 'user already exist' });

        const newEnterprise = await dataSource.getRepository(Enterprise).create();
        newEnterprise.email = email;
        newEnterprise.name = name;
        newEnterprise.fieldOfInterest = fieldOfInterest;
        newEnterprise.Location = Location;
        newEnterprise.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));;
        const response = await dataSource.getRepository(Enterprise).save(newEnterprise);
        const token = createTokenFromUser(response, Roles.Enterprise)
        const dto = createLoggedInUserDto(response, token);
        return res.status(200).send({ dto });
    }




// Employee Registration

    public async registerEmployee(req: Request, res: Response) {
        const { name, email, password, age, sex  } = req.body;



        const enterprise=await dataSource.getRepository(Enterprise).findOne(
            { where: { email: req.body.email } }
            );

        const employee=await dataSource.getRepository(Employee).findOne(
            { where: { email: req.body.email } }
            );

        const ngo=await dataSource.getRepository(Ngo).findOne(
                { where: { email: req.body.email } }
                );



        if (enterprise || ngo || employee)
            return res.status(400).send({ error: 'user already exist' });

        const newEmployee = await dataSource.getRepository(Employee).create();
        newEmployee.email = email;
        newEmployee.name = name;
        newEmployee.age = age;
        newEmployee.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        newEmployee.sex = sex;
        const response = await dataSource.getRepository(Employee).save(newEmployee);
        const token = createTokenFromUser(response, Roles.Employee)
        const dto = createLoggedInUserDto(response, token);
        return res.status(200).send({ dto });
    }


// NGO Registration
    public async registerNgo(req: Request, res: Response) {
        const { name, email, password, fieldOfInterest  } = req.body;



        const enterprise=await dataSource.getRepository(Enterprise).findOne(
            { where: { email: req.body.email } }
            );

        const employee=await dataSource.getRepository(Employee).findOne(
            { where: { email: req.body.email } }
            );

        const ngo=await dataSource.getRepository(Ngo).findOne(
                { where: { email: req.body.email } }
                );



        if (enterprise || ngo || employee)
            return res.status(400).send({ error: 'user already exist' });

        const newNgo = await dataSource.getRepository(Ngo).create();
        newNgo.email = email;
        newNgo.name = name;
        newNgo.fieldOfInterest = fieldOfInterest;
        newNgo.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));;
        const response = await dataSource.getRepository(Ngo).save(newNgo);
        const token = createTokenFromUser(response, Roles.Ngo)
        const dto = createLoggedInUserDto(response, token);
        return res.status(200).send({ dto });
    }
    /**
     * @api {post} /api/login Authenticate user
     * @apiName UserAuth
     * @apiGroup User
     * @apiParam {String} username
     * @apiParam {String} password
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "user": {"username":"mahmoud"},
     *       "token": "jwtaccesstoken"
     *     }
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "error": "user {mahmoud} not found"
     *     }
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 401
     *     {
     *       "error": "Invalid  password"
     *     }
     *
     */


// Login User
    public async authenticateUser(req: Request, res: Response, next: any) {
        passport.authenticate('local', { session: false }, (err, dto, info) => {
            if (!dto) {
                return res.status(401).json(info);
            } else {
                return res.json(dto);
            }
        })(req, res, next);
    }

}