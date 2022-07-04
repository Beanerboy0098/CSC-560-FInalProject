import { Component, OnInit } from '@angular/core';
import { SystemService } from './Systems.service';


import { Systems } from './Systems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SystemService]
})
export class AppComponent implements OnInit {
  title = 'Nintendo Systems';
 System?: Systems[];
 Systems?: Systems;
 Name?: string;
 Architecture?: string;
 Release_Date?: string;
 Launch_Titles?: number;
 Media?: string;
 Type?: string;

  
  constructor(private SystemService: SystemService) { 
    
    
  }

  getsystems()
  {
    this.SystemService.getsystem().subscribe(Systems => {
      this.System = Systems;
    });
  }

  addsystem()
  {
  const newSystem = {
    Name: this.Name?? "Nintendo Switch",
    Release_Date: this.Release_Date?? "March 3, 2017",
    Architecture: this.Architecture?? "",
    Launch_Titles: this.Launch_Titles?? 0,
    Media: this.Media?? "Game cart",
    Type: this.Type?? "Home video game console"
    }
    this.SystemService.addsystem(newSystem)
    .subscribe(Systems =>
      this.System?.push(Systems));

      this.SystemService.getsystem().subscribe(Systems => {
    this.System = Systems;
  });
}
deletesystem(id:any)
{
  var players = this.Systems;
  this.SystemService.deletesystem(id)
    .subscribe(data => {
      if(data.n==1)
      {
        for(var i = 0; i<(this.System?.length ?? 0); i++)
        {
          if(this.System![i]._id == id)
          {
            this.System!.splice(i,1);
          }
        }
      }
    });
  

    this.SystemService.getsystem().subscribe(Systems => {
      this.System = Systems;
    });
}


Updatedsystem(id:any)
{
const Updatedsystem = {
  Name: this.Name?? "Nintendo Switch",
  Release_Date: this.Release_Date?? "March 3, 2017",
  Architecture: this.Architecture?? "",
  Launch_Titles: this.Launch_Titles?? 0,
  Media: this.Media?? "Game cart",
  Type: this.Type?? "Home video game console"
  }
  this.SystemService.updatesystem(id, Updatedsystem).subscribe();

  this.SystemService.getsystem().subscribe(Systems => {
    this.System = Systems;
  });
}



getLowestLaunchTitle()
{
  this.SystemService.getLowlaunchtitles().subscribe(Systems => {
    this.System = Systems;
  });
}

getMostLaunchTitlesorder()
{
  this.SystemService. getMostlaunchtitles().subscribe(Systems => {
    this.System = Systems;
  });
}


ngOnInit(): void {
  this.getsystems();
}
}

