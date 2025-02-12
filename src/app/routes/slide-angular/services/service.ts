import { HttpHeaders } from '@angular/common/http';

export type httpOptions = {
  headers: HttpHeaders;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
};

export type RespUser = {
  users: User[];
};

export type RespRefreshToken = {
  token: string;
};
