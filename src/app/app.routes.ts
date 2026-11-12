import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Employees } from './pages/employees/employees';
import { Data } from './pages/data/data';
import { Payroll } from './pages/payroll/payroll';
import { Projects } from './pages/projects/projects';
import { SubContractors } from './pages/sub-contractors/sub-contractors';
import { Vendors } from './pages/vendors/vendors';
import { Amc } from './pages/amc/amc';
import { Attednance } from './pages/attednance/attednance';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'employees', component: Employees },
  { path: 'attendance', component: Attednance },
  { path: 'payroll', component: Payroll },
  { path: 'projects', component: Projects },
  { path: 'sub-contractors', component: SubContractors },
  { path: 'vendors', component: Vendors },
  { path: 'amc', component: Amc },
  { path: 'data', component: Data },
  { path: '**', redirectTo: 'dashboard' }
];