import { NgModule } from "@angular/core";
import { GlobalSettingsComponent } from "../global-settings/global-settings.component";
import { ZonesSettingsComponent } from "../zones-settings/zones-settings.component";
import { ZoneComponent } from "../zones-settings/zone/zone.component";
import { ZonesImportExportDialogComponent } from "../zones-settings/zones-import-export-dialog/zones-import-export-dialog.component";
import { ZoneToolBarComponent } from "../zones-settings/zone-tool-bar/zone-tool-bar.component";
import { GotItDialogComponent } from "./dialogs/got-it-dialog/got-it-dialog.component";
import { ConfirmDialogComponent } from "./dialogs/confirm-dialog/confirm-dialog.component";
import { OptionHelperDialogComponent } from "../global-settings/option-helper-dialog/option-helper-dialog.component";
import { UserSettingsService } from "./services/user-settings/user-settings.service";
import { GlobalSettingsService } from "../global-settings/services/global-settings.service";
import { ActivityService } from "./services/activity/activity.service";
import { UserSettingsDao } from "./dao/user-settings/user-settings.dao";
import { OptionHelperReaderService } from "../global-settings/services/option-helper-reader.service";
import { ZonesService } from "../zones-settings/shared/zones.service";
import { AppRoutingModule } from "./modules/app-routing.module";
import { DonateComponent } from "../donate/donate.component";
import { AboutDialogComponent } from "../about-dialog/about-dialog.component";
import { WindowService } from "./services/window/window.service";
import { SideNavService } from "./services/side-nav/side-nav.service";
import { LastSyncDateTimeDao } from "./dao/sync/last-sync-date-time.dao";
import { SyncService } from "./services/sync/sync.service";
import { ImportBackupDialogComponent } from "./dialogs/import-backup-dialog/import-backup-dialog.component";
import { ShareComponent } from "../share/share.component";
import { ReportComponent } from "../report/report.component";
import { CoreModule } from "../core/core.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { AdvancedMenuComponent } from "../advanced-menu/advanced-menu.component";
import { ExternalUpdatesService } from "./services/external-updates/external-updates.service";
import { AthleteModelResolverService } from "./services/athlete-settings/athlete-model-resolver.service";
import { DatedAthleteSettingsService } from "./services/dated-athlete-settings/dated-athlete-settings.service";
import { DatedAthleteSettingsDao } from "./dao/dated-athlete-settings/dated-athlete-settings.dao";
import { DataStore } from "./data-store/data-store";
import { ChromeDataStore } from "./data-store/impl/chrome-data-store.service";
import { ActivityDao } from "./dao/activity/activity.dao";
import { FaqComponent } from "../faq/faq.component";

const ChromeDataStoreProvider = {provide: DataStore, useClass: ChromeDataStore};

@NgModule({
	imports: [
		CoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule
	],
	exports: [
		CoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule
	],
	declarations: [
		// Components
		GlobalSettingsComponent,
		ZonesSettingsComponent,
		ZoneComponent,
		DonateComponent,
		ShareComponent,
		ReportComponent,
		AdvancedMenuComponent,
		FaqComponent,

		// Dialogs
		ZoneToolBarComponent,
		GotItDialogComponent,
		ConfirmDialogComponent,
		OptionHelperDialogComponent,
		ZonesImportExportDialogComponent,
		AboutDialogComponent,
		ImportBackupDialogComponent
	],
	entryComponents: [
		GotItDialogComponent,
		ConfirmDialogComponent,
		OptionHelperDialogComponent,
		ZonesImportExportDialogComponent,
		AboutDialogComponent,
		ImportBackupDialogComponent
	],
	providers: [
		ChromeDataStoreProvider,
		SyncService,
		LastSyncDateTimeDao,
		UserSettingsService,
		UserSettingsDao,
		DatedAthleteSettingsService,
		DatedAthleteSettingsDao,
		AthleteModelResolverService,
		ActivityService,
		ActivityDao,
		GlobalSettingsService,
		OptionHelperReaderService,
		ZonesService,
		SideNavService,
		WindowService,
		ExternalUpdatesService
	]
})
export class SharedModule {
}
