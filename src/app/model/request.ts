import {Page} from './page';

export class Request extends Page {
  name: string;
  parentId: number | string;
  subId: number| string;
  rankingTop: number| string;
  rankingBottom: number| string;
}

export class MajorRequest extends Page {
  majorName: string;
  degreeType: string;
}
