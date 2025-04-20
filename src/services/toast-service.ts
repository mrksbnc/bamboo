let instance: ToastService | null = null;

export interface BoToastService {
	//
}

export class ToastService implements BoToastService {
	static get instance(): ToastService {
		if (!instance) {
			instance = new ToastService();
		}
		return instance;
	}
}
