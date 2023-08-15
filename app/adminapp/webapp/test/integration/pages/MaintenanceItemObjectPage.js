sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'riz.devtober.ui.adminapp',
            componentId: 'MaintenanceItemObjectPage',
            entitySet: 'MaintenanceItem'
        },
        CustomPageDefinitions
    );
});