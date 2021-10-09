import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IEmployee} from "../employee";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent implements OnInit {

  employees: IEmployee[] = [];

  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((employees) => {
      this.employees = employees;
    })
  }

  openAddDialog(): void {
    let newEmployeeId = 1

    if (this.employees.length) {
      newEmployeeId = this.employees[this.employees.length - 1].id + 1
    }

    let newEmployee: IEmployee = {
      id: newEmployeeId,
      employee_name: '',
      employee_salary: 0,
      employee_age: 0,
      profile_image: ''
    }

    const dialogRef = this.dialog.open(AddOrEditEmployeeDialog, {
      width: "90vw",
      maxWidth: "400px",
      data: {
        id: newEmployee.id,
        employee_name: '',
        employee_salary: 0,
        employee_age: 0,
        profile_image: ''
      }
    });

    dialogRef.afterClosed().subscribe((result: IEmployee) => {
      if (this.employeeDataIsValid(result)) {
        this.employeeService.createNewEmployee(result);
        this.employees.push(result);
      }
    })
  }

  openEditDialog(employee: IEmployee, index: number): void {

    const dialogRef = this.dialog.open(AddOrEditEmployeeDialog, {
      width: "90vw",
      maxWidth: "400px",
      data: {
        id: employee.id,
        employee_name: employee.employee_name,
        employee_salary: employee.employee_salary,
        employee_age: employee.employee_age,
        profile_image: ''
      }
    });

    dialogRef.afterClosed().subscribe((result: IEmployee) => {
      if (this.employeeDataIsValid(result)) {
        this.employeeService.updateEmployee(result);
        this.employees[index] = result;
      }
    })
  }

  employeeDataIsValid(employee: IEmployee): boolean {
    return employee.employee_name !== '' &&
      employee.employee_salary !== 0 &&
      employee.employee_age !== 0
  }

  deleteEmployee(employeeToDeleteId: number, index: number): void {
    this.employeeService.deleteEmployee(employeeToDeleteId);
    this.employees.splice(index, 1);
  }

}

@Component({
  selector: 'add-or-edit-employee-dialog',
  templateUrl: 'add-or-edit-employee-dialog.html',
})
export class AddOrEditEmployeeDialog {

  constructor(
    public dialogRef: MatDialogRef<AddOrEditEmployeeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IEmployee) {
  }

  close(): void {
    this.dialogRef.close();
  }

}
