import { Injectable } from "@nestjs/common";
@Injectable({})
export class AuthService{
signup (){
return {msg:"I have a signup"}
}


signin(){
    return {msg:"I have a signin"}
  }
}
