import { Component } from '@angular/core';
import { View } from '../../../permission-custom-directive/permission';
import { Sidebar } from '../../sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebar = Sidebar;
  view = View;
}
