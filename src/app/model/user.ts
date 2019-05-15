export class User {
  id: number;
  parentId: number;
  username: string;
  password: string;
  age: number;
  realName: string;
  phoneNumber: string;
  icon: string;
  assessed: boolean;
  userType: number;
}

export class Agreement {
  userId: number;
  apply: string;
  train: string;
  visa: string;
}

export class Assessment {
  userId: number;
  school: string;
  schoolType: number;
  major: string;
  toefl: number;
  japaneseLevel: number;
  schoolGpa: number;
  gpa: number;
  score: number;

  public init(): Assessment {
    this.schoolType = null;
    this.japaneseLevel = null;
    this.schoolGpa = null;
    this.gpa = null;
    this.score = null;
    return this;
  }
}
