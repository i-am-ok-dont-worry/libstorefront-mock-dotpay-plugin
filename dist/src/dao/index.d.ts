import { Task, TaskQueue } from '@grupakmk/libstorefront';
export declare class DotpayDao {
    private taskQueue;
    getDotpayForm(orderId: number): Promise<Task>;
    getDotpayPaymentStatus(orderId: number): Promise<Task>;
    constructor(taskQueue: TaskQueue);
}
