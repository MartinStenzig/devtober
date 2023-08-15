using {riz.devtober as my} from '../db/core';

service AdminService{
    entity MaintenanceItem as projection on my.MaintenanceItem;
}