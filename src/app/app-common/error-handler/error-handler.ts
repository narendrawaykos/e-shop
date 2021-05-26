import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  handleError(_error: any) {
    console.log(_error);
    
    this.openSnackBar(_error.message, true);
  }

  constructor(
    private snackBar: MatSnackBar
  ) {

  }

  openSnackBar(msg: any, isError: any) {
    // this.router.navigate['']
    let config: MatSnackBarConfig = {
      horizontalPosition: 'center',
      direction: 'ltr',
      duration: 1000,
      verticalPosition: 'top',
      panelClass: ['snackbar-danger'],
    };
    this.snackBar.open(msg, 'OK', config);
  }
}
