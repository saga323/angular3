import { Component, inject } from '@angular/core';
import { UserDataService } from '../../../../services/userData.service';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.css']
})
export class TestServicesComponent {
  userDataservice = inject(UserDataService);
}
