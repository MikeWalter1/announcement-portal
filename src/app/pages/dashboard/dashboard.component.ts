import { AngularFireDatabase } from 'angularfire2/database';
import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import 'rxjs';
import { Observable } from 'rxjs/Observable';


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}
class Announcement {
  public Description: string;
  public Country: string;
  public PublicationDate: string;
  public Deadline: string;
  public DocumentNumber :string;
  public UrlLink :string;
  public DocumentBody :string;
  public DocumentBodyLines :string[];

  public ProcurementNumber :string;
  public ReferenceNumberOfAnnouncement :string;

  public CompanyAddressTextArea :string;
  public CompanyName :string;
  public Street :string;
  public City :string;
  public PostalCode :string;
  public PhoneNumber :string;
  public Email :string;
  public Website :string;

  public AnnouncementType :string;
  public AssignmentDescription :string;
  public AssignmentAddress :string;

  public Requirements :string;
  public MinimumRequirements :string;
  public MiscInformation :string;
}

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnDestroy {

  private alive = true;
  selectedAnnouncement: Announcement;
  public announcements: Observable<Announcement[]>;
  constructor(public db: AngularFireDatabase) {
      this.announcements = this.db.list<Announcement>('/').valueChanges();
      // .subscribe(announcements => {
        // this.announcements = announcements;
      // });

  }

  replaceLineBreak(s:string) {
    return s.replace('\n','<br />');
  }

  // constructor(private themeService: NbThemeService) {
  //   this.themeService.getJsTheme()
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe(theme => {
  //       // this.statusCards = this.statusCardsByThemes[theme.name];
  //   });
  // }

  ngOnDestroy() {
    this.alive = false;
  }
}
