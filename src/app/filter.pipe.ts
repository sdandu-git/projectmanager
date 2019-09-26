import {Pipe,PipeTransform} from '@angular/core';
import {User} from './user/user';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(items:any[],searchText:string):any[]
    {
        console.log('coming to filter');
        if(!items) return [];
        if(!searchText) return items;
        searchText=searchText.toLowerCase();
        console.log('coming to filter2');
            return items.filter(it => 
                 { return (it.firstName.toLowerCase().includes(searchText) || it.employeeId.toLowerCase().includes(searchText) || it.lastName.toLowerCase().includes(searchText));
                 });
        
            }

}