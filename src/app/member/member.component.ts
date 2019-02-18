import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  memberDataCom;

  constructor(private memberService: MemberService) { }

  ngOnInit() {

    this.memberService.memberDate().subscribe(memberDataRes => {
      this.memberDataCom = memberDataRes;
    })
  }
}
