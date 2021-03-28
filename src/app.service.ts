import { Injectable } from '@nestjs/common';
import * as fs  from 'fs';
import * as path from 'path';
import * as csv from 'csv-parser';

@Injectable()
export class AppService {
  users: any = [];
  constructor(
  ) {}

  async getAll(): Promise<any> {
    fs.createReadStream(path.resolve( 'src/assets', 'data.csv'))
      .pipe(csv({ separator: ';' }))
      .on('error', error => console.error(error))
      .on('data', row => {
        this.users.push(row);
      })
      .on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
  }

  async searchUsers(text) {
    const filterdUsers = this.users.filter(el => {
      return el['﻿First Names']?.toLowerCase().indexOf(text.text) >= 0 || el['Last names']?.toLowerCase().indexOf(text.text) >= 0 ||
      el['email']?.indexOf(text.text) >= 0 || el['﻿Company']?.toLowerCase().indexOf(text.text) >= 0
    })

    return filterdUsers;
  }




}
