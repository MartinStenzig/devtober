sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riz/devtober/ui/adminapp/test/integration/FirstJourney',
		'riz/devtober/ui/adminapp/test/integration/pages/MaintenanceItemList',
		'riz/devtober/ui/adminapp/test/integration/pages/MaintenanceItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, MaintenanceItemList, MaintenanceItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riz/devtober/ui/adminapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMaintenanceItemList: MaintenanceItemList,
					onTheMaintenanceItemObjectPage: MaintenanceItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);