import {Client,Account, ID} from 'appwrite'
import conf from '../conf/conf'

export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try{
           const userAccount = await this.account.create(ID.unique(), email, password, name)
           if(userAccount){
            // call another method
              return this.login({email, password});
           }
           else{
            return userAccount;
           }
        }catch(error){
            throw error
        }
    }

    async login({email, password}){
         try{
            await this.account.createEmailSession(email,password);
         }catch(error){
             throw error
         }
         return null;
    }
     // account hai ya nhi
    async getCurrentUser(){
        try {
             return await this.account.get();
        } catch (error){
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
    }

    async logout(){
        try{
            await this.account.deleteSessions()
        }catch (error){
            throw error
        }
    }
}

const authService = new AuthService() 

export default authService
// const client = new Client()
//     .setEndpoint(conf.appwriteUrl)
//     .setProject(conf.appwriteProjectId)

// const account = new Account(client)