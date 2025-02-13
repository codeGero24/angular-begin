import { Component } from '@angular/core';
import { routes } from './app-routing.module';
import { Route, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-begin';
  founder = 'Calogero';
  routerLinks = routes;

  constructor() {
    this.routerLinks = this.getAllRoutesRecursive(this.routerLinks);
  }

  /**
   * Recursively processes Angular routes to create a flattened route structure with full paths
   * @param routes - The Angular Routes array to process
   * @param parentPath - The parent path string to prepend to child routes (default: '')
   * @returns Routes array with processed paths and nested children
   */
  private getAllRoutesRecursive(
    routes: Routes,
    parentPath: string = ''
  ): Routes {
    return routes.reduce((acc: Routes, route: Route) => {
      const fullPath = parentPath + `/${route.path}`;

      if (route.children) {
        const pathParent = `/${route.path}`;
        acc.push({
          path: pathParent,
          title: route.title,
          children: [...this.getAllRoutesRecursive(route.children, pathParent)],
        });
      } else {
        acc.push({ path: fullPath, title: route.title });
      }

      return acc;
    }, []);
  }
}
