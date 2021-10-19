import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

constructor(private toastController: ToastController) { }


async showToast(toastMessage: string) {
  const toast = await this.toastController.create({
    message: toastMessage,
    duration: 1000
  });
  toast.present();
}
}
