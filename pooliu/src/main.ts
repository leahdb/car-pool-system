import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

registerLicense(
  'Mgo+DSMBaFt/QHRqVVhjVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iS3xQd0FhWntadHxdRQ==;Mgo+DSMBPh8sVXJ0S0J+XE9HflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSdEdgWHtcc3BRQ2BbUg==;ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhWn5acndRQmVeUkA=;ODEwMTQxQDMyMzAyZTM0MmUzME9aYnp3UG9SL20xSDlDNHlpVHZzR1p6WExVSWpLZnhWaVNCcXRGMHlZZ3c9;ODEwMTQyQDMyMzAyZTM0MmUzMGFqUzFBM3crenhJaW9wQm13YnB6dWJuZklwYlU5Vzk1eDBPMG9OVDdPQm89;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERhW3xfdHZWQmRZWUx1;ODEwMTQ0QDMyMzAyZTM0MmUzMGR6R0Rmd2RhckhMeEh2TmF1enVERGhRajNXc21WN0dla3c4TDVvSHYrbjA9;ODEwMTQ1QDMyMzAyZTM0MmUzMFp3SGwrbDA5OUVTKzZDaUVvTUhtUjhIemZxSEgvd0wrNVZTNTdnaHVrQjg9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhWn5acndRQmZYVkc=;ODEwMTQ3QDMyMzAyZTM0MmUzMEpscjZKMTcvVmpBRW9yY01mSXBlalBTWUZZcGpxRDI1WHM2MEdxcjlMaUU9;ODEwMTQ4QDMyMzAyZTM0MmUzMFNDWldDaFBOT0dCbXg5OXAwMnRLY3h4QkdVYnVrOGRUbmhHenlJRWZqMWc9;ODEwMTQ5QDMyMzAyZTM0MmUzMGR6R0Rmd2RhckhMeEh2TmF1enVERGhRajNXc21WN0dla3c4TDVvSHYrbjA9'
);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
