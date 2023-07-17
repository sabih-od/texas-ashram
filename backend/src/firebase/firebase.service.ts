import {Injectable} from "@nestjs/common";
import {firebaseAdmin} from "./firebase-admin";

@Injectable()
export class FirebaseService {
    constructor() {}

    async sendNotification(body: {}): Promise<any> {
        try {
            const notification = {
                ...body,
                topic: 'test', // The topic to which the notification will be sent
            };

            let response = await firebaseAdmin.messaging().send(notification);

            return {
                success: true,
                message: 'Notification sent successfully',
                data: response
            };
        } catch (error) {
            return {
                success: false,
                message: 'Notification not sent',
                data: error
            };
        }
    }
}
