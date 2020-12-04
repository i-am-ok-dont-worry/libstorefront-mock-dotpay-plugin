import { inject, injectable } from 'inversify';
import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';
import { DotpayForm } from "../types";
import { buildDotpayPostBody } from "../utils";

@injectable()
export class DotpayDao {
    public getDotpayForm (orderId: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/dotpay/form/' + orderId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getDotpayPaymentStatus (orderId: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/dotpay/status/' + orderId),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public sendDotpayInformationForm (sslUrl: string, form: DotpayForm): Promise<Task> {
        console.warn('Sending dotpay form at: ', sslUrl, buildDotpayPostBody(form));
        return this.taskQueue.execute({
            url: sslUrl,
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                mode: 'cors',
                body: buildDotpayPostBody(form)
            },
            silent: true
        });
    }

    public constructor(@inject(TaskQueue) private taskQueue: TaskQueue) {}
}
