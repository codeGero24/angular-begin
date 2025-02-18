import { HttpHeaders } from '@angular/common/http';

export type httpOptions = {
  headers: HttpHeaders;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
};

export type RespUsers = {
  users: User[];
};

export type RespRefreshToken = {
  token: string;
};
