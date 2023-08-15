using AdminService as service from '../../srv/admin';

annotate service.MaintenanceItem with @(
    odata.draft.enabled : true,
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'S4 Id',
            Value : s4Id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Problem Description',
            Value : problemDescription,
        },
    ]
);
annotate service.MaintenanceItem with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'S4 Id',
                Value : s4Id,
                ![@Common.FieldControl] : #ReadOnly
            },
            {
                $Type : 'UI.DataField',
                Label : 'Problem Description',
                Value : problemDescription,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
