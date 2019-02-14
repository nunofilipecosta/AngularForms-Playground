import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit() {}

  onNavigate(): void {
    // this.router.navigate(['/got']).then(() => console.log('sucess'));
    // this.router.navigate('/got');
    // this.router.navigateByUrl('/got');

    this.router.navigate([{ outlets: { bottom: ['messages'] } }]);
    // this.router.navigate(['got',  { outlets: { bottom: ['messages'] } }]);
    this.router.navigateByUrl('got(bottom:messages)');
    this.router.navigate([
      {
        outlets: {
          primary: ['got'],
          bottom: ['messages']
        }
      }
    ]);
  }
}
