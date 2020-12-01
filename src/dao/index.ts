import { inject, injectable } from 'inversify';
import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';

@injectable()
export class DotpayDao {
    public getDotpayForm (orderId: number): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.processLocalizedURLAddress('/vendor/dotpay/form/' + orderId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getDotpayPaymentStatus (orderId: number): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.processLocalizedURLAddress('/vendor/dotpay/status/' + orderId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public constructor(@inject(TaskQueue) private taskQueue: TaskQueue) {}
}