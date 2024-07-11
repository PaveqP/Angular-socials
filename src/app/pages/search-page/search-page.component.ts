import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/services/profile-service.service';
import { IProfile } from '../../data/interfaces/profile.interface';
import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService: ProfileService = inject(ProfileService)
  profiles: IProfile[] = []

  constructor() {
    this.profileService.getTestAccounts().subscribe(val => {
      this.profiles = val
    })
  }
}
