export class User {
  id: number;
  parentId: number;
  username: string;
  password: string;
  age: number;
  realName: string;
  phoneNumber: string;
  icon: string;
}

export class Assessment {
  userId: number;
  school: string;
  schoolType: number;
  major: string;
  toefl: number;
  japeneseLevel: number;
  schoolGPA: number;
  GPA: number;
  score: number;
}
