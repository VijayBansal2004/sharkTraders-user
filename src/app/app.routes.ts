import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { HomeComponent } from './front/home/home.component';
import { WhyChooseUsComponent } from './front/why-choose-us/why-choose-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent as DashboardHome } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { BecomeAPartnerComponent } from './front/become-a-partner/become-a-partner.component';
import { ContactUsComponent } from './front/contact-us/contact-us.component';
import { GetDemoComponent } from './front/get-demo/get-demo.component';
import { BlogComponent } from './front/blog/blog.component';
import { MultiAssetPlatformComponent } from './front/features/multi-asset-platform/multi-asset-platform.component';
import { FundamentalAnalysisComponent } from './front/features/fundamental-analysis/fundamental-analysis.component';
import { MobileTradingComponent } from './front/features/mobile-trading/mobile-trading.component';
import { MultipleOrderTypeComponent } from './front/features/multiple-order-type/multiple-order-type.component';
import { PredictiveTradingOptionsComponent } from './front/features/predictive-trading-options/predictive-trading-options.component';
import { TechnicalAnalysisComponent } from './front/features/technical-analysis/technical-analysis.component';
import { WebPlatformsComponent } from './front/features/web-platforms/web-platforms.component';
import { AutomationComponent } from './front/features/automation/automation.component';

export const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'why-choose-us', component: WhyChooseUsComponent },
      { path: 'become-a-partner', component: BecomeAPartnerComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'get-demo', component: GetDemoComponent },
      { path: 'fundamental-analysis', component: FundamentalAnalysisComponent },
      { path: 'mobile-trading', component: MobileTradingComponent },
      { path: 'multi-asset-platform', component: MultiAssetPlatformComponent },
      { path: 'multiple-order-type', component: MultipleOrderTypeComponent },
      {
        path: 'predictive-trading-options',
        component: PredictiveTradingOptionsComponent,
      },
      { path: 'technical-analysis', component: TechnicalAnalysisComponent },
      { path: 'web-platforms', component: WebPlatformsComponent },
      { path: 'automation', component: AutomationComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardHome },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
