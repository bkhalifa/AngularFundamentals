import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../../shared';
import { Session } from 'protractor';
import { AuhtService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';


@Component({
  selector:'session-list',
  templateUrl:'./session-list.component.html'
})
export class SessionListComponent implements OnChanges{

constructor(public auth:AuhtService, private voterService:VoterService){}

@Input() sessions :ISession[]
@Input() filterQuery:string
@Input() sortQuery :string
sortedsessions:ISession[] =[]

ngOnChanges(): void {
  if(this.sessions){
    this.filterSession(this.filterQuery)
    this.filterQuery ==='name' ? this.sortedsessions.sort(sortByNameAsc) :
                                this.sortedsessions.sort(sortByVotesDesc)
  }

}

filterSession(filter){
  if(filter==='all'){
   this.sortedsessions =  this.sessions.slice(0) //clone le array
  }else{
    this.sortedsessions= this.sessions.filter(session=>{
      return session.level.toLocaleLowerCase()===filter
    })
  }
}

toggleVote(session:ISession){
  if(this.userHasVoted(session)){
    this.voterService.deleteVoter(session, this.auth.currentUser.userName )
  }else{
    this.voterService.addVoter(session, this.auth.currentUser.userName)
  }
  if(this.sortQuery==='votes'){
    this.sortedsessions.sort(sortByVotesDesc)
  }
}
userHasVoted(session){
  return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
}
}

function sortByNameAsc(s1:ISession, s2:ISession){
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}
function sortByVotesDesc(s1:ISession, s2:ISession){
  return s2.voters.length - s1.voters.length
}
