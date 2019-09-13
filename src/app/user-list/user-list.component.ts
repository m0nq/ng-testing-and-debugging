import { Component, OnInit } from '@angular/core';

import { XyzFilterByService } from '../shared/filter-by.service';
import { XyzUserListService } from './user-list.service';
import { XyzWebStorageService } from '../shared/web-storage.service';

@Component({
  selector: 'xyz-user-list',
  providers: [
    XyzFilterByService,
    XyzUserListService,
    XyzWebStorageService
  ],
  templateUrl: 'user-list.component.html'
})
export class XyzUserListComponent implements OnInit {
  filter: string;
  users: User[];

  constructor(
    private xyzUserListService: XyzUserListService,
    private xyzFilterByService: XyzFilterByService,
    private xyzWebStorageService: XyzWebStorageService
  ) {
  }

  ngOnInit() {
    this.xyzUserListService.get().then(users => this.users = users);
  }

  onFilter(filter) {
    this.filter = filter;
    this.xyzUserListService.get().then(users => {
      this.users = this.xyzFilterByService.get({ data: users, filter: filter });
    });
  }

  onClear() {
    this.xyzUserListService.get().then(users => this.users = users);
    this.filter = '';
  }
}
