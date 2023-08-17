const cds = require('@sap/cds')

module.exports = class AdminService extends cds.ApplicationService {

    async init() {

        const sapConn = await cds.connect.to('OP_API_MAINTNOTIFICATION')

        this.before("CREATE", "MaintenanceItem", async (req) => {

            if (process.env.NODE_ENV !== 'production') {
                req.data.s4Id = 'not-prod'
            } else {

                let dataBlock = {}
                dataBlock.NotificationType = '11'
                dataBlock.NotificationText = req.data.problemDescription

                let insQuery = INSERT.into('MaintenanceNotification').entries([dataBlock])
                console.log(insQuery)

                let insResult = await sapConn.run(insQuery)

                req.data.s4Id = insResult.MaintenanceNotification

            }



        })

        super.init(...arguments)
    }

}