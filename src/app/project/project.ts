import {User} from '../user/user';
export class Project
{
    constructor()
    {

    }

    projectDescription:string;
    startDate:Date;
    endDate:Date;
    priority:number=0;
    userDetails:User;
    managerName:string;
    taskCount:number;
    projectId:number;
    userId:number;
    taskNumber:number;
    completed:boolean;
}