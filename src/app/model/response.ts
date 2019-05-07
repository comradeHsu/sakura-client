/**
 * Created by Administrator on 2017/10/22.
 */
export class ResponseResult {
  code: number;
  message: string;
  data: any;
  totalCount?: number;
  pageNumber?: number;
  pageSize?: number;
}
