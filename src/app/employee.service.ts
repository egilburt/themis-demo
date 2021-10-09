import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee} from "./employee";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  createNewEmployee(employee: IEmployee) {
    this.http.post('http://dummy.restapiexample.com/api/v1/create', employee)
  }

  getAllEmployees(): Observable<IEmployee[]> {
    return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees').pipe(
      map(employees => employees['data'])
    )
  }

  updateEmployee(employee: IEmployee): void {
    this.http.put(`http://dummy.restapiexample.com/api/v1/update/${employee.id}`, employee)
  }

  deleteEmployee(id: number) {
    this.http.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
  }

}
