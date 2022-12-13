import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from '../../shared/models/menu-item.model';

@Component({
  selector: 'app-default',
  templateUrl: './default.layout.component.html',
  styleUrls: ['./default.layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      // color: '#ff7f0e',
    },
    {
      title: 'Movie',
      icon: 'movie',
      // color: '#ff7f0e',
      subMenu: [
        {
          title: 'Popular',
          icon: 'money',
          link: '/movie/popular',
          color: '#ff7f0e',
        },
      ],
    },
    {
      title: 'Test',
      icon: 'star',
      link: '/test',
      color: 'primary',
    },
  ];
}
