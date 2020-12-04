import { Task, TaskQueue } from '@grupakmk/libstorefront';
import { DotpayForm } from "../types";
export declare class DotpayDao {
    private taskQueue;
    getDotpayForm(orderId: string): Promise<Task>;
    getDotpayPaymentStatus(orderId: string): Promise<Task>;
    sendDotpayInformationForm(sslUrl: string, form: DotpayForm): Promise<Task>;
    constructor(taskQueue: TaskQueue);
}
