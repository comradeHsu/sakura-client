import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'assessment' })
export class AssessmentPipe implements PipeTransform {

  constructor() { }

  transform(value: number, type: number): string {
    let target: string;
    switch (type) {
      case 1:
        target = this.transformSchoolType(value);
        break;
      case 2:
        target = this.transformJapanese(value);
        break;
      case 3:
        target = this.transformScore(value);
        break;
    }
    return target;
  }

  private transformSchoolType(value: number): string {
    let target: string;
    switch (value) {
      case 0:
        target = '985院校';
        break;
      case 1:
        target = '211院校';
        break;
      case 2:
        target = '一般院校';
        break;
    }
    return target;
  }

  private transformJapanese(value: number): string {
    let target: string;
    switch (value) {
      case 1:
        target = 'N1';
        break;
      case 2:
        target = 'N2';
        break;
    }
    return target;
  }

  private transformScore(value: number): string {
    let target: string;
    switch (value) {
      case 1:
        target = '985/211院校，语言成绩好，日语流畅';
        break;
      case 2:
        target = '211院校，语言成绩一般，日语了解';
        break;
      case 3:
        target = '一般院校，语言成绩一般，不懂日语';
        break;
    }
    return target;
  }

}
