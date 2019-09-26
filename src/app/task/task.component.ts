import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Task } from './task';
import {Apiservice} from '../apiservice.service';
import {NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import {UserModal} from '../usermodal';
import {TaskModal} from '../taskmodal';
import {ProjectModal} from '../projectmodal';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private modalService:NgbModal,private dateservice:DatePipe,private apiService:Apiservice) { }

  ngOnInit() {
  }

  
  
  buttonValue='Add';
  taskModel=new Task();
  isDisabled=false;
  isErrormsg=false;
  theCheckbox=true;
  dateset()
  {
    console.log('coming to date');
    if(this.taskModel.IsParentTask)
    {
      this.isDisabled=true;
     //this.taskModel.startDate=this.dateservice.transform(new Date(),'yyyy-MM-dd');
      let endDate= new Date();
      endDate.setDate(endDate.getDate()+1);
     // this.projectModel.endDate=this.dateservice.transform(endDate,'yyyy-MM-dd');

    }
    else
    {
      this.isDisabled=false;
    }
  }
dateChange()
{
  if(this.taskModel.startDate < this.taskModel.endDate)
  {
    console.log('validation goood');
  }
  else{
    this.isErrormsg=true;
  }
}

openUser()
{
  console.log('comgint to user');
   const modalRef=this.modalService.open(UserModal);
  modalRef.componentInstance.name='Wrold';
  modalRef.result.then((result) => {
    if(result)
    {
      this.taskModel.userName=result.firstName;
      this.taskModel.userId=result.userId;
    }
  }); 
}

openTask()
{
  console.log('comgint to user');
   const modalRef=this.modalService.open(TaskModal);
  modalRef.componentInstance.name='Wrold';
  modalRef.result.then((result) => {
    if(result)
    {
      this.taskModel.parentTaskDescription=result.parentTaskDescription;
    }
  }); 
}
openProject()
{
  console.log('comgint to user');
   const modalRef=this.modalService.open(ProjectModal);
  modalRef.componentInstance.name='Wrold';
  modalRef.result.then((result) => {
    if(result)
    {
      this.taskModel.projectDescription=result.projectDescription;
      this.taskModel.projectId=result.projectId;
    }
  }); 
}

addTask()
{
  //this.projects.push(this.projectModel);
  //this.projectModel={};
  console.log('Add Task');
   
    this.apiService.addTask(this.taskModel);
    
     this.buttonValue='Add';
     this.taskModel={};
  this.isDisabled=true;
  this.theCheckbox=false;
}

reset()
{
  
 // this.projectModel={};
  this.isDisabled=true;
  this.theCheckbox=false;
}
}
