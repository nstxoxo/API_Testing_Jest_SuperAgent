import  superagent  from "superagent";
import { expectedArr } from "../objects/hw_6";
import { expectedObjGet } from "../objects/hw_6";
import { expectedObjPost } from "../objects/hw_6";
import { expectedObjPut } from "../objects/hw_6";
import { expectedObjPatch } from "../objects/hw_6";


const BASIC_URL = "https://reqres.in/api/"

describe("make API request", () => {
    test("Test GET LIST USERS", async () => {
        let res = await superagent
        .get(BASIC_URL + "users").query({page: 2})
        expect(res.status).toBe(200);
        expect(res.body.data).toEqual(expectedArr);
    }); 

    test("Test GET SINGLE USER", async () => {
        let res: any;
        try {
            res = await superagent.get(BASIC_URL + "users").query({id: 2})
        } catch (err: any) {
            console.log(err.message);
        }    
        expect(res.status).toBe(200);
        expect(res.body.data).toEqual(expectedObjGet);
    }); 

    test("Test GET SINGLE USER NOT FOUND", async () => {
        let res: any;
        try {
            res = await superagent.get(BASIC_URL + "users/").query({id: 23})
            expect(res).toBe(200)  
        } catch (err: any) {
            console.log(err.status, err.message); 
        } 
    });

    test("Test GET SINGLE <RESOURCE> NOT FOUND", async () => {
        let res: any;
        try {
            res = await superagent.get(BASIC_URL + "unknown").query({id: 23})
            expect(res.status).toBe(200)  
        } catch (err: any) {
            console.log(err.status, err.message); 
        } 
    });

    test("Test POST CREATE", async () => {
        let res: any;
        try {
            res = await superagent
            .post(BASIC_URL + "users")
            .set("Content-Type", "application/json")
            .send({name: "Nastya", job: "student"})
        } catch (err: any) {
            console.log(err.message); 
        } 
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual(expectedObjPost.name);
        expect(res.body.job).toEqual(expectedObjPost.job);   
                    
    });

    test("Test PUT UPDATE", async () => {
        let res: any;
        try {
            res = await superagent
            .put(BASIC_URL + "users/").query({id: 2})
            .send({name: "Nastya", job: "developer"})
            .set("Content-Type", "application/json")
        } catch (err: any) {
            console.log(err.message); 
        } 
        expect(res.status).toEqual(200);
        expect(res.body.name).toEqual(expectedObjPut.name);
        expect(res.body.job).toEqual(expectedObjPut.job);
               
    });

    test("Test PATCH UPDATE", async () => {
        let res: any;
        try {
            res = await superagent
            .patch(BASIC_URL + "users/").query({id: 2})
            .set("Content-Type", "application/json")
            .send({name: "morpheus",job: "zion resident"})
        } catch (err: any) {
            console.log(err.message); 
        } 
        expect(res.status).toBe(200);
        expect(res.body.name).toEqual(expectedObjPatch.name);
        expect(res.body.job).toEqual(expectedObjPatch.job);
                
    });

    test("Test DELETE", async () => {
        let res: any;
        try {
            res = await superagent
            .delete(BASIC_URL + "users/").query({id: 2})
        } catch (err: any) {
            console.log(err.message); 
        } 
        expect(res.status).toBe(204);               
    });

    test("Test POST REGISTER - SUCCESSFUL", async () => {
        let res: any;
        try {
            res = await superagent
            .post(BASIC_URL + "register")
            .set("Content-Type", "application/json")
            .send({email: "eve.holt@reqres.in", password: "pistol"})
        } catch (err: any) {
            console.log(err.message); 
        } 
        expect(res.statusCode).toEqual(200);
        console.log(res.body);
    });

    test("Test POST REGISTER - UNSUCCESSFUL", async () => {
        let res: any;
        try {
            res = await superagent
            .post(BASIC_URL + "register")
            .set("Content-Type", "application/json")
            .send({email: "sydney@fife"})
            expect(res.statusCode).toEqual(200);
        } catch (err: any) {
            console.log(err.status, err.message); 
        } 
    });
}); 